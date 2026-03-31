import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Mail, Phone, MapPin, Video } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aqui para ajudar. Escolha a melhor forma de se comunicar conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome completo" 
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="seu@email.com" 
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Escreva sua mensagem aqui..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Atendimento em Libras</h4>
                  <p className="text-gray-600">
                    Disponível por videochamada de segunda a sexta, das 9h às 18h
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">E-mail</h4>
                  <p className="text-gray-600">
                    contato@acessivelparatodos.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-gray-600">
                    (11) 98765-4321
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Rua da Inclusão, 123<br />
                    São Paulo - SP, 01234-567
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
