import { Video, BookOpen, Users, MessageCircle, Play, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Video,
    title: 'Vídeos em Libras',
    description: 'Todo conteúdo disponível com tradução em Língua Brasileira de Sinais',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Recursos Educativos',
    description: 'Material didático visual e interativo para facilitar o aprendizado',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Conecte-se com outras pessoas e compartilhe experiências',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MessageCircle,
    title: 'Chat Visual',
    description: 'Comunicação em tempo real com suporte visual completo',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Play,
    title: 'Tutoriais Práticos',
    description: 'Aprenda passo a passo com vídeos demonstrativos claros',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: GraduationCap,
    title: 'Cursos Especializados',
    description: 'Conteúdo estruturado para diferentes níveis de conhecimento',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export function Features() {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Acessíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ferramentas pensadas para proporcionar a melhor experiência visual e comunicativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
