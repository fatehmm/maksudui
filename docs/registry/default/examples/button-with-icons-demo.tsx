import { Button } from '@/registry/default/ui/button';
import { Download, Mail, Plus, Settings } from 'lucide-react';

export default function ButtonWithIconsDemo() {
  return (
    <div className='flex flex-col gap-4'>
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
      </div>

      <div className='flex items-center gap-3'>
        <Button size='icon' variant='default'>
          <Plus className='size-4' />
        </Button>
        <Button size='icon' variant='outline'>
          <Download className='size-4' />
        </Button>
        <Button size='icon' variant='ghost'>
          <Settings className='size-4' />
        </Button>
      </div>
    </div>
  );
}
