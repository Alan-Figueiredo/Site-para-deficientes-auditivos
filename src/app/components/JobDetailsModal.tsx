import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Accessibility,
  Briefcase,
  CheckCircle2,
  Users,
  Calendar,
  ExternalLink,
  Share2
} from 'lucide-react';
import { Separator } from './ui/separator';

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

interface JobDetailsModalProps {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JobDetailsModal({ job, open, onOpenChange }: JobDetailsModalProps) {
  if (!job) return null;

  const handleApply = () => {
    if (job.applicationUrl) {
      window.open(job.applicationUrl, '_blank');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Confira esta vaga: ${job.title} na ${job.company}`,
        url: window.location.href
      });
    } else {
      // Fallback: copiar link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">
                {job.title}
              </DialogTitle>
              <DialogDescription className="text-lg font-semibold text-gray-700">
                {job.company}
              </DialogDescription>
            </div>
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
        </DialogHeader>

        {/* Informações principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Localização</p>
              <p className="text-sm font-semibold text-gray-900">{job.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <Briefcase className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Tipo de Contrato</p>
              <p className="text-sm font-semibold text-gray-900">{job.type}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <DollarSign className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Faixa Salarial</p>
              <p className="text-sm font-semibold text-gray-900">{job.salary}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Publicada</p>
              <p className="text-sm font-semibold text-gray-900">{job.posted}</p>
            </div>
          </div>
        </div>

        {/* Tags e Badges */}
        <div className="flex flex-wrap gap-2 py-2">
          {job.accessible && (
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Accessibility className="w-3 h-3 mr-1" />
              Vaga Acessível
            </Badge>
          )}
          {job.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-emerald-200 text-emerald-700">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Descrição */}
        {job.description && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              Sobre a Vaga
            </h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
        )}

        {/* Responsabilidades */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <div className="space-y-3 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              Responsabilidades
            </h3>
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Requisitos */}
        {job.requirements && job.requirements.length > 0 && (
          <div className="space-y-3 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Requisitos
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefícios */}
        {job.benefits && job.benefits.length > 0 && (
          <div className="space-y-3 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              Benefícios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 bg-emerald-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Informações da empresa */}
        {job.companyInfo && (
          <div className="space-y-2 mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              Sobre a Empresa
            </h3>
            <p className="text-gray-700 leading-relaxed">{job.companyInfo}</p>
          </div>
        )}

        {/* Contato */}
        {job.contactEmail && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Dúvidas sobre a vaga?</strong> Entre em contato: <a href={`mailto:${job.contactEmail}`} className="underline hover:text-blue-700">{job.contactEmail}</a>
            </p>
          </div>
        )}

        <Separator className="my-4" />

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex-1"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar Vaga
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
            disabled={!job.applicationUrl}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Candidatar-se à Vaga
          </Button>
        </div>

        {!job.applicationUrl && (
          <p className="text-sm text-center text-gray-500 mt-2">
            Link de candidatura em breve disponível
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
