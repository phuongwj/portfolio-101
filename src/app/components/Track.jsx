'use client';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function Track() {
  const [track, setTrack] = useState([]);

  useEffect(() => {
    async function fetchTrack() {
      const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=phuongwj&api_key=${apiKey}&format=json`;

      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setTrack(responseJson);
      } catch (error) {
        console.error("Unable to fetch track:", error);
        setTrack(null);
      }
    }

    fetchTrack();
  }, []);

  const recent = track?.recenttracks?.track?.[0];
  const artist = recent?.artist?.['#text'];
  const name = recent?.name;
  const albumArt = recent?.image?.[2]?.['#text'];

  if (!recent) return null;

return (
  <div className="flex items-center bg-widBg rounded-lg shadow-md p-2 w-[220px] h-[48px]">
    {/* Album Art */}
    {albumArt && albumArt !== '' ? (
      <img
        src={albumArt}
        alt="Album Art"
        className="w-9 h-9 rounded-lg object-cover mr-3"
      />
    ) : (
      <div className="w-9 h-9 rounded-lg bg-gray-300 flex items-center justify-center mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          className="w-6 h-6 text-gray-400"
        >
          <path d="M13.106 20.424v-8.847l7.663 4.424zM16 8.217c-4.298 0-7.783 3.484-7.783 7.783s3.484 7.783 7.783 7.783c4.298 0 7.783-3.484 7.783-7.783v0c-0.007-4.296-3.487-7.776-7.782-7.783h-0.001zM16 24.877c0 0 0 0-0 0-4.903 0-8.877-3.975-8.877-8.877s3.975-8.877 8.877-8.877c4.903 0 8.877 3.975 8.877 8.877 0 0 0 0 0 0v0c0 0 0 0.001 0 0.001 0 4.902-3.974 8.877-8.877 8.877-0 0-0.001 0-0.001 0h0zM16 1.004c0 0 0 0-0 0-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996c8.282 0 14.996-6.714 14.996-14.996v0c-0.003-8.281-6.715-14.993-14.995-14.996h-0z" />
        </svg>
      </div>
    )}

    {/* Track Info */}
    <div className="flex flex-col justify-center">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="text-sm text-first"
      >
        <span className="mr-4 cursor-help">{name}</span>
      </Marquee>
      <span className="text-xs mt-[1px] text-second truncate">{artist}</span>
    </div>
  </div>
);
}
