import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Building2, MapPin, Clock, DollarSign, Accessibility, Filter, X } from 'lucide-react';
import { LibrasButton } from './LibrasButton';
import type { SearchFilters } from './JobSearchModal';
import { JobDetailsModal } from './JobDetailsModal';

interface JobListingsProps {
  searchFilters?: SearchFilters | null;
  onClearFilters?: () => void;
}


interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  accessible: boolean;
  tags: string[];
  description?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  companyInfo?: string;
  applicationUrl?: string;
  contactEmail?: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Auxiliar de Loja',
    company: 'Empresa Confidencial',
    location: 'Feira de Santana - BA',
    type: 'CLT',
    salary: 'Não informado',
    posted: 'há 3 semanas',
    accessible: true,
    tags: ['Presencial', 'Tempo integral', 'Vaga PCD', 'Boulevard Shopping'],
    description:
      'Vaga afirmativa para Pessoa com Deficiência no Boulevard Shopping de Feira de Santana. O Auxiliar de Loja atua na operação do ponto de venda, prezando pela organização, atendimento ao cliente e reposição de mercadorias.',
    responsibilities: [
      'Atender e orientar clientes no piso de vendas',
      'Organizar e repor produtos nas prateleiras e expositores',
      'Realizar operação de caixa',
      'Manter a limpeza e organização da loja e vitrines',
      'Apoiar o time em atividades operacionais do dia a dia',
      'Controle básico de estoque e recebimento de mercadorias',
    ],
    requirements: [
      'Ensino médio completo',
      'Laudo médico (PCD) atualizado',
      'Idade mínima 18 anos',
      'Disponibilidade para trabalho presencial em shopping',
      'Boa comunicação e proatividade',
    ],
    benefits: [
      'Vale-transporte',
      'Vale-refeição ou alimentação',
      'Plano odontológico',
      'Ambiente acessível e inclusivo',
    ],
    companyInfo:
      'Empresa localizada no Boulevard Shopping de Feira de Santana - BA, com compromisso ativo com a inclusão de pessoas com deficiência em seu quadro de colaboradores.',
    applicationUrl: undefined,
  },
  {
    id: 2,
    title: 'Assistente Administrativo (Sales)',
    company: 'Atos',
    location: 'Brasil (Home Office)',
    type: 'CLT',
    salary: 'Não informado',
    posted: 'há 3 semanas',
    accessible: true,
    tags: ['Home Office', 'Tempo integral', 'Vaga PCD', 'Segunda a sexta 9h–18h'],
    description:
      'Vaga afirmativa para Pessoas com Deficiência na área de Sales da Atos. O profissional atuará 100% em home office, apoiando os processos operacionais e analíticos da área comercial, garantindo a atualização de dados no CRM Salesforce, acompanhamento de KPIs e suporte ao time de vendas e backoffice.',
    responsibilities: [
      'Apoiar a gestão, organização e atualização de dados no CRM Salesforce (clientes, oportunidades, datas de fechamento)',
      'Atualizar e acompanhar KPIs de vendas, como pipeline e forecast',
      'Dar suporte ao time comercial e áreas de backoffice em demandas operacionais',
      'Auxiliar nos fluxos internos do processo de vendas',
      'Realizar atividades analíticas de "booking": revisão de contratos e análise de valores de entrada de pedidos',
      'Contribuir com rotinas administrativas da área de Sales',
    ],
    requirements: [
      'Graduação completa ou cursando em Administração, Processos ou correlatas',
      'Laudo médico (PCD) atualizado',
      'Experiência com Excel e Power BI',
      'Vivência com CRM (preferencialmente Salesforce)',
      'Capacidade de lidar com alto volume de informações e atenção a detalhes',
      'Perfil organizado, analítico, colaborativo e proativo',
    ],
    benefits: [
      'Trabalho 100% home office',
      'Horário: segunda a sexta, 9h às 18h',
      'Plano de saúde e odontológico',
      'Ambiente inclusivo com programa estruturado para PCDs',
      'Empresa global com plano de carreira',
    ],
    companyInfo:
      'A Atos Group é líder global em transformação digital com ~67.000 funcionários e receita anual de ~€10 bilhões, atuando em 61 países. Número um europeu em cibersegurança, cloud e computação de alto desempenho. No Brasil, opera sob as marcas Atos e Eviden, com forte compromisso com diversidade e inclusão.',
    applicationUrl:
      'https://jobs.atos.net/job/Cidade-Mon%C3%A7%C3%B5es-Assistente-Administrativo-(Sales)-Vaga-Afirmativa-para-Pessoas-com-Defici%C3%AAncia/1376668733/',
  },
  {
    id: 3,
    title: 'Operador de Loja',
    company: 'Inklua',
    location: 'Salvador - ACM',
    type: 'CLT',
    salary: 'R$ 1.518,00',
    posted: 'há 2 dias',
    accessible: false,
    tags: ['Presencial', 'Escala 6x1'],
    description:
      'Vaga PCD para Operador de Loja na região do ACM em Salvador. O profissional prestará apoio às vendas, atuando no autoatendimento assistido, apresentação da loja e cobrança de produtos, além de oferecer produtos financeiros e serviços aos clientes.',
    responsibilities: [
      'Atender clientes em loja, oferecendo a shopbag e produtos financeiros',
      'Realizar o recebimento, organização e remarcação de preços de mercadorias',
      'Garantir a execução diária dos processos de manutenção de sessão, saldo e expositores',
      'Zelar pela organização e limpeza da loja e vitrines internas e externas',
      'Realizar operação de caixa',
    ],
    requirements: [
      'Ensino médio completo',
      'Idade mínima 18 anos',
      'Laudo médico (PCD) — vaga afirmativa',
      'Disponibilidade para escala 6x1',
      'Habilidade no atendimento ao público',
    ],
    benefits: [
      'Vale-refeição ou vale-alimentação',
      'Vale-transporte',
      'Plano odontológico',
      'Apoio psicológico e nutricional',
      'Telemedicina',
      'TotalPass (academias)',
      'PLR anual',
      'Universidade corporativa',
    ],
    companyInfo:
      'A Inklua é a maior plataforma de recrutamento inclusivo do Brasil, especializada em conectar pessoas com deficiência a empresas comprometidas com diversidade e inclusão.',
    applicationUrl: 'https://inklua.com/vaga/operador-de-loja/40063',
  },
  {
    id: 4,
    title: 'Auxiliar Logístico',
    company: 'Inklua',
    location: 'Salvador - BA',
    type: 'CLT',
    salary: 'R$ 1.630,00',
    posted: 'há 29 dias',
    accessible: false,
    tags: ['Presencial', 'Horário a combinar'],
    description:
      'Vaga PCD para Auxiliar Logístico em Salvador. O profissional atuará nas operações de recebimento, armazenagem, separação e expedição de mercadorias, garantindo o controle e organização do estoque.',
    responsibilities: [
      'Receber, conferir e armazenar mercadorias',
      'Separar pedidos conforme ordens de serviço',
      'Auxiliar no carregamento e descarregamento de veículos',
      'Organizar e manter o estoque em ordem',
      'Registrar movimentações no sistema de controle',
      'Controlar entrada e saída de produtos',
    ],
    requirements: [
      'Ensino fundamental completo (médio é diferencial)',
      'Laudo médico (PCD) atualizado',
      'Disponibilidade para horários variáveis',
      'Experiência em logística ou estoque (desejável)',
      'Conhecimento básico em informática',
    ],
    benefits: [
      'Vale-transporte',
      'Vale-alimentação',
      'Plano de saúde',
      'Horário a combinar',
    ],
    companyInfo:
      'A Inklua é a maior plataforma de recrutamento inclusivo do Brasil, especializada em conectar pessoas com deficiência a empresas comprometidas com diversidade e inclusão.',
    applicationUrl: 'https://inklua.com/vaga/auxiliar-logistico/39682',
  },
  {
    id: 5,
    title: 'Operador(a) Comercial de Cartões',
    company: 'Inklua',
    location: 'Salvador - Cabula',
    type: 'CLT',
    salary: 'R$ 1.715,00',
    posted: 'há 5 meses',
    accessible: false,
    tags: ['Presencial', 'Escala 6x1', '7h20 diárias'],
    description:
      'Vaga PCD para Operador(a) Comercial de Cartões no Cabula, Salvador. O profissional atuará na oferta e comercialização de cartões de crédito/débito e produtos financeiros em loja física, com foco em atendimento consultivo e metas comerciais.',
    responsibilities: [
      'Oferecer e comercializar cartões de crédito e débito',
      'Atender clientes e apresentar vantagens dos produtos financeiros',
      'Realizar cadastro e análise inicial de documentação dos clientes',
      'Cumprir metas comerciais estabelecidas pela liderança',
      'Manter postura consultiva e empática no atendimento',
      'Registrar atendimentos e atualizar sistemas internos',
    ],
    requirements: [
      'Ensino médio completo',
      'Laudo médico (PCD) atualizado',
      'Habilidade com vendas e atendimento ao público',
      'Disponibilidade para escala 6x1 (7h20 diárias)',
      'Boa comunicação e perfil comercial',
      'Experiência com produtos financeiros (desejável)',
    ],
    benefits: [
      'Vale-transporte',
      'Vale-refeição',
      'Comissão por metas atingidas',
      'Plano de saúde',
      'Treinamento na área financeira',
    ],
    companyInfo:
      'A Inklua é a maior plataforma de recrutamento inclusivo do Brasil, especializada em conectar pessoas com deficiência a empresas comprometidas com diversidade e inclusão.',
    applicationUrl: 'https://inklua.com/vaga/operadora-comercial-de-cartoes-835/38421',
  },
  {
    id: 6,
    title: 'Agente Comercial Online',
    company: 'Comunicare Aparelhos Auditivos',
    location: 'Brasil (Remoto)',
    type: 'CLT',
    salary: 'R$ 2.000 - R$ 4.000',
    posted: 'Não informado',
    accessible: true,
    tags: ['Home Office', 'Tempo integral', 'Vaga PCD', 'Salário fixo + comissão'],
    description:
      'Vaga exclusiva para Pessoas com Deficiência na Comunicare, maior rede de aparelhos auditivos do Brasil. O Agente Comercial Online atuará remotamente no atendimento e comercialização de aparelhos auditivos, agendamento de clientes e suporte ao gestor e fonoaudiólogos.',
    responsibilities: [
      'Realizar atendimento comercial por telefone, WhatsApp e e-mail',
      'Fomentar ações para atrair e cadastrar clientes e leads',
      'Agendar consultas e apresentar soluções auditivas',
      'Emissão de NF-e e lançamento de contas a pagar/receber',
      'Controle de inventário e material de escritório',
      'Apoio ao gestor e aos fonoaudiólogos da unidade',
      'Assegurar assistência técnica para dispositivos defeituosos',
    ],
    requirements: [
      'Ensino médio completo',
      'Laudo médico (PCD) atualizado',
      'Experiência prévia em atendimento ao cliente (desejável)',
      'Boa comunicação oral e escrita',
      'Computador e internet de qualidade para home office',
      'Perfil empático e orientado a resultados',
    ],
    benefits: [
      'Trabalho 100% remoto',
      'Salário fixo + comissão (R$ 2.000 - R$ 4.000)',
      'Vale-refeição (R$ 38/dia)',
      'Plano de saúde médico e odontológico',
      'Plano de carreira',
      'Empresa certificada GPTW — 150 melhores para trabalhar no Brasil',
    ],
    companyInfo:
      'A Comunicare Aparelhos Auditivos é a maior rede de aparelhos auditivos do Brasil, com mais de 100 lojas e 200 pontos de atendimento, parte do Grupo WS Audiology — líder mundial no setor. Todas as vagas são abertas para PCDs.',
    applicationUrl:
      'https://br.indeed.com/viewjob?jk=063fe18eed1a42cf&from=shareddesktop_copy',
    contactEmail: 'recursoshumanos.br@wsa.com',
  },
  {
    id: 7,
    title: 'Pedagogo - CER IV Visual',
    company: 'Obras Sociais Irmã Dulce',
    location: 'Salvador - BA',
    type: 'CLT',
    salary: 'Não informado',
    posted: 'Não informado',
    accessible: false,
    tags: ['Presencial', 'Tempo integral', 'Área social'],
    description:
      'O Pedagogo do CER IV Visual atuará no Centro Especializado em Reabilitação das Obras Sociais Irmã Dulce em Salvador, desenvolvendo atividades pedagógicas e de reabilitação visual em equipe multidisciplinar com fonoaudiólogos, fisioterapeutas, terapeutas ocupacionais e médicos.',
    responsibilities: [
      'Planejar e executar atividades pedagógicas voltadas a pessoas com deficiência visual',
      'Atuar no internamento e reabilitação visual dentro do CER IV',
      'Elaborar planos de ensino individualizados (PEI)',
      'Trabalhar em equipe multidisciplinar de saúde e reabilitação',
      'Registrar e acompanhar a evolução dos pacientes',
      'Orientar familiares quanto ao processo de reabilitação educacional',
      'Utilizar recursos de tecnologia assistiva e materiais em Braille',
    ],
    requirements: [
      'Graduação em Pedagogia (obrigatório)',
      'Registro no Conselho Regional de Pedagogia',
      'Currículo Lattes atualizado (critério eliminatório)',
      'Conhecimento em educação especial e inclusiva',
      'Experiência com deficiência visual (diferencial)',
      'Conhecimento em Braille (diferencial)',
    ],
    benefits: [
      'Vale-transporte',
      'Alimentação no refeitório da instituição',
      'Plano de saúde e odontológico',
      'Ambiente de trabalho humanizado e com missão social',
      'Capacitação e desenvolvimento profissional contínuo',
    ],
    companyInfo:
      'As Obras Sociais Irmã Dulce (OSID) são uma das maiores instituições filantrópicas do Brasil, com ~5,6 milhões de procedimentos ambulatoriais anuais pelo SUS, distribuídos em 21 núcleos nas áreas de Saúde, Assistência Social, Pesquisa Científica e Educação em Salvador.',
    applicationUrl: 'https://obrassociaisirmadulce.gupy.io/',
    contactEmail: 'recrutamento@irmadulce.org.br',
  },
  {
    id: 8,
    title: 'Vendedor(a) Externo (6 horas)',
    company: 'Stone',
    location: 'Bahia (Presencial)',
    type: 'CLT',
    salary: 'Não informado',
    posted: 'Recente',
    accessible: false,
    tags: ['Presencial', 'Vaga PCD', '13h às 19h', 'Segunda a sexta'],
    description:
      'Vaga afirmativa para Pessoas com Deficiência na Stone. O Vendedor Externo atuará em rotina de prospecção porta a porta em rotas pré-definidas, apresentando e negociando as soluções financeiras da Stone a novos clientes.',
    responsibilities: [
      'Realizar prospecção externa de novos clientes (porta a porta) em rotas pré-definidas',
      'Apresentar e negociar os serviços e soluções financeiras da Stone',
      'Participar das reuniões de alinhamento de metas, planejamento de rotas e troca de aprendizados',
      'Prestar atendimento consultivo e de alta qualidade, garantindo a satisfação do cliente',
    ],
    requirements: [
      'Ensino médio completo',
      'Laudo médico (PCD) atualizado',
      'Disponibilidade para trabalhar de segunda a sexta, das 13h às 19h',
      'Perfil comercial e orientado a resultados',
      'Experiência prévia em vendas externas (desejável)',
    ],
    benefits: [
      'Plano de Saúde e Odontológico',
      'Hospital Virtual Verde 24h/7 dias',
      'Vale Refeição e/ou Vale Alimentação (Pluxee)',
      'Gympass',
      'Auxílio Creche (filhos até 5 anos e 11 meses)',
      'Seguro de Vida',
      'Vale Transporte ou Auxílio Combustível',
      'Acolhe360 (programa de bem-estar)',
    ],
    companyInfo:
      'A Stone é uma empresa de tecnologia e serviços financeiros focada no cliente e na transformação do mercado de pagamentos no Brasil, com forte cultura de equipe e plano de carreira estruturado.',
    applicationUrl: 'https://br.indeed.com/viewjob?jk=08dc8ce7b5c87c46',
  },
  {
    id: 9,
    title: 'Auxiliar Administrativo (PCD)',
    company: 'Amara NZero Brasil',
    location: 'Feira de Santana - BA',
    type: 'CLT',
    salary: 'R$ 1.518 - R$ 2.100',
    posted: 'Recente',
    accessible: false,
    tags: ['Presencial', 'Tempo integral', 'Vaga PCD'],
    description:
      'Vaga exclusiva para Pessoas com Deficiência na Amara NZero Brasil em Feira de Santana. O Auxiliar Administrativo dará suporte às rotinas administrativas da empresa, auxiliando no controle de documentos, lançamento de dados e atendimento interno.',
    responsibilities: [
      'Auxiliar nas rotinas administrativas da área',
      'Arquivar e organizar documentos',
      'Auxiliar no lançamento de dados em planilhas de controle',
      'Quando necessário, auxiliar no envio e recebimento de malotes',
      'Auxiliar no atendimento ao cliente interno',
    ],
    requirements: [
      'Ensino médio completo',
      'Laudo médico da deficiência com CID — atualizado',
      'Conhecimento na área administrativa',
      'Informática básica (desejável)',
    ],
    benefits: [
      'Assistência médica',
      'Assistência odontológica',
      'Vale-transporte',
      'Vale-alimentação',
      'Acesso a academias (GymPass)',
      'Descontos em cursos de graduação e pós-graduação',
      'Convênios e descontos comerciais',
    ],
    companyInfo:
      'A Amara NZero Brasil é uma empresa com forte compromisso com diversidade e inclusão, presente em diversas cidades da Bahia, que valoriza o desenvolvimento e bem-estar de seus colaboradores.',
    applicationUrl: 'https://br.indeed.com/viewjob?jk=8ea7c44f829b14a8',
  },
  {
    id: 10,
    title: 'Fiscal de Prevenção de Perdas',
    company: "CARREFOUR & SAM'S",
    location: 'Salvador - BA',
    type: 'CLT',
    salary: 'Não informado',
    posted: 'Recente',
    accessible: false,
    tags: ['Presencial', 'Escala 6x1', 'Vaga PCD', "Sam's Club"],
    description:
      "Vaga para Pessoas com Deficiência no Sam's Club (Grupo Carrefour). O Fiscal de Prevenção de Perdas é responsável por monitorar e executar atividades de gestão de riscos, fiscalizando o patrimônio da loja, docas e estacionamento, além de controlar a entrada e saída de colaboradores, clientes e fornecedores.",
    responsibilities: [
      'Monitorar e fiscalizar o patrimônio da empresa nos diversos setores da loja, docas e estacionamento',
      'Controlar entrada e saída de veículos de clientes e fornecedores',
      'Controlar entrada e saída de colaboradores e terceiros identificados com crachás',
      'Acompanhar o circuito administrativo de recepção de mercadorias',
      'Registrar todas as ocorrências observadas junto à direção da loja',
      'Realizar rondas periódicas em todas as áreas da unidade',
    ],
    requirements: [
      'Ensino médio completo',
      'Laudo médico (PCD) atualizado',
      'Residir próximo ao local de trabalho',
      'Boa comunicação escrita e verbal',
      'Disponibilidade para escala 6x1 (incluindo finais de semana e feriados)',
      'Disponibilidade para início imediato',
    ],
    benefits: [
      'Assistência Médica e Odontológica',
      "Cartão Sócio Sam's Club",
      'GymPass',
      'Seguro de Vida',
      'Vale Transporte',
      'Vale Alimentação',
      'Licença Maternidade/Paternidade Estendida',
      'Participação nos Lucros (PLR)',
    ],
    companyInfo:
      'O Grupo Carrefour Brasil é o maior varejista do país, presente em todos os estados e atendendo mais de 60 milhões de clientes por mês. Opera sob diferentes formatos, incluindo o Sam\'s Club, Atacadão e Carrefour Varejo, com forte compromisso com diversidade e inclusão.',
    applicationUrl: 'https://br.indeed.com/viewjob?jk=a3ab6128c685662f',
  },
];

export function JobListings({ searchFilters, onClearFilters }: JobListingsProps) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [activeFilter, setActiveFilter] = useState<string>('Todas');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const [visibleCount,setVisibleCount] = useState<number>(3);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  }

  const handleViewDetails = (job: Job) => {
    setSelectedJob(job);
    setDetailsModalOpen(true);
  };

  useEffect(() => {
    if (!searchFilters) {
      setFilteredJobs(jobs);
      setActiveFilter('Todas');
      return;
    }

    let filtered = jobs;

    // escrito
    if (searchFilters.keywords) {
      const keywords = searchFilters.keywords.toLowerCase();
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(keywords) ||
        job.company.toLowerCase().includes(keywords) ||
        job.location.toLowerCase().includes(keywords) ||
        job.tags.some(tag => tag.toLowerCase().includes(keywords))
      );
    }

    // localização 
    if (searchFilters.location) {
      const location = searchFilters.location.toLowerCase();
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(location)
      );
    }

    // tipo
    if (searchFilters.type) {
      filtered = filtered.filter(job => job.type === searchFilters.type);
    }

    // descrição
    if (searchFilters.tags.length > 0) {
      filtered = filtered.filter(job => searchFilters.tags.some(searchTag => {
        const searchTagLower = searchTag.toLowerCase();

        if (searchTagLower === "remoto") {
          return (
            job.tags.some(jobTag =>
              jobTag.toLowerCase().includes("remoto") || 
              jobTag.toLowerCase().includes("home office")) ||
              job.location.toLowerCase().includes("remoto"))
        }
        return job.tags.some(jobTag => jobTag.toLowerCase().includes(searchTagLower))
      }))
    }

    setFilteredJobs(filtered);
    setVisibleCount(3);
  }, [searchFilters]);

  const handleQuickFilter = (filter: string) => {
    setActiveFilter(filter);

    if (filter === 'Todas') {
      setFilteredJobs(jobs);
      return;
    }

    let filtered = jobs;

    if (filter === 'CLT' || filter === 'PJ') {
      filtered = jobs.filter(job => job.type === filter);
    } else if (filter === 'Remoto') {
      filtered = jobs.filter(job =>
        job.tags.some(tag =>tag.toLowerCase().includes("home office")) || 
        job.location.toLowerCase().includes("remoto"))
    } else if (filter === 'Presencial') {
      filtered = jobs.filter(job =>
        job.tags.some(tag => tag.toLowerCase().includes('presencial'))
      );
    }

    setFilteredJobs(filtered);
    setVisibleCount(3);
  };

  const hasSearchFilters = searchFilters && (
    searchFilters.keywords ||
    searchFilters.location ||
    searchFilters.type ||
    searchFilters.tags.length > 0
  );

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

        {hasSearchFilters && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Resultados da Busca ({filteredJobs.length}{' '}
                  {filteredJobs.length === 1 ? 'vaga encontrada' : 'vagas encontradas'})
                </h3>
                <div className="space-y-1 text-sm text-emerald-800">
                  {searchFilters?.keywords && (
                    <p><strong>Palavras-chave:</strong> {searchFilters.keywords}</p>
                  )}
                  {searchFilters?.location && (
                    <p><strong>Localização:</strong> {searchFilters.location}</p>
                  )}
                  {searchFilters?.type && (
                    <p><strong>Tipo:</strong> {searchFilters.type}</p>
                  )}
                  {searchFilters?.tags && searchFilters.tags.length > 0 && (
                    <p><strong>Tags:</strong> {searchFilters.tags.join(', ')}</p>
                  )}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onClearFilters}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-100"
              >
                <X className="w-4 h-4 mr-2" />
                Limpar Filtros
              </Button>
            </div>
          </div>
        )}

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {['Todas', 'CLT', 'PJ', 'Remoto', 'Presencial'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleQuickFilter(filter)}
              className={activeFilter === filter ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.slice(0,visibleCount).map((job) => (
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
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => handleViewDetails(job)}
                >
                  Ver Detalhes
                </Button>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma vaga encontrada
              </h3>
              <p className="text-gray-600 mb-4">
                Não encontramos vagas que correspondam aos seus critérios de busca.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  onClearFilters?.();
                  handleQuickFilter('Todas');
                }}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <X className="w-4 h-4 mr-2" />
                Ver Todas as Vagas
              </Button>
            </div>
          )}
        </div>

        {filteredJobs.length > visibleCount && (
          <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={handleLoadMore}>
            Carregar Mais Vagas
          </Button>
        </div>
        )}
      </div>

      <JobDetailsModal
        job={selectedJob}
        open={detailsModalOpen}
        onOpenChange={setDetailsModalOpen}
      />
    </section>
  );
}