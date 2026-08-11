import { type ReactNode } from 'react';
import { FileText } from '@phosphor-icons/react';

interface DossierLabelProps {
  children: ReactNode;
}

export function DossierLabel({ children }: DossierLabelProps) {
  return (
    <div className="dossier-label">
      <FileText size={10} weight="bold" />
      {children}
    </div>
  );
}
