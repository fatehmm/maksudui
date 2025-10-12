'use client';

import * as React from 'react';

import { MultiSelect } from '@/registry/default/ui/multi-select';

export default function MultiSelectDemo() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Ember', value: 'ember' },
  ];

  return (
    <div className='w-full max-w-md'>
      <MultiSelect
        options={frameworks}
        selected={selected}
        onChange={setSelected}
        placeholder='Frameworks'
      />
    </div>
  );
}
