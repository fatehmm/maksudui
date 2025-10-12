'use client';

import * as React from 'react';

import { Listbox, type ListboxOption } from '@/registry/default/ui/listbox';

const projectOptions: ListboxOption[] = [
  { label: 'Website Redesign', value: 'website-redesign' },
  { label: 'Mobile App', value: 'mobile-app' },
  { label: 'API Development', value: 'api-development' },
  { label: 'Database Migration', value: 'database-migration' },
  { label: 'Security Audit', value: 'security-audit' },
  { label: 'Performance Optimization', value: 'performance-optimization' },
];

export default function ListboxMultipleDemo() {
  const [selectedProjects, setSelectedProjects] = React.useState<string[]>(['mobile-app']);

  return (
    <div className='w-full max-w-sm space-y-4'>
      <Listbox
        multiple
        options={projectOptions}
        value={selectedProjects}
        onChange={setSelectedProjects}
        className='h-[300px]'
      />
      <div className='text-sm'>
        <span className='font-medium'>Selected ({selectedProjects.length}): </span>
        <span className='text-muted-foreground'>
          {selectedProjects.length > 0 ? selectedProjects.join(', ') : 'None'}
        </span>
      </div>
    </div>
  );
}
