import { useState } from 'react';
import { Video } from 'lucide-react';
import { Button } from './ui/button';


export function FloatingLibrasButton() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full left-0 mb-2 w-64 bg-emerald-600 text-white p-3 rounded-lg shadow-lg animate-bounce">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-1 right-1 text-white/80 hover:text-white"
              >
                ✕
              </button>
              <p className="text-sm font-medium mb-1">👋 Tradução em Libras disponível!</p>
              <p className="text-xs text-emerald-100">
                Clique aqui para assistir todo o conteúdo traduzido em Libras
              </p>
            </div>
          )}

          {/* Main Button */}
          <Button
            size="lg"
            onClick={() => setIsPlayerOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-16 h-16 p-0 shadow-2xl hover:scale-110 transition-transform"
          >
            <div className="relative">
              <Video className="w-7 h-7" />
              <div className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
