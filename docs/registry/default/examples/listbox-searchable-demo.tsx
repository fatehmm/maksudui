'use client';

import * as React from 'react';

import { Listbox, type ListboxOption } from '@/registry/default/ui/listbox';

const teamOptions: ListboxOption[] = [
  { label: 'Engineering', value: 'engineering', description: 'Build and maintain products' },
  { label: 'Design', value: 'design', description: 'Create beautiful interfaces' },
  { label: 'Marketing', value: 'marketing', description: 'Grow the business' },
  { label: 'Sales', value: 'sales', description: 'Close deals and partnerships' },
  { label: 'Product', value: 'product', description: 'Define the roadmap' },
  {
    label: 'Customer Support',
    value: 'customer-support',
    description: 'Help our customers succeed',
  },
  { label: 'Finance', value: 'finance', description: 'Manage the numbers' },
];

export default function ListboxSearchableDemo() {
  const [selectedTeam, setSelectedTeam] = React.useState<string>('design');

  return (
    <div className='w-full max-w-sm'>
      <Listbox
        searchable
        options={teamOptions}
        value={selectedTeam}
        onChange={setSelectedTeam}
        className='h-[350px]'
      />
    </div>
  );
}
