import { Plus } from 'lucide-react';
import React from 'react';

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className='list-none list-inside'>{children}</ul>;
}

export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex flex-row gap-2 flex-nowrap items-center'>
      <Plus className='size-3' />
      <span>{children}</span>
    </li>
  );
}
