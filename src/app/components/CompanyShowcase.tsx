import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Star, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const companies = [
  {
    name: 'Tech Solutions Brasil',
    industry: 'Tecnologia',
    employees: '500+',
    rating: 4.8,
    location: 'São Paulo - SP',
    deafEmployees: 45,
    hasInterpreter: true,
    benefits: ['Intérprete disponível', 'Treinamentos em Libras', 'Ambiente inclusivo'],
  },
  {
    name: 'Indústria Nacional Ltda',
    industry: 'Indústria',
    employees: '1000+',
    rating: 4.5,
    location: 'Campinas - SP',
    deafEmployees: 78,
    hasInterpreter: true,
    benefits: ['Cotas PCD', 'Suporte Libras', 'Equipamentos adaptados'],
  },
  {
    name: 'Varejo Inclusivo S.A.',
    industry: 'Varejo',
    employees: '2000+',
    rating: 4.7,
    location: 'Rio de Janeiro - RJ',
    deafEmployees: 120,
    hasInterpreter: true,
    benefits: ['Equipe Libras', 'Crescimento profissional', 'Ambiente acolhedor'],
  },
  {
    name: 'Logística Express',
    industry: 'Logística',
    employees: '800+',
    rating: 4.6,
    location: 'Belo Horizonte - MG',
    deafEmployees: 52,
    hasInterpreter: true,
    benefits: ['Comunicação visual', 'Benefícios completos', 'Desenvolvimento'],
  },
];

export function CompanyShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empresas Inclusivas em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça empresas comprometidas com a inclusão de pessoas surdas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {companies.map((company, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{company.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                  <span className="font-semibold text-yellow-700">{company.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{company.location}</span>
                <span className="text-gray-400">•</span>
                <span>{company.employees} funcionários</span>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-900 font-semibold text-sm">
                  ✨ {company.deafEmployees} funcionários surdos na empresa
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {company.benefits.map((benefit, benefitIndex) => (
                  <Badge key={benefitIndex} variant="secondary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Image Section */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Sua Empresa é Inclusiva?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Faça parte da nossa rede de empresas comprometidas com a inclusão. 
                Cadastre sua empresa e mostre suas vagas para talentos surdos.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Aumente a diversidade na sua equipe</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Cumpra a lei de cotas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Receba consultoria gratuita</span>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Cadastrar Empresa
              </button>
            </div>
            <div className="h-full min-h-[300px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759884247160-27b8465544b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtwbGFjZXxlbnwxfHx8fDE3NzQ0NzU3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipe colaborativa no ambiente de trabalho"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
