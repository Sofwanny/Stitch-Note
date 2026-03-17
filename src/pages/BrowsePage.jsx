import React, { useState, useEffect } from 'react';
import { Heart, Search, Filter, Bookmark, ExternalLink, Loader2, RefreshCcw } from 'lucide-react';

const INITIAL_STYLES = {
  male: [
    { id: 'm1', title: 'White Senator Design', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800', description: 'Clean white senator set with chest embroidery.', tag: 'Senator' },
    { id: 'm2', title: 'Ankara Print Shirt', image: 'https://images.unsplash.com/photo-1617137984095-74e4e31359c1?auto=format&fit=crop&q=80&w=800', description: 'Patterned Ankara shirt for semi-formal events.', tag: 'Ankara' },
    { id: 'm3', title: 'Royal Agbada Ensemble', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', description: 'Grand Agbada with matching trousers and cap.', tag: 'Agbada' },
    { id: 'm4', title: 'Kampala/Adire Set', image: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=800', description: 'Indigo-dyed traditional kampala for a classic look.', tag: 'Kampala' },
    { id: 'm5', title: 'Modern Kaftan', image: 'https://images.unsplash.com/photo-1519085185758-24dd5463697b?auto=format&fit=crop&q=80&w=800', description: 'Sleek black kaftan with shoulder detailing.', tag: 'Kaftan' },
    { id: 'm6', title: 'Multi-color Dashiki', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800', description: 'Vibrant dashiki print for festival outings.', tag: 'Dashiki' },
  ],
  female: [
    { id: 'f1', title: 'Lace Asoebi Gown', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800', description: 'Stunning lace gown with headgear (Gele) matching.', tag: 'Asoebi' },
    { id: 'f2', title: 'Ankara Peplum Top', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800', description: 'Chic peplum top paired with matching skirt.', tag: 'Ankara' },
    { id: 'f3', title: 'Buba and Iro Set', image: 'https://images.unsplash.com/photo-1546433133-418c3a077d85?auto=format&fit=crop&q=80&w=800', description: 'Traditional buba and iro in premium silk.', tag: 'Traditional' },
    { id: 'f4', title: 'Adire Maxi Dress', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800', description: 'Comfortable and stylish Adire maxi dress.', tag: 'Adire' },
    { id: 'f5', title: 'Sequined Reception Gown', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800', description: 'Shimmering lace for evening wedding receptions.', tag: 'Wedding' },
    { id: 'f6', title: 'Midi Kampala Skirt', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800', description: 'Hand-dyed kampala skirt with high slit.', tag: 'Kampala' },
  ]
};

// Larger pool of images and titles focused on Nigerian fashion
const EXTRA_TRENDS = {
  male: [
    { title: 'Navy Senator Style', tag: 'Senator', image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6' },
    { title: 'Agbada Royalty', tag: 'Agbada', image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8' },
    { title: 'Short Sleeve Ankara', tag: 'Ankara', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2' },
    { title: 'Classic Adire Kaftan', tag: 'Adire', image: 'https://images.unsplash.com/photo-1548123304-972fc0028362' }
  ],
  female: [
    { title: 'Elegance in Asoebi', tag: 'Asoebi', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03' },
    { title: 'Ankara Ball Gown', tag: 'Ankara', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc' },
    { title: 'Beaded Lace Style', tag: 'Lace', image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b' },
    { title: 'Modern Tie-Dye Dress', tag: 'Adire', image: 'https://images.unsplash.com/photo-1533659828870-95ee305cee3e' }
  ]
};

export default function BrowsePage({ savedStyles, setSavedStyles }) {
  const [gender, setGender] = useState('female');
  const [searchQuery, setSearchQuery] = useState('');
  const [styles, setStyles] = useState(INITIAL_STYLES);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSave = (style) => {
    const isSaved = savedStyles.some(s => s.id === style.id);
    if (isSaved) {
      setSavedStyles(prev => prev.filter(s => s.id !== style.id));
    } else {
      setSavedStyles(prev => [...prev, style]);
    }
  };

  const loadMore = () => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const extraPool = EXTRA_TRENDS[gender];
      const randomTrend = extraPool[Math.floor(Math.random() * extraPool.length)];
      
      const newStyle = {
        id: `extra-${Date.now()}`,
        title: randomTrend.title,
        image: `${randomTrend.image}?auto=format&fit=crop&q=80&w=800`,
        description: `Stunning ${randomTrend.tag} design freshly trending this week.`,
        tag: randomTrend.tag
      };
      
      setStyles(prev => ({
        ...prev,
        [gender]: [...prev[gender], newStyle]
      }));
      setIsLoading(false);
    }, 1200);
  };

  const filteredStyles = styles[gender].filter(style => 
    style.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    style.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FEFBF3] pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[#FEFBF3]/90 backdrop-blur-md w-full border-b-[3px] border-[#8B4513] px-6 py-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <h1 className="text-xl sm:text-2xl font-black text-[#5c3a21] tracking-wider uppercase">Style Browser</h1>
          </div>
          <div className="relative">
             <Bookmark className="w-6 h-6 text-[#8B4513]" />
             {savedStyles.length > 0 && (
               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                 {savedStyles.length}
               </span>
             )}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        {/* Gender Toggle */}
        <div className="flex p-1.5 bg-amber-100/50 rounded-2xl mb-8">
          <button
            onClick={() => setGender('male')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
              gender === 'male' 
                ? 'bg-[#8B4513] text-white shadow-md transform scale-[1.02]' 
                : 'text-amber-900/60 hover:text-amber-900'
            }`}
          >
            Male Styles
          </button>
          <button
            onClick={() => setGender('female')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
              gender === 'female' 
                ? 'bg-[#8B4513] text-white shadow-md transform scale-[1.02]' 
                : 'text-amber-900/60 hover:text-amber-900'
            }`}
          >
            Female Styles
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-10 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-amber-900/40 group-focus-within:text-amber-700 transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white text-amber-900 border-2 border-amber-200/50 outline-none focus:border-amber-600 focus:bg-amber-50/30 shadow-[0_2px_10px_-4px_rgba(139,69,19,0.1)] transition-all placeholder-amber-900/40 font-medium"
            placeholder={`Search ${gender} trends...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredStyles.length > 0 ? (
            filteredStyles.map((style) => {
              const isSaved = savedStyles.some(s => s.id === style.id);
              return (
                <div key={style.id} className="group bg-white rounded-3xl overflow-hidden border border-white/60 shadow-[0_4px_20px_-4px_rgba(139,69,19,0.1)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(139,69,19,0.2)] hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={style.image} 
                      alt={style.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase text-amber-900 tracking-wider shadow-sm">
                      {style.tag}
                    </div>
                    <button 
                      onClick={() => toggleSave(style)}
                      className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all ${
                        isSaved 
                          ? 'bg-red-500 text-white shadow-lg scale-110' 
                          : 'bg-white/80 text-amber-900 shadow-sm hover:scale-110'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#5c3a21] mb-2">{style.title}</h3>
                    <p className="text-amber-900/70 text-sm leading-relaxed mb-4">
                      {style.description}
                    </p>
                    <button className="flex items-center gap-2 text-[#8B4513] font-bold text-sm hover:translate-x-1 transition-transform">
                      View full detail <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block p-6 rounded-full bg-amber-100/50 mb-4">
                <Filter className="w-10 h-10 text-amber-900/20" />
              </div>
              <p className="text-amber-900/60 font-bold">No styles found matching your search.</p>
            </div>
          )}
        </div>

        {/* Load More Section */}
        <div className="mt-12 mb-12 flex justify-center">
          <button 
            disabled={isLoading}
            onClick={loadMore}
            className="flex items-center gap-2 bg-white border-2 border-amber-900/10 text-amber-900 font-bold py-4 px-10 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-900/20 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Updating trends...
              </>
            ) : (
              <>
                <RefreshCcw className="w-5 h-5" />
                Explore more Styles
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
