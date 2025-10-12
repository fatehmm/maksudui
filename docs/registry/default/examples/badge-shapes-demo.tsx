import { Badge } from '@/registry/default/ui/badge';

export default function BadgeShapesDemo() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Badge variant='info' shape='default'>
        Default
      </Badge>
      <Badge variant='info' shape='pill'>
        Pill
      </Badge>
      <Badge variant='info' shape='square'>
        Square
      </Badge>
    </div>
  );
}
