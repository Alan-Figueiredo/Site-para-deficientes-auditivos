import { Card } from './ui/card';
import { MessageSquare, Users, Lightbulb, CheckCircle2, Video, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LibrasButton } from './LibrasButton';

const tips = [
  {
    icon: Users,
    title: 'Solicite Intérprete',
    description: 'É seu direito ter um intérprete de Libras na entrevista. Avise a empresa com antecedência.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'Prepare suas Respostas',
    description: 'Treine respostas para perguntas comuns: "Fale sobre você", "Pontos fortes e fracos", "Por que quer trabalhar aqui?"',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Chegue com Antecedência',
    description: 'Chegue 15 minutos antes. Isso mostra pontualidade e profissionalismo.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: CheckCircle2,
    title: 'Vista-se Adequadamente',
    description: 'Use roupas adequadas ao cargo. Em caso de dúvida, opte por traje social.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: BookOpen,
    title: 'Pesquise sobre a Empresa',
    description: 'Conheça a empresa antes: o que faz, valores, produtos. Isso demonstra interesse.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Video,
    title: 'Entrevista Online',
    description: 'Teste câmera e internet antes. Tenha boa iluminação e fundo limpo para videochamadas.',
    color: 'bg-pink-100 text-pink-600',
  },
];

const commonQuestions = [
  {
    question: 'Fale sobre você',
    answer: 'Responda de forma objetiva: nome, formação, experiência e por que está buscando essa vaga.',
  },
  {
    question: 'Quais seus pontos fortes?',
    answer: 'Destaque 2-3 qualidades relacionadas ao cargo: organização, trabalho em equipe, responsabilidade.',
  },
  {
    question: 'Quais seus pontos fracos?',
    answer: 'Mencione algo que está trabalhando para melhorar e o que está fazendo para isso.',
  },
  {
    question: 'Por que devemos te contratar?',
    answer: 'Mostre como suas habilidades e experiência podem ajudar a empresa.',
  },
  {
    question: 'Como é trabalhar sendo surdo?',
    answer: 'Explique suas formas de comunicação e como sua surdez não afeta seu desempenho profissional.',
  },
];

export function InterviewTips() {
  return (
    <section id="dicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dicas para Entrevistas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Prepare-se para conquistar sua vaga com confiança
          </p>
          <LibrasButton section="interview" variant="outline" size="lg" />
        </div>

        {/* Main Tips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${tip.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600">
                  {tip.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Common Questions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes em Entrevistas
            </h3>
            <div className="space-y-4">
              {commonQuestions.map((item, index) => (
                <Card key={index} className="p-5">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    {item.question}
                  </h4>
                  <p className="text-gray-600 text-sm pl-8">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Direitos na Entrevista
            </h3>
            <Card className="p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Intérprete de Libras</h4>
                    <p className="text-gray-600 text-sm">
                      A empresa deve fornecer intérprete gratuitamente se você solicitar.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comunicação Escrita</h4>
                    <p className="text-gray-600 text-sm">
                      Você pode pedir para fazer a entrevista por escrito se preferir.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Não Discriminação</h4>
                    <p className="text-gray-600 text-sm">
                      É proibido recusar você apenas por ser surdo. Isso é crime!
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tempo Adequado</h4>
                    <p className="text-gray-600 text-sm">
                      Você tem direito ao tempo necessário para compreender e responder.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758520144437-f068ecaf0d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0MzYwMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Entrevista profissional"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}