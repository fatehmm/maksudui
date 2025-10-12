'use client';

import { Check } from 'lucide-react';
import * as React from 'react';

import { MultiSelect } from '@/registry/default/ui/multi-select';

export default function MultiSelectWithIconsDemo() {
  const [selected, setSelected] = React.useState<string[]>(['react', 'vue']);

  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Ember', value: 'ember' },
    { label: 'Next.js', value: 'nextjs' },
  ];

  return (
    <div className='w-full max-w-md'>
      <MultiSelect
        options={frameworks}
        selected={selected}
        onChange={setSelected}
        placeholder='Frameworks'
        icon={Check}
      />
    </div>
  );
}
