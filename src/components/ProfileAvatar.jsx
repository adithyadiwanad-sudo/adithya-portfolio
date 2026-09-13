import { useState } from 'react';
import { profile } from '../data';

export default function ProfileAvatar() {
  const [failedSource, setFailedSource] = useState(null);
  const failed = failedSource === profile.imageUrl;
  return (
    <div className="group w-44 shrink-0 rounded-full bg-gradient-to-br from-indigo-300 via-indigo-500/40 to-slate-700 p-1 shadow-2xl shadow-indigo-500/10 sm:w-56 lg:w-72">
      <div className="aspect-square overflow-hidden rounded-full border-4 border-[#0b1020] bg-slate-900">
        {failed ? (
          <a href={profile.imageSourceUrl} target="_blank" rel="noopener noreferrer"
            aria-label="View Adithya Diwanad's profile photo on Google Drive"
            className="flex h-full flex-col items-center justify-center gap-2 text-indigo-200">
            <span className="text-5xl font-semibold" aria-hidden="true">AD</span>
            <span className="text-sm">View photo ↗</span>
          </a>
        ) : (
          <img src={profile.imageUrl} alt="Adithya Diwanad" width="800" height="800"
            referrerPolicy="no-referrer" fetchPriority="high"
            onError={() => setFailedSource(profile.imageUrl)}
            className="h-full w-full object-cover object-center transition-transform duration-500 motion-safe:group-hover:scale-105" />
        )}
      </div>
    </div>
  );
}
