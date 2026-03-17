import React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ClientList from '../components/ClientList';


export default function ClientsPage() {
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();
  const clients = [
    { id: 1, fullName: "Musa Abdullahi", phone: "08031234567" },
    { id: 2, fullName: "Aisha Bello", phone: "07069876543" },
    { id: 3, fullName: "John Tailor", phone: "09014567890" }
  ];
  const filteredClients = clients.filter(
    (client) =>
      client.fullName.toLowerCase().includes(searchItem.toLowerCase()) ||
      client.phone.includes(searchItem)
  )
  return (
    <div className='flex flex-col min-h-screen bg-[#FFF8DC]'>

      {/* Sticky Header with brown dividing line */}
      <div className="sticky top-0 z-10 bg-[#FFF8DC] w-full border-b-[3px] border-[#8B4513] pt-6 pb-4">
        <h1 className="text-3xl font-extrabold text-[#8B4513] text-center tracking-wide uppercase">StitchNote</h1>
      </div>

      {/* Full width search bar section right under the line */}
      <div className="w-full bg-[#FFF8DC] px-6 pt-6 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <SearchBar
            value={searchItem}
            onChange={setSearchItem}
          />
        </div>
      </div>

      {/* Client List aligned below */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-6 pb-8">
        <ClientList clients={filteredClients} />
      </div>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => navigate('/add-measurement')}
        className="fixed bottom-24 right-6 sm:bottom-24 sm:right-10 w-16 h-16 bg-[#8B4513] hover:bg-[#6e360e] text-white rounded-full shadow-[0_8px_20px_-4px_rgba(139,69,19,0.5)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-40 focus:outline-none focus:ring-4 focus:ring-amber-500/30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>

    </div>
  );
}
