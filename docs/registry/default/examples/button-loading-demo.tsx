import { Button } from '@/registry/default/ui/button';
import { Download, Save } from 'lucide-react';

export default function ButtonLoadingDemo() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-3'>
        <Button loading>Loading</Button>
        <Button variant='outline' loading>
          Please wait
        </Button>
        <Button variant='secondary' loading>
          <Save className='size-4' />
          Saving...
        </Button>
      </div>

      <div className='flex items-center gap-3'>
        <Button disabled>Disabled</Button>
        <Button variant='outline' disabled>
          <Download className='size-4' />
          Download
        </Button>
      </div>
    </div>
  );
}
