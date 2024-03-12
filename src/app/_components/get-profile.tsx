'use client'
import { useState, useEffect } from 'react';
import { Button } from '~/components/ui/button';
import { env } from '~/env';
import { UserProfile, fetchProfile, fetchRecentlyPlayed, redirectToAuthCodeFlow } from '../music/components/spotify-api';

// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
const clientId = env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;


const  handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessTokenExpiration');
    window.location.reload();
}

const handleLogin = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!code) {
        redirectToAuthCodeFlow(clientId);
    }
};


export default function SpotifyLogin({profile, setProfile, recentlyPlayed, setRecentlyPlayed}) {
   

    const handleFetchRecentlyPlayed = async () => {
        try {
            const recentlyPlayedData = await fetchRecentlyPlayed();
            setRecentlyPlayed(recentlyPlayedData);
            console.log('setting recentlyPlayedData', recentlyPlayedData);
        } catch (error) {
            console.error('Failed to fetch recently played tracks', error);
        }
    }

    useEffect(() => {
        const accessTokenExpiration = localStorage.getItem('accessTokenExpiration');
        const currentTime = new Date().getTime();
        const isTokenExpired = accessTokenExpiration && new Date(accessTokenExpiration).getTime() < currentTime;

        if (isTokenExpired) {
            console.log(localStorage.getItem('accessToken'))
            localStorage.removeItem('accessToken');
            localStorage.removeItem('accessTokenExpiration');
            console.log('Access token expired. Please login again.');
        } else {
            const storedAccessToken = localStorage.getItem('accessToken') ?? '';
            if (storedAccessToken !== '' && storedAccessToken !== 'undefined') {
                fetchProfile(storedAccessToken).then((profileData) => {
                    setProfile(profileData);
                    console.log('setting profileData', profileData);
                });

                handleFetchRecentlyPlayed()
            }
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
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={handleFetchRecentlyPlayed}>Get Recently Played</Button>
        </div>
    );
}