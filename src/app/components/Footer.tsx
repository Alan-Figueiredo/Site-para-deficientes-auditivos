import { Briefcase, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="font-semibold text-lg">Trabalho Acessível</span>
                <p className="text-xs text-gray-400">Para Surdos</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Conectando talentos surdos com empresas inclusivas desde 2026.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#vagas" className="hover:text-white transition-colors">Vagas</a></li>
              <li><a href="#curriculo" className="hover:text-white transition-colors">Como Fazer Currículo</a></li>
              <li><a href="#dicas" className="hover:text-white transition-colors">Dicas de Entrevista</a></li>
              <li><a href="#direitos" className="hover:text-white transition-colors">Direitos Trabalhistas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Para Empresas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Cadastrar Empresa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Anunciar Vagas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lei de Cotas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoria Inclusão</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>contato@trabalho-acessivel.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>(11) 99999-8888 (WhatsApp com texto)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Feira de Santana - BA, Brasil</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 Trabalho Acessível. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
