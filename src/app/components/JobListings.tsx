import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Building2, MapPin, Clock, DollarSign, Accessibility, Filter, X } from 'lucide-react';
import { LibrasButton } from './LibrasButton';
import type { SearchFilters } from './JobSearchModal';

interface JobListingsProps {
  searchFilters?: SearchFilters | null;
  onClearFilters?: () => void;
}

const jobs = [
  {
    id: 1,
    title: 'Assistente Administrativo',
    company: 'Tech Solutions S.A.',
    location: 'São Paulo - SP',
    type: 'CLT',
    salary: 'R$ 2.500 - R$ 3.500',
    posted: '2 dias atrás',
    accessible: true,
    tags: ['Presencial', 'Intérprete disponível', 'Empresa inclusiva'],
  },
  {
    id: 2,
    title: 'Auxiliar de Produção',
    company: 'Indústria Moderna Ltda',
    location: 'Campinas - SP',
    type: 'CLT',
    salary: 'R$ 2.000 - R$ 2.800',
    posted: '3 dias atrás',
    accessible: true,
    tags: ['1º turno', 'Vale transporte', 'Treinamento em Libras'],
  },
  {
    id: 3,
    title: 'Desenvolvedor Front-End',
    company: 'StartUp Digital',
    location: 'Remoto',
    type: 'PJ',
    salary: 'R$ 5.000 - R$ 8.000',
    posted: '5 dias atrás',
    accessible: true,
    tags: ['Home office', 'Flexível', 'Comunicação visual'],
  },
  {
    id: 4,
    title: 'Operador de Logística',
    company: 'Distribuidora Nacional',
    location: 'Rio de Janeiro - RJ',
    type: 'CLT',
    salary: 'R$ 2.200 - R$ 3.000',
    posted: '1 semana atrás',
    accessible: true,
    tags: ['Benefícios', 'Acessibilidade', 'Crescimento'],
  },
  {
    id: 5,
    title: 'Designer Gráfico',
    company: 'Agência Criativa',
    location: 'Belo Horizonte - MG',
    type: 'CLT',
    salary: 'R$ 3.500 - R$ 5.000',
    posted: '1 semana atrás',
    accessible: true,
    tags: ['Híbrido', 'Plano de saúde', 'Ambiente inclusivo'],
  },
  {
    id: 6,
    title: 'Auxiliar de Estoque',
    company: 'Supermercado Líder',
    location: 'Porto Alegre - RS',
    type: 'CLT',
    salary: 'R$ 1.800 - R$ 2.400',
    posted: '2 semanas atrás',
    accessible: true,
    tags: ['Sem experiência', 'Vale alimentação', 'Suporte Libras'],
  },
];

export function JobListings({ searchFilters, onClearFilters }: JobListingsProps) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [activeFilter, setActiveFilter] = useState<string>('Todas');

  // Apply search filters
  useEffect(() => {
    if (!searchFilters) {
      setFilteredJobs(jobs);
      setActiveFilter("Todas");
      return;
    }

    let filtered = jobs;

    // Filter by keywords
    if (searchFilters.keywords) {
      const keywords = searchFilters.keywords.toLowerCase();
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(keywords) ||
        job.company.toLowerCase().includes(keywords) ||
        job.location.toLowerCase().includes(keywords) ||
        job.tags.some(tag => tag.toLowerCase().includes(keywords))
      );
    }

    // Filter by location
    if (searchFilters.location) {
      const location = searchFilters.location.toLowerCase();
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(location)
      );
    }

    // Filter by type
    if (searchFilters.type) {
      filtered = filtered.filter(job => job.type === searchFilters.type);
    }

    // Filter by tags
    if (searchFilters.tags.length > 0) {
      filtered = filtered.filter(job =>
        searchFilters.tags.some(searchTag =>
          job.tags.some(jobTag => jobTag.toLowerCase().includes(searchTag.toLowerCase()))
        )
      );
    }

    setFilteredJobs(filtered);
  }, [searchFilters]);

  // Abas filtro pagina de vagas
  const handleQuickFilter = (filter: string) => {
    setActiveFilter(filter);

    if (filter === 'Todas') {
      setFilteredJobs(jobs);
      return;
    }

    let filtered = jobs;

    if (filter === 'CLT' || filter === 'PJ') {
      filtered = jobs.filter(job => job.type === filter);
    } else if (filter === 'Remoto' || filter === 'Presencial') {
      filtered = jobs.filter(job =>
        job.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
       || job.location.toLowerCase() === filter.toLowerCase());
    }

    setFilteredJobs(filtered);
  };

  const hasSearchFilters = searchFilters && (
    searchFilters.keywords ||
    searchFilters.location ||
    searchFilters.type ||
    searchFilters.tags.length > 0
  );
  return (
    <section id="vagas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vagas Disponíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Empresas comprometidas com a inclusão de pessoas surdas
          </p>
          <LibrasButton section="jobs" variant="outline" size="lg" />
        </div>

        {/* Search filters banner */}
        {hasSearchFilters && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Resultados da Busca ({filteredJobs.length} {filteredJobs.length === 1 ? 'vaga encontrada' : 'vagas encontradas'})
                </h3>
                <div className="space-y-1 text-sm text-emerald-800">
                  {searchFilters?.keywords && (
                    <p><strong>Palavras-chave:</strong> {searchFilters.keywords}</p>
                  )}
                  {searchFilters?.location && (
                    <p><strong>Localização:</strong> {searchFilters.location}</p>
                  )}
                  {searchFilters?.type && (
                    <p><strong>Tipo:</strong> {searchFilters.type}</p>
                  )}
                  {searchFilters?.tags && searchFilters.tags.length > 0 && (
                    <p><strong>Tags:</strong> {searchFilters.tags.join(', ')}</p>
                  )}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onClearFilters}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-100"
              >
                <X className="w-4 h-4 mr-2" />
                Limpar Filtros
              </Button>
            </div>
          </div>
        )}

        {/* Filter section */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <Button
            variant={activeFilter === 'Todas' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('Todas')}
            className={activeFilter === 'Todas' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            Todas
          </Button>
          <Button
            variant={activeFilter === 'CLT' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('CLT')}
            className={activeFilter === 'CLT' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            CLT
          </Button>
          <Button
            variant={activeFilter === 'PJ' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('PJ')}
            className={activeFilter === 'PJ' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            PJ
          </Button>
          <Button
            variant={activeFilter === 'Remoto' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('Remoto')}
            className={activeFilter === 'Remoto' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            Remoto
          </Button>
          <Button
            variant={activeFilter === 'Presencial' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleQuickFilter('Presencial')}
            className={activeFilter === 'Presencial' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            Presencial
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  {job.accessible && (
                    <Badge className="bg-blue-100 text-blue-700">
                      <Accessibility className="w-3 h-3 mr-1" />
                      Acessível
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>

                <p className="text-gray-600 mb-4 font-medium">{job.company}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Ver Detalhes
                </Button>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma vaga encontrada
              </h3>
              <p className="text-gray-600 mb-4">
                Não encontramos vagas que correspondam aos seus critérios de busca.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  onClearFilters?.();
                  handleQuickFilter('Todas');
                }}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <X className="w-4 h-4 mr-2" />
                Ver Todas as Vagas
              </Button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" disabled={filteredJobs.length === 0}>
            Carregar Mais Vagas
          </Button>
        </div>
      </div>
    </section>
  );
}