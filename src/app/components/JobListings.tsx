import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Building2, MapPin, Clock, DollarSign, Accessibility } from 'lucide-react';
import { LibrasButton } from './LibrasButton';

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

export function JobListings() {
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

        {/* Filter section */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center ">
          <Button variant="outline" size="sm" className='cursor-pointer'>Todas</Button>
          <Button variant="outline" size="sm" className='cursor-pointer'>CLT</Button>
          <Button variant="outline" size="sm" className='cursor-pointer'>PJ</Button>
          <Button variant="outline" size="sm" className='cursor-pointer'>Remoto</Button>
          <Button variant="outline" size="sm" className='cursor-pointer'>Presencial</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Vagas
          </Button>
        </div>
      </div>
    </section>
  );
}