'use client';

import { Heart } from 'lucide-react';
import * as React from 'react';

import { Listbox, type ListboxOption } from '@/registry/default/ui/listbox';

const projectOptions: ListboxOption[] = [
  { label: 'Website Redesign', value: 'website-redesign' },
  { label: 'Mobile App', value: 'mobile-app' },
  { label: 'API Development', value: 'api-development' },
  { label: 'Database Migration', value: 'database-migration' },
  { label: 'Security Audit', value: 'security-audit' },
];

export default function ListboxCustomIconDemo() {
  const [selectedFavorites, setSelectedFavorites] = React.useState<string[]>(['mobile-app']);

  return (
    <div className='w-full max-w-sm space-y-4'>
      <Listbox
        multiple
        searchable
        options={projectOptions}
        value={selectedFavorites}
        onChange={setSelectedFavorites}
        icon={Heart}
        className='h-[300px]'
      />
      <div className='text-sm'>
        <span className='font-medium'>Favorites: </span>
        <span className='text-muted-foreground'>{selectedFavorites.length}</span>
      </div>
    </div>
  );
}
