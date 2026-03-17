import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Phone, Ruler, StickyNote } from "lucide-react";

export default function ClientDetailsPage({ clients }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the matched client by ID (IDs are strings from Date.now() now, but could be numbers in old dummy data)
  const client = clients.find(c => String(c.id) === String(id));

  if (!client) {
    return (
      <div className="min-h-screen bg-[#FEFBF3] flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Client Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#8B4513] text-white px-6 py-3 rounded-xl shadow hover:bg-[#6e360e] transition-colors"
        >
          Return to Home
        </button>
      </div>
    );
  }

  // Helper to render measurement fields nicely if they exist
  const renderMeasurement = (label, value) => {
    if (!value) return null;
    return (
      <div className="flex justify-between items-center py-3 border-b border-amber-900/10 last:border-0">
        <span className="text-[#8B4513]/70 font-medium">{label}</span>
        <span className="text-[#5c3a21] font-bold text-lg">{value}"</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FEFBF3] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#FEFBF3]/90 backdrop-blur-md w-full border-b-[3px] border-[#8B4513]/80 px-4 py-4 sm:py-5 shadow-sm flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-amber-900/10 text-[#8B4513] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl sm:text-2xl font-black text-[#8B4513] tracking-wide uppercase">
          Profile Details
        </h1>
        <div className="w-10"></div> {/* Placeholder for centering */}
      </div>

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        
        {/* Top Profile Card */}
        <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-4px_rgba(139,69,19,0.1)] rounded-3xl p-6 sm:p-8 mb-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white font-bold text-3xl shadow-inner mb-4">
            {client.fullName.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5c3a21]">{client.fullName}</h2>
          {client.phone && (
            <div className="flex items-center gap-2 mt-2 text-[#8B4513] opacity-80 font-medium bg-amber-100/50 px-4 py-1.5 rounded-full">
              <Phone className="w-4 h-4" />
              <span>{client.phone}</span>
            </div>
          )}
          {client.gender && (
            <div className="mt-4 inline-block bg-[#8B4513]/10 text-[#8B4513] px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider">
              {client.gender}
            </div>
          )}
        </div>

        {/* Measurements Card */}
        <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-4px_rgba(139,69,19,0.1)] rounded-3xl p-6 sm:p-8 mb-6">
          <h3 className="text-xl font-bold text-[#5c3a21] mb-6 flex items-center gap-2 border-b border-amber-900/10 pb-4">
            <div className="bg-[#8B4513]/10 p-2 rounded-lg text-[#8B4513]">
              <Ruler className="w-5 h-5" />
            </div>
            Measurements
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <div className="flex flex-col">
              {renderMeasurement("Top Length", client.topLength)}
              {renderMeasurement("Shoulder / Back", client.back || client.shoulder)}
              {renderMeasurement("Arm Length", client.armLength)}
              {renderMeasurement("Bust", client.bust)}
              {renderMeasurement("Under Bust", client.underBust)}
            </div>
            <div className="flex flex-col mt-0 sm:mt-0">
              {renderMeasurement("Waist", client.waist)}
              {renderMeasurement("Hips", client.hips)}
              {renderMeasurement("Lap", client.lap)}
              {renderMeasurement("Trouser Length", client.trouserLength)}
              {renderMeasurement("Skirt Length", client.skirtLength)}
              {renderMeasurement("Gown Length", client.gownLength)}
              {renderMeasurement("Cap", client.cap)}
            </div>
          </div>
          
          {!client.topLength && !client.waist && !client.bust && !client.trouserLength && (
             <p className="text-center text-amber-900/40 italic py-4">No measurements recorded.</p>
          )}
        </div>

        {/* Notes Card */}
        {(client.notes) && (
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-4px_rgba(139,69,19,0.1)] rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#5c3a21] mb-4 flex items-center gap-2">
              <div className="bg-[#8B4513]/10 p-2 rounded-lg text-[#8B4513]">
                <StickyNote className="w-5 h-5" />
              </div>
              Additional Notes
            </h3>
            <div className="bg-amber-50/50 p-4 rounded-xl text-amber-900 leading-relaxed whitespace-pre-wrap">
              {client.notes}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}