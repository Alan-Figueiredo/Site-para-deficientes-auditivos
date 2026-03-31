import { Card } from './ui/card';
import { Video, BookOpen, Languages, CheckCircle2, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const videos = [
  {
    title: 'Introdução ao Site',
    duration: '3:20',
    thumbnail: 'https://images.unsplash.com/photo-1583135494815-6fb8be21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNpZ24lMjBsYW5ndWFnZSUyMGhhbmRzfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Como usar a plataforma Trabalho Acessível',
  },
  {
    title: 'Buscar Vagas',
    duration: '5:15',
    thumbnail: 'https://images.unsplash.com/photo-1759592702685-819b02c86332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBpbnRlcnByZXRlciUyMHZpZGVvfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Como encontrar e se candidatar a vagas',
  },
  {
    title: 'Criar Currículo',
    duration: '8:40',
    thumbnail: 'https://images.unsplash.com/photo-1583135494815-6fb8be21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNpZ24lMjBsYW5ndWFnZSUyMGhhbmRzfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Passo a passo para montar seu currículo',
  },
  {
    title: 'Dicas de Entrevista',
    duration: '6:30',
    thumbnail: 'https://images.unsplash.com/photo-1759592702685-819b02c86332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBpbnRlcnByZXRlciUyMHZpZGVvfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Como se preparar para entrevistas',
  },
  {
    title: 'Seus Direitos',
    duration: '7:10',
    thumbnail: 'https://images.unsplash.com/photo-1583135494815-6fb8be21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNpZ24lMjBsYW5ndWFnZSUyMGhhbmRzfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Direitos trabalhistas explicados em Libras',
  },
  {
    title: 'Lei de Cotas',
    duration: '4:50',
    thumbnail: 'https://images.unsplash.com/photo-1759592702685-819b02c86332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBpbnRlcnByZXRlciUyMHZpZGVvfGVufDF8fHx8MTc3NDQ3NjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Entenda como funciona a lei de cotas',
  },
];

export function LibrasVideoLibrary() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-4">
            <Languages className="w-4 h-4 mr-2" />
            <span className="font-medium">Biblioteca em Libras</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📚 Todos os Conteúdos em Libras
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Assista aos vídeos com tradução completa em Língua Brasileira de Sinais
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">100% em Libras</h3>
            </div>
            <p className="text-blue-100">
              Todo conteúdo traduzido por intérpretes certificados
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Com Legendas</h3>
            </div>
            <p className="text-blue-100">
              Todos os vídeos incluem legendas em português
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Download Grátis</h3>
            </div>
            <p className="text-blue-100">
              Baixe os vídeos para assistir offline
            </p>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="bg-white overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative group cursor-pointer">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {video.description}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Video className="w-4 h-4 mr-2" />
                  Assistir em Libras
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Download Section */}
        <Card className="mt-12 p-8 bg-white/10 backdrop-blur border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                📥 Baixe Todos os Vídeos
              </h3>
              <p className="text-blue-100 mb-6">
                Faça o download completo da biblioteca de vídeos em Libras para 
                assistir quando quiser, mesmo sem internet.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Mais de 30 vídeos em alta qualidade</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Formato compatível com celular e computador</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Atualizado mensalmente com novos conteúdos</span>
                </li>
              </ul>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Download className="w-5 h-5 mr-2" />
                Download Gratuito (ZIP - 2.5GB)
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-blue-100 text-sm">Vídeos em Libras</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">5h</div>
                <div className="text-blue-100 text-sm">de Conteúdo</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100 text-sm">Gratuito</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">HD</div>
                <div className="text-blue-100 text-sm">Alta Qualidade</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
