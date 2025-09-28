import { Button } from '@/registry/default/ui/button';
import { Download } from 'lucide-react';

export default function ButtonSizesDemo() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-3'>
        <Button size='sm'>Small</Button>
        <Button size='default'>Default</Button>
        <Button size='lg'>Large</Button>
      </div>

      <div className='flex items-center gap-3'>
        <Button size='icon'>
          <Download className='size-4' />
        </Button>
        <Button size='pill'>Pill Button</Button>
      </div>
    </div>
  );
}
