import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { ArrowLeft, Save } from 'lucide-react';

export default function AddMeasurementPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    gender: '',
    notes: '',
    // Male fields
    topLength: '',
    back: '',
    trouserLength: '',
    waist: '',
    lap: '',
    armLength: '',
    cap: '',
    // Female specific fields
    bust: '',
    underBust: '',
    hips: '',
    skirtLength: '',
    gownLength: '',
    shoulder: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Saved:", formData);
    // Add logic here later to save client data
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8DC] via-[#fdf6d4] to-[#f4e6b3] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#FFF8DC]/90 backdrop-blur-md w-full border-b-[3px] border-[#8B4513]/80 px-4 py-4 sm:py-5 shadow-sm flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-amber-900/10 text-[#8B4513] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl sm:text-2xl font-black text-[#8B4513] tracking-wide uppercase">
          New Measurement
        </h1>
        <div className="w-10"></div> {/* Placeholder for flex centering */}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <form onSubmit={handleSubmit} className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_-4px_rgba(139,69,19,0.1)] rounded-3xl p-6 sm:p-8">
          
          <div className="mb-8 border-b border-amber-900/10 pb-6">
            <h2 className="text-xl font-bold text-[#5c3a21] mb-6 flex items-center gap-2">
              <span className="bg-[#8B4513] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm">1</span>
              Basic Details
            </h2>
            
            <InputField 
              label="Full Name" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="e.g. John Doe, Sarah Jane"
              required 
            />
            
            <InputField 
              label="Phone Number (Optional)" 
              name="phone" 
              type="tel"
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="e.g. 08012345678"
            />
            
            <InputField 
              label="Client Gender" 
              name="gender" 
              type="select"
              value={formData.gender} 
              onChange={handleChange} 
              placeholder="Select gender"
              required
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' }
              ]}
            />
          </div>

          {formData.gender && (
            <div className="mb-8 border-b border-amber-900/10 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-[#5c3a21] mb-6 flex items-center gap-2">
                <span className="bg-[#8B4513] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm">2</span>
                Measurements (Inches)
              </h2>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {formData.gender === 'male' ? (
                  <>
                    <InputField label="Top Length" name="topLength" value={formData.topLength} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Back / Shoulder" name="back" value={formData.back} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Waist" name="waist" value={formData.waist} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Lap" name="lap" value={formData.lap} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Trouser Length" name="trouserLength" value={formData.trouserLength} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Arm Length" name="armLength" value={formData.armLength} onChange={handleChange} placeholder="0" type="number" />
                    <div className="col-span-2">
                      <InputField label="Cap (Optional)" name="cap" value={formData.cap} onChange={handleChange} placeholder="0" type="number" />
                    </div>
                  </>
                ) : (
                  <>
                    <InputField label="Bust" name="bust" value={formData.bust} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Under Bust" name="underBust" value={formData.underBust} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Waist" name="waist" value={formData.waist} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Hips" name="hips" value={formData.hips} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Shoulder / Back" name="shoulder" value={formData.shoulder} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Arm Length" name="armLength" value={formData.armLength} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Skirt Length" name="skirtLength" value={formData.skirtLength} onChange={handleChange} placeholder="0" type="number" />
                    <InputField label="Gown Length" name="gownLength" value={formData.gownLength} onChange={handleChange} placeholder="0" type="number" />
                  </>
                )}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#5c3a21] mb-6 flex items-center gap-2">
              <span className="bg-[#8B4513] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm">
                {formData.gender ? '3' : '2'}
              </span>
              Additional Notes
            </h2>
            <InputField 
              label="Design styles, payment status, dates, etc." 
              name="notes" 
              type="textarea"
              value={formData.notes} 
              onChange={handleChange} 
              placeholder="Enter any additional remarks here..."
            />
          </div>

          <button 
            type="submit"
            className="w-full mt-4 bg-[#8B4513] hover:bg-[#6e360e] text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex justify-center items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Measurement
          </button>

        </form>
      </div>
    </div>
  );
}
