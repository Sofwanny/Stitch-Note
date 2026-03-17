import React from 'react';
import { User, Mail, Settings, LogOut, ChevronRight, Shield, Bell } from 'lucide-react';

export default function ProfilePage() {
  const profileOptions = [
    { icon: <User className="w-5 h-5" />, label: 'Personal Information', color: 'bg-blue-100 text-blue-600' },
    { icon: <Bell className="w-5 h-5" />, label: 'Notifications', color: 'bg-purple-100 text-purple-600' },
    { icon: <Shield className="w-5 h-5" />, label: 'Security', color: 'bg-green-100 text-green-600' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', color: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-[#FEFBF3] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#FEFBF3]/90 backdrop-blur-md w-full border-b-[3px] border-[#8B4513] pt-6 pb-4 shadow-sm px-6">
        <div className="flex items-center gap-4 max-w-3xl mx-auto">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl sm:text-2xl font-black text-[#5c3a21] tracking-wide uppercase">Your Profile</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-white mb-8 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-4 border-4 border-white shadow-md">
            <User className="w-12 h-12 text-[#8B4513]" />
          </div>
          <h2 className="text-2xl font-black text-[#8B4513]">Fashion Designer</h2>
          <p className="text-amber-900/40 font-medium">designer@stitchnote.com</p>
          
          <button className="mt-6 px-6 py-2 bg-[#8B4513]/10 text-[#8B4513] rounded-full text-sm font-bold hover:bg-[#8B4513]/20 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Options List */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-white">
          {profileOptions.map((option, index) => (
            <button 
              key={index}
              className="w-full flex items-center justify-between p-5 hover:bg-amber-50/50 transition-colors border-b border-amber-900/5 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl ${option.color}`}>
                  {option.icon}
                </div>
                <span className="font-bold text-[#5c3a21]">{option.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-900/20" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full mt-8 flex items-center justify-center gap-2 p-5 bg-red-50 text-red-600 font-bold rounded-2xl hover:bg-red-100 transition-colors border border-red-100">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
        
        <p className="text-center mt-8 text-[10px] font-black text-amber-900/20 uppercase tracking-[0.2em]">
          StitchNote v1.0.0
        </p>
      </div>
    </div>
  );
}
