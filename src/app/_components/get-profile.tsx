'use client'
import { useState, useEffect } from 'react';
import { env } from '~/env';


export async function redirectToAuthCodeFlow(clientId: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function getAccessToken(clientId: string, code: string) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("code_verifier", verifier!);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: { spotify: string; };
    followers: { href: string; total: number; };
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

interface Image {
    url: string;
    height: number;
    width: number;
}


// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
const clientId = env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;

export async function fetchProfile(code: string): Promise<UserProfile> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);


  const handleLogin = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } 
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken') ?? '';
    if (storedAccessToken !== '' && storedAccessToken !== 'undefined') {
      fetchProfile(storedAccessToken).then((profileData) => {
        setProfile(profileData);
        localStorage.removeItem('accessToken');
        console.log('setting profileData', profileData);
      });
    }
  }, []);

  if (!profile) {
    return (
      <div>
        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login to Spotify
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {profile.display_name}!</h1>
      <p>Email: {profile.email}</p>
      <p>Country: {profile.country}</p>
      {/* Display other profile data as needed */}
    </div>
  );
}