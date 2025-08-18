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
  console.log(albumArt)

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
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="50px" height="50px" fillRule="nonzero">
          <g fillOpacity="0" fill="#dddddd" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
            <path d="M0,256v-256h256v256z" id="bgRectangle"/>
          </g>
          <g fill="#f44336" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
            <g transform="scale(5.12,5.12)">
              <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,12.15 9.85,22 22,22c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM25,11c7.72,0 14,6.28 14,14c0,7.72 -6.28,14 -14,14c-7.72,0 -14,-6.28 -14,-14c0,-7.72 6.28,-14 14,-14zM25,13c-6.617,0 -12,5.383 -12,12c0,6.617 5.383,12 12,12c6.617,0 12,-5.383 12,-12c0,-6.617 -5.383,-12 -12,-12zM22.01953,18.50195c0.1745,0.00325 0.34745,0.05053 0.50195,0.14453l9,5.5c0.296,0.181 0.47852,0.50452 0.47852,0.85352c0,0.349 -0.18152,0.67152 -0.47852,0.85352l-9,5.5c-0.16,0.097 -0.34048,0.14648 -0.52148,0.14648c-0.168,0 -0.33628,-0.04391 -0.48828,-0.12891c-0.316,-0.177 -0.51172,-0.51009 -0.51172,-0.87109v-11c0,-0.361 0.19572,-0.69409 0.51172,-0.87109c0.1585,-0.088 0.33331,-0.1302 0.50781,-0.12695z"/>
            </g>
          </g>
        </svg>
      </div>
    )}

    {/* Track Info */}
    <div className="flex flex-col justify-center min-w-0 w-full">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="text-sm text-first min-w-0 max-w-[140px] w-full"
      >
        <span className="mr-4 cursor-help truncate block">{name}</span>
      </Marquee>
      <span className="text-xs mt-[1px] text-second truncate">{artist}</span>
    </div>
  </div>
);
}
