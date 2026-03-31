import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';

const benefits = [
  'Interface 100% visual e intuitiva',
  'Conteúdo em Libras disponível',
  'Navegação simplificada',
  'Alto contraste e legibilidade',
  'Suporte para tecnologias assistivas',
  'Comunidade inclusiva e acolhedora',
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Uma Plataforma Para Todos
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Acreditamos que a comunicação é um direito fundamental. Nossa plataforma 
              foi desenvolvida pensando em acessibilidade desde o início, garantindo 
              que pessoas surdas tenham acesso completo a informação e conhecimento.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwbGVhcm5pbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzQ0MjA5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pessoas aprendendo juntas"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768595701593-c84fd8143aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwaW5jbHVzaW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0NzUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tecnologia acessível"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
