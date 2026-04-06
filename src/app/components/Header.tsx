import { Briefcase, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Briefcase className="w-6 h-6 text-white cursor-pointer "
              onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'instant' })} />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900 cursor-pointer"
              onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'instant' })}>
                Conecta Inclusão</h1>
              <p className="text-xs text-gray-600">Oportunidades para Surdos</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Início
            </a>
            <a href="#curriculo" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Currículo
            </a>
            <a href="#dicas" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Dicas
            </a>
            <a href="#direitos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Direitos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Contato
            </a>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Início
              </a>
              <a href="#curriculo" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Currículo
              </a>
              <a href="#dicas" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Dicas
              </a>
              <a href="#direitos" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Direitos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}