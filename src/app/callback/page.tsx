'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { env } from '~/env';



// const clientId = "325fb7e31b3d4945985c2aa0e38d3df9";
const clientId = env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;

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
    const payload  =  await result.json();
    console.log('callback')
    console.log({payload})

    const { access_token } = payload
    localStorage.setItem('access_token', access_token);
    console.log('returned access_token', access_token)
    return access_token;
}

export default function Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const code= searchParams.get('code');

  useEffect(() => {
    if (code) {
      getAccessToken(clientId, code).then((accessToken) => {
        // Store the access token in local storage or state management solution
        localStorage.setItem('accessToken', accessToken)
        router.push('/')
      });
    }
  }, [code, router]);

  return <div>Loading...</div>;
}