'use client';

import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa';

interface SpotifyNowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function Spotify() {
  const { data, error } = useSWR<SpotifyNowPlayingData>('/api/spotify', fetcher, {
    refreshInterval: 3000,
    fallbackData: { isPlaying: false }
  });

  const isPlaying = data?.isPlaying;
  const title = data?.title;
  const artist = data?.artist;
  const albumImageUrl = data?.albumImageUrl;
  const songUrl = data?.songUrl;

  return (
    <div className="w-full max-w-md bg-white/95 border border-blue-100/80 rounded-2xl shadow-[0_8px_30px_rgba(219,234,254,0.3)] backdrop-blur-md p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(191,219,254,0.5)] hover:border-blue-200">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounceBar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .animate-bar-1 { animation: bounceBar 0.8s ease-in-out infinite alternate; }
        .animate-bar-2 { animation: bounceBar 0.8s ease-in-out infinite alternate; animation-delay: 0.15s; }
        .animate-bar-3 { animation: bounceBar 0.8s ease-in-out infinite alternate; animation-delay: 0.3s; }
        .animate-bar-4 { animation: bounceBar 0.8s ease-in-out infinite alternate; animation-delay: 0.45s; }
      ` }} />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          {/* Album Art Cover or Placeholder */}
          <div className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border border-blue-100 shadow-sm bg-blue-50 flex items-center justify-center">
            {isPlaying && albumImageUrl ? (
              <img
                src={albumImageUrl}
                alt="Album Art"
                className="w-full h-full object-cover rounded-full animate-[spin_8s_linear_infinite]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-500 rounded-full">
                <FaSpotify className="w-7 h-7 animate-pulse" />
              </div>
            )}
            {/* Mini floating Spotify badge when playing */}
            {isPlaying && (
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 border border-blue-100 shadow-sm flex items-center justify-center">
                <FaSpotify className="w-3.5 h-3.5 text-blue-600" />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="min-w-0 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-wider text-blue-500 uppercase flex items-center gap-1.5">
              {isPlaying && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />}
              {isPlaying ? 'Listening to Spotify' : 'Not Listening'}
            </span>
            {isPlaying ? (
              <a
                href={songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-900 text-sm hover:text-blue-600 transition-colors duration-200 truncate mt-0.5 block"
                title={`${title} - ${artist}`}
              >
                {title}
              </a>
            ) : (
              <span className="font-semibold text-zinc-400 text-xs mt-1">
                Currently Offline
              </span>
            )}
            <p className="text-xs text-blue-600/80 font-medium truncate mt-0.5">
              {isPlaying ? artist : 'Spotify'}
            </p>
          </div>
        </div>

        {/* Visualizer / Inactive Icon */}
        <div className="flex-shrink-0 flex items-center pr-1">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-4 w-5">
              <div className="w-[3px] bg-blue-500 rounded-full animate-bar-1" />
              <div className="w-[3px] bg-blue-500 rounded-full animate-bar-2" />
              <div className="w-[3px] bg-blue-500 rounded-full animate-bar-3" />
              <div className="w-[3px] bg-blue-500 rounded-full animate-bar-4" />
            </div>
          ) : (
            <div className="w-5 h-5 flex items-center justify-center text-zinc-300">
              <FaSpotify className="w-5 h-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
