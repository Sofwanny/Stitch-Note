import React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ClientList from '../components/ClientList';

export default function ClientsPage() {
  const [searchItem, setSearchItem] = useState('');
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

    </div>
  );
}
