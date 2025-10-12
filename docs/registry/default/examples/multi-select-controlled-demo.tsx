'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import { MultiSelect } from '@/registry/default/ui/multi-select';

export default function MultiSelectControlledDemo() {
  const [selected, setSelected] = React.useState<string[]>(['react']);

  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Ember', value: 'ember' },
  ];

  function selectAll() {
    setSelected(frameworks.map((f) => f.value));
  }

  function clearAll() {
    setSelected([]);
  }

  return (
    <div className='w-full max-w-md space-y-4'>
      <MultiSelect
        options={frameworks}
        selected={selected}
        onChange={setSelected}
        placeholder='Frameworks'
      />
      <div className='flex gap-2'>
        <Button variant='outline' size='sm' onClick={selectAll}>
          Select All
        </Button>
        <Button variant='outline' size='sm' onClick={clearAll}>
          Clear All
        </Button>
      </div>
      <div className='rounded-md border p-3'>
        <p className='text-muted-foreground text-sm'>
          Selected: {selected.length === 0 ? 'None' : selected.join(', ')}
        </p>
      </div>
    </div>
  );
}
