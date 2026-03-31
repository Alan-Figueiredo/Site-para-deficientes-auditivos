import { Card } from './ui/card';
import { Button } from './ui/button';
import { FileText, CheckCircle2, Download, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LibrasButton } from './LibrasButton';

const steps = [
  {
    number: '01',
    title: 'Dados Pessoais',
    description: 'Nome completo, telefone (WhatsApp), e-mail e cidade onde mora. Importante: mencione que é surdo e prefere comunicação visual.',
    tips: ['Use e-mail profissional', 'Adicione foto profissional', 'Inclua perfil do LinkedIn'],
  },
  {
    number: '02',
    title: 'Objetivo Profissional',
    description: 'Escreva em 2-3 linhas qual área você busca trabalhar. Seja direto e específico sobre suas metas.',
    tips: ['Seja objetivo', 'Mencione sua área de interesse', 'Destaque habilidades principais'],
  },
  {
    number: '03',
    title: 'Experiência Profissional',
    description: 'Liste seus empregos anteriores, começando pelo mais recente. Inclua nome da empresa, cargo, período e principais atividades.',
    tips: ['Use verbos de ação', 'Inclua conquistas', 'Ordem cronológica reversa'],
  },
  {
    number: '04',
    title: 'Formação Educacional',
    description: 'Coloque seus cursos, desde o ensino médio. Inclua nome da instituição, curso e ano de conclusão.',
    tips: ['Inclua cursos técnicos', 'Mencione certificações', 'Adicione cursos relevantes'],
  },
  {
    number: '05',
    title: 'Habilidades e Competências',
    description: 'Liste suas habilidades técnicas e pessoais. Inclua conhecimentos em informática, idiomas (incluindo Libras) e outras competências.',
    tips: ['Destaque Libras', 'Inclua habilidades técnicas', 'Mencione soft skills'],
  },
];

const dosDonts = {
  dos: [
    'Use fonte simples e legível (Arial, Calibri)',
    'Mantenha o currículo em 1-2 páginas',
    'Destaque conquistas com números',
    'Revise erros de português',
    'Mencione que é surdo logo no início',
    'Adicione formas de contato visual (WhatsApp, e-mail)',
  ],
  donts: [
    'Não use cores muito chamativas',
    'Não minta sobre experiências',
    'Não use gírias ou linguagem informal',
    'Não coloque foto em pose casual',
    'Não esqueça de mencionar Libras',
    'Não envie currículo com erros',
  ],
};

export function ResumeGuide() {
  return (
    <section id="curriculo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 mr-2" />
            <span className="font-medium">Guia Completo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Fazer seu Currículo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Passo a passo para criar um currículo profissional e acessível
          </p>
          <LibrasButton section="resume" variant="outline" size="lg" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="text-4xl font-bold text-emerald-200 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              <div className="space-y-2">
                {step.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-emerald-50 border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="bg-emerald-600 rounded-full p-2">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              Faça
            </h3>
            <ul className="space-y-3">
              {dosDonts.dos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-red-50 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="bg-red-600 rounded-full p-2">
                <span className="text-white text-xl font-bold">✕</span>
              </div>
              Não Faça
            </h3>
            <ul className="space-y-3">
              {dosDonts.donts.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-0.5 flex-shrink-0">✕</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Templates */}
        <Card className="p-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Modelos de Currículo Gratuitos
              </h3>
              <p className="text-emerald-50 mb-6 text-lg">
                Baixe modelos prontos e editáveis de currículo, desenvolvidos especialmente 
                para pessoas surdas, com destaque para comunicação visual e acessibilidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Modelos
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Video className="w-5 h-5 mr-2" />
                  Ver Tutorial em Libras
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0NDc1NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ambiente de trabalho moderno"
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}