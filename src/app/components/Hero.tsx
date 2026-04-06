import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Search, FileText, TrendingUp } from 'lucide-react';
import {JobSearchModal} from './JobSearchModal'
import type { SearchFilters } from './JobSearchModal';

interface HeroProps {
  onSearch?: (filters: SearchFilters) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    onSearch?.(filters);
    // Scroll to jobs section
    document.getElementById('vagas')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="inicio" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="font-medium">Inclusão no Mercado de Trabalho</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua Carreira Profissional Começa Aqui
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Plataforma especializada em conectar pessoas surdas com empresas inclusivas. 
              Encontre vagas, aprenda a montar seu currículo e conquiste sua vaga no mercado de trabalho.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setSearchModalOpen(true)}
              >
                <Search className="w-5 h-5 mr-2 " />
                Buscar Vagas
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={() => document.getElementById('curriculo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText className="w-5 h-5 mr-2" />
                Criar Currículo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Vagas Ativas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">200+</div>
                <div className="text-sm text-gray-600">Empresas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">1.5k+</div>
                <div className="text-sm text-gray-600">Contratados</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlfGVufDF8fHx8MTc3NDM5Mjk1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profissionais em reunião de negócios"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-teal-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      <JobSearchModal
        open={searchModalOpen}
        onOpenChange={setSearchModalOpen}
        onSearch={handleSearch}
      />
    </section>
  );
}