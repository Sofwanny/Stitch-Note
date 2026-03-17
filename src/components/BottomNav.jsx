import { Home, ClipboardList, Shirt, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <Home className="w-6 h-6" /> },
    { label: 'Details', path: '/details', icon: <ClipboardList className="w-6 h-6" /> },
    { label: 'Browse', path: '/browse', icon: <Shirt className="w-6 h-6" /> },
    { label: 'Profile', path: '/profile', icon: <User className="w-6 h-6" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#FFF8DC]/90 backdrop-blur-md border-t border-amber-900/10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/' && location.pathname.startsWith('/client/'));
          
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-[#8B4513]' : 'text-[#8B4513]/40 hover:text-[#8B4513]/70'
              }`}
            >
              <div className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-200`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-bold tracking-wide ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
