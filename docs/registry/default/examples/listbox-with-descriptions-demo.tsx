'use client';

import * as React from 'react';

import { Listbox, type ListboxOption } from '@/registry/default/ui/listbox';

const statusOptions: ListboxOption[] = [
  { label: 'To Do', value: 'todo', description: 'Task has not been started' },
  { label: 'In Progress', value: 'in-progress', description: 'Currently being worked on' },
  { label: 'Review', value: 'review', description: 'Ready for code review' },
  { label: 'Testing', value: 'testing', description: 'Being tested by QA' },
  { label: 'Done', value: 'done', description: 'Task is completed' },
];

export default function ListboxWithDescriptionsDemo() {
  const [status, setStatus] = React.useState<string>('in-progress');

  return (
    <div className='w-full max-w-sm'>
      <Listbox options={statusOptions} value={status} onChange={setStatus} className='h-[300px]' />
    </div>
  );
}
