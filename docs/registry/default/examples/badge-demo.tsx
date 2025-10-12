import { Badge } from '@/registry/default/ui/badge';

export default function BadgeDemo() {
  return (
    <div className='flex items-center gap-3'>
      <Badge variant='positive'>Active</Badge>
      <Badge variant='info'>Beta</Badge>
      <Badge variant='negative'>Error</Badge>
    </div>
  );
}
