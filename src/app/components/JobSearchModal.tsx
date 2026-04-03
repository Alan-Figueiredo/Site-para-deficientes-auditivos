import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Search, MapPin, Briefcase, Filter, X } from 'lucide-react';
import { Badge } from './ui/badge';

interface JobSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  keywords: string;
  location: string;
  type: string;
  tags: string[];
}

export function JobSearchModal({ open, onOpenChange, onSearch }: JobSearchModalProps) {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const jobTypes = ['CLT', 'PJ', 'Estágio', 'Temporário'];
  const popularTags = [
    'Remoto',
    'Presencial',
    'Híbrido',
    'Intérprete disponível',
    'Empresa inclusiva',
    'Sem experiência',
    'Flexível',
    'Home office'
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSearch = () => {
    onSearch({
      keywords,
      location,
      type: selectedType,
      tags: selectedTags
    });
    onOpenChange(false);
  };

  const handleClear = () => {
    setKeywords('');
    setLocation('');
    setSelectedType('');
    setSelectedTags([]);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if(!isOpen) {
      handleClear()
    }
    onOpenChange(isOpen)
  };

  const hasFilters = keywords || location || selectedType || selectedTags.length > 0;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
              <Search className="w-6 h-6" />
            </div>
            Buscar Vagas de Emprego
          </DialogTitle>
          <DialogDescription>
            Use palavras-chave e filtros para encontrar a vaga ideal para você
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Palavras-chave */}
          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-base font-semibold flex items-center gap-2">
              <Search className="w-4 h-4" />
              Palavras-chave
            </Label>
            <Input
              id="keywords"
              placeholder="Ex: desenvolvedor, administrativo, designer..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="text-base"
            />
            <p className="text-sm text-gray-500">
              Digite o cargo, função ou área que você procura
            </p>
          </div>

          {/* Localização */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-base font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Localização
            </Label>
            <Input
              id="location"
              placeholder="Ex: São Paulo, Rio de Janeiro, Remoto..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-base"
            />
            <p className="text-sm text-gray-500">
              Cidade, estado ou digite "Remoto" para trabalho à distância
            </p>
          </div>

          {/* Tipo de contratação */}
          <div className="space-y-2">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Tipo de Contratação
            </Label>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map((type) => (
                <Button
                  key={type}
                  type="button"
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(selectedType === type ? '' : type)}
                  className={selectedType === type ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Tags/Filtros */}
          <div className="space-y-2">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Características da Vaga
            </Label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                  {selectedTags.includes(tag) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Clique para selecionar múltiplas características
            </p>
          </div>

          {/* Resumo dos filtros selecionados */}
          {hasFilters && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtros Ativos
              </h4>
              <div className="space-y-1 text-sm">
                {keywords && (
                  <p className="text-emerald-800">
                    <strong>Busca:</strong> {keywords}
                  </p>
                )}
                {location && (
                  <p className="text-emerald-800">
                    <strong>Local:</strong> {location}
                  </p>
                )}
                {selectedType && (
                  <p className="text-emerald-800">
                    <strong>Tipo:</strong> {selectedType}
                  </p>
                )}
                {selectedTags.length > 0 && (
                  <p className="text-emerald-800">
                    <strong>Tags:</strong> {selectedTags.join(', ')}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleClear}
            disabled={!hasFilters}
            className="flex-1"
          >
            <X className="w-4 h-4 mr-2" />
            Limpar Filtros
          </Button>
          <Button
            onClick={handleSearch}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
          >
            <Search className="w-4 h-4 mr-2" />
            Buscar Vagas
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
