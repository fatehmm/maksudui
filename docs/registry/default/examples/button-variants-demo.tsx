import { Button } from '@/registry/default/ui/button';

export default function ButtonVariantsDemo() {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
      <Button variant='default'>Default</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='warning'>Warning</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='success'>Success</Button>
    </div>
  );
}
