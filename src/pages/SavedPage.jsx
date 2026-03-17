import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2, ArrowRight } from 'lucide-react';

export default function SavedPage({ savedStyles, setSavedStyles }) {
  const navigate = useNavigate();

  const removeStyle = (id) => {
    setSavedStyles(prev => prev.filter(style => style.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FEFBF3] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#FEFBF3]/90 backdrop-blur-md w-full border-b-[3px] border-[#8B4513] pt-6 pb-4 shadow-sm px-6">
        <div className="flex items-center gap-4 max-w-3xl mx-auto">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl sm:text-2xl font-black text-[#8B4513] tracking-wide uppercase">Saved Inspiration</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
        {savedStyles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {savedStyles.map((style) => (
              <div key={style.id} className="bg-white rounded-3xl overflow-hidden border border-white shadow-sm flex flex-col">
                <div className="relative h-48">
                  <img 
                    src={style.image} 
                    alt={style.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] font-black uppercase text-amber-900">
                    {style.tag}
                  </div>
                  <button 
                    onClick={() => removeStyle(style.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white shadow-lg hover:scale-110 transition-transform"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#5c3a21] mb-1">{style.title}</h3>
                    <p className="text-xs text-amber-900/60 line-clamp-2">{style.description}</p>
                  </div>
                  <button className="mt-4 flex items-center gap-2 text-[#8B4513] font-bold text-xs hover:gap-3 transition-all">
                    View full detail <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white/40 rounded-3xl border-2 border-dashed border-amber-900/10">
            <div className="p-6 bg-amber-100 rounded-full mb-6">
              <Heart className="w-12 h-12 text-amber-900/20" />
            </div>
            <h2 className="text-xl font-bold text-amber-900 mb-2">No saved styles yet</h2>
            <p className="text-amber-900/60 mb-8 max-w-xs text-center">Start browsing styles and tap the heart to save them into your collection!</p>
            <button 
              onClick={() => navigate('/browse')}
              className="bg-[#8B4513] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-[#6e360e] transition-colors"
            >
              Browse Trends
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
