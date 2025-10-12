import { Button } from '@/registry/default/ui/button';
import { Check, Download, Mail, Plus, Settings } from 'lucide-react';

export default function ButtonExamples() {
  return (
    <div className='flex flex-col gap-6'>
      {/* Variants */}
      <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
        <Button variant='default'>Update</Button>
        <Button variant='destructive'>Delete User</Button>
        <Button variant='outline'>Learn More</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
        <Button variant='success'>Success</Button>
      </div>

      {/* With icons */}
      <div className='flex items-center gap-3'>
        <Button>
          <Mail className='size-4' />
          Send Email
        </Button>
        <Button variant='outline'>
          <Download className='size-4' />
          Download
        </Button>
        <Button variant='secondary'>
          <Settings className='size-4' />
          Settings
        </Button>
        <Button variant='success'>
          <Check className='size-4' />
          Success
        </Button>
      </div>

      {/* Sizes */}
      <div className='flex items-center gap-3'>
        <Button size='sm'>Small</Button>
        <Button size='default'>Default</Button>
        <Button size='lg'>Large</Button>
        <Button size='pill'>Pill</Button>
      </div>

      {/* Icon buttons */}
      <div className='flex items-center gap-3'>
        <Button size='icon' variant='default' aria-label='Add'>
          <Plus className='size-4' />
        </Button>
        <Button size='icon' variant='outline' aria-label='Download'>
          <Download className='size-4' />
        </Button>
        <Button size='icon' variant='ghost' aria-label='Settings'>
          <Settings className='size-4' />
        </Button>
      </div>
    </div>
  );
}
