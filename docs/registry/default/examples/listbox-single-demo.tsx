'use client';

import * as React from 'react';

import { Listbox, type ListboxOption } from '@/registry/default/ui/listbox';

const teamOptions: ListboxOption[] = [
  { label: 'Engineering', value: 'engineering', description: 'Build and maintain products' },
  { label: 'Design', value: 'design', description: 'Create beautiful interfaces' },
  { label: 'Marketing', value: 'marketing', description: 'Grow the business' },
  { label: 'Sales', value: 'sales', description: 'Close deals and partnerships' },
  { label: 'Product', value: 'product', description: 'Define the roadmap' },
  { label: 'HR', value: 'hr', description: 'People and culture', disabled: true },
];

export default function ListboxSingleDemo() {
  const [selectedTeam, setSelectedTeam] = React.useState<string>('engineering');

  return (
    <div className='w-full max-w-sm space-y-4'>
      <Listbox
        options={teamOptions}
        value={selectedTeam}
        onChange={setSelectedTeam}
        className='h-[300px]'
      />
      <div className='text-sm'>
        <span className='font-medium'>Selected: </span>
        <span className='text-muted-foreground'>
          {teamOptions.find((t) => t.value === selectedTeam)?.label || 'None'}
        </span>
      </div>
    </div>
  );
}
