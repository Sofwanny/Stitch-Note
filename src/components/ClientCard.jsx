import React from 'react';


export default function ClientCard({ client }) {
    return (
        <div onClick={() => navigate(`/client/${client.id}`)} className="mb-4 p-5 rounded-xl border border-amber-200/60 bg-white/70 shadow-sm backdrop-blur-sm flex flex-col items-start transition-transform hover:scale-[1.01]">
            <h2 className="text-xl font-bold text-[#5c3a21]">
                {client.fullName}
            </h2>
            <p className="text-[#8B4513] font-medium opacity-80 mt-1">
                {client.phone}
            </p>
        </div>
    );
}