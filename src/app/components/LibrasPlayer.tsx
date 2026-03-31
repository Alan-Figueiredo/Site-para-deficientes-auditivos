import { useState } from 'react';
import { Video, X, Maximize2, Minimize2, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LibrasPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LibrasPlayer({ isOpen, onClose }: LibrasPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isExpanded
          ? 'inset-0 bg-black/90 flex items-center justify-center'
          : 'bottom-4 right-4 w-80 md:w-96'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-2xl overflow-hidden ${
          isExpanded ? 'w-full max-w-4xl' : 'w-full'
        }`}
      >
        {/* Header */}
        <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            <span className="font-semibold">Tradução em Libras</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-emerald-700"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-emerald-700"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-emerald-700"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Video Player */}
        <div className={`relative bg-gray-900 ${isExpanded ? 'h-[70vh]' : 'h-64'}`}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759592702685-819b02c86332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBpbnRlcnByZXRlciUyMHZpZGVvfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Intérprete de Libras"
            className="w-full h-full object-cover"
          />
          
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button
              size="lg"
              className="bg-white/90 hover:bg-white text-emerald-600 rounded-full w-16 h-16 p-0"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Button>
          </div>

          {/* Subtitles */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-center text-sm md:text-base">
              "Bem-vindo ao Trabalho Acessível. Aqui você encontra vagas de emprego..."
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600">
            ℹ️ Este vídeo contém a tradução completa em Libras do conteúdo desta seção
          </p>
        </div>
      </div>
    </div>
  );
}
