interface StampBadgeProps {
  variant: 'verified' | 'shipped' | 'win' | 'archived' | 'closed' | 'mention';
  children: ReactNode;
  rotate?: number;
}

import type { ReactNode } from 'react';

export function StampBadge({ variant, children, rotate }: StampBadgeProps) {
  return (
    <span
      className={`stamp stamp--${variant}`}
      style={rotate !== undefined ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </span>
  );
}
