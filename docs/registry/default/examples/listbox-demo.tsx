'use client';

import * as React from 'react';

import { Listbox, type ListboxOption } from '@/registry/default/ui/listbox';

const options: ListboxOption[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Ember', value: 'ember' },
];

export default function ListboxDemo() {
  const [value, setValue] = React.useState<string>('react');

  return (
    <div className='w-full max-w-sm'>
      <Listbox options={options} value={value} onChange={setValue} className='h-[250px]' />
    </div>
  );
}
