import React from 'react';

export default function InputField({ label, name, type = "text", placeholder, value, onChange, required, options }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-semibold text-[#8B4513] mb-1.5 ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-3.5 rounded-xl bg-white text-amber-900 border border-amber-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-sm transition-all bg-opacity-70 backdrop-blur-sm"
        >
          <option value="" disabled>{placeholder || "Select an option"}</option>
          {options && options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={3}
          className="w-full p-3.5 rounded-xl bg-white text-amber-900 border border-amber-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-sm transition-all placeholder-amber-900/40 bg-opacity-70 backdrop-blur-sm resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full p-3.5 rounded-xl bg-white text-amber-900 border border-amber-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 shadow-sm transition-all placeholder-amber-900/40 bg-opacity-70 backdrop-blur-sm"
        />
      )}
    </div>
  );
}
