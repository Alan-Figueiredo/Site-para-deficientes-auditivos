import { useState } from 'react';
import { Video } from 'lucide-react';
import { Button } from './ui/button';
import { LibrasPlayer } from './LibrasPlayer';

interface LibrasButtonProps {
  section: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function LibrasButton({ section, variant = 'default', size = 'default', className = '' }: LibrasButtonProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={`gap-2 ${className} cursor-pointer`}
        onClick={() => setIsPlayerOpen(true)}
      >
        <Video className="w-4 h-4" />
        Ver em Libras
      </Button>
      
      <LibrasPlayer
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />
    </>
  );
}
