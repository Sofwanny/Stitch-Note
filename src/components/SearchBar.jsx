import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="w-full p-4 rounded-xl bg-white text-amber-900 border border-amber-200 outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 shadow-sm transition-all mb-6 placeholder-amber-900/40"
      placeholder="Search clients..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}