import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientCard({ client }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/client/${client.id}`)} className="mb-4 p-4 sm:p-5 rounded-2xl border border-white/60 bg-white/40 shadow-[0_4px_20px_-4px_rgba(139,69,19,0.1)] backdrop-blur-md flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(139,69,19,0.2)] hover:bg-white/60 cursor-pointer group">
      
      <div className="flex items-center gap-4 w-full">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-inner flex-shrink-0">
          {client.fullName ? client.fullName.charAt(0).toUpperCase() : '?'}
        </div>

        {/* Client Details */}
        <div className="flex flex-col items-start gap-1 w-full">
          <h2 className="text-lg sm:text-xl font-bold text-[#4e311c] group-hover:text-[#8B4513] transition-colors leading-tight">
            {client.fullName}
          </h2>
          
          <div className="flex items-center text-[#8B4513] opacity-70 gap-1.5 font-medium text-sm sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.528-.509.916a11.5 11.5 0 0 0 5.485 5.485c.388.134.799-.099.916-.509l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
            </svg>
            <p>{client.phone || 'No phone'}</p>
          </div>
        </div>
      </div>

      {/* Action Element (Chevron) */}
      <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-amber-700/50 group-hover:text-amber-700 group-hover:bg-amber-100/50 transition-all flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </div>
      
    </div>
  );
}