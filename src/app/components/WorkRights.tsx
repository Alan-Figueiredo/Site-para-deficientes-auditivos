import { Card } from './ui/card';
import { Shield, Scale, Users, Briefcase, AlertCircle, BookOpen } from 'lucide-react';
import { LibrasButton } from './LibrasButton';

const rights = [
  {
    icon: Scale,
    title: 'Lei de Cotas',
    description: 'Empresas com 100+ funcionários devem reservar de 2% a 5% das vagas para pessoas com deficiência.',
    details: [
      '100 a 200 empregados: 2%',
      '201 a 500 empregados: 3%',
      '501 a 1000 empregados: 4%',
      'Acima de 1000 empregados: 5%',
    ],
  },
  {
    icon: Shield,
    title: 'Direitos Trabalhistas',
    description: 'Você tem os mesmos direitos que qualquer outro trabalhador, além de direitos específicos.',
    details: [
      'Carteira assinada (CLT)',
      'FGTS e 13º salário',
      'Férias e vale transporte',
      'Auxílio-doença se necessário',
    ],
  },
  {
    icon: Users,
    title: 'Intérprete de Libras',
    description: 'A empresa deve fornecer intérprete quando necessário para sua comunicação no trabalho.',
    details: [
      'Reuniões importantes',
      'Treinamentos',
      'Comunicações oficiais',
      'Integração com equipe',
    ],
  },
  {
    icon: Briefcase,
    title: 'Adaptações no Trabalho',
    description: 'O empregador deve fazer adaptações razoáveis para garantir sua acessibilidade.',
    details: [
      'Sinalizadores visuais',
      'Comunicação por escrito',
      'Tecnologias assistivas',
      'Ambiente adaptado',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Proteção Contra Discriminação',
    description: 'É crime discriminar pessoa surda no ambiente de trabalho ou em processo seletivo.',
    details: [
      'Igualdade de salário',
      'Mesmas oportunidades',
      'Proibido demitir por ser surdo',
      'Denuncie discriminação',
    ],
  },
  {
    icon: BookOpen,
    title: 'Benefícios Especiais',
    description: 'Pessoas surdas têm direito a alguns benefícios específicos previstos em lei.',
    details: [
      'Isenção de IPI na compra de veículos',
      'Isenção de ICMS em alguns estados',
      'Passe livre interestadual',
      'Prioridade em concursos públicos',
    ],
  },
];

export function WorkRights() {
  return (
    <section id="direitos" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4 mr-2" />
            <span className="font-medium">Seus Direitos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Direitos Trabalhistas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Conheça seus direitos como pessoa surda no mercado de trabalho
          </p>
          <LibrasButton section="rights" variant="outline" size="lg" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rights.map((right, index) => {
            const Icon = right.icon;
            return (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {right.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {right.description}
                </p>
                <ul className="space-y-2">
                  {right.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Important Info */}
        <Card className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 text-amber-600 p-3 rounded-lg flex-shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Sofreu Discriminação?
              </h3>
              <p className="text-gray-700 mb-4">
                Se você foi discriminado por ser surdo em processo seletivo ou no trabalho, 
                você pode e deve denunciar. Isso é crime!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Onde Denunciar:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Ministério Público do Trabalho (MPT)</li>
                    <li>• Delegacia de Polícia</li>
                    <li>• Defensoria Pública</li>
                    <li>• Disque 100 (Direitos Humanos)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">O que Documentar:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Prints de conversas</li>
                    <li>• E-mails recebidos</li>
                    <li>• Testemunhas</li>
                    <li>• Anúncios de vagas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}