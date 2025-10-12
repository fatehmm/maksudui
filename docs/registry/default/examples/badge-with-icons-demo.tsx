import { Badge } from '@/registry/default/ui/badge';
import { AlertTriangle, Check, Info, X } from 'lucide-react';

export default function BadgeWithIconsDemo() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Badge variant='positive' icon={<Check />}>
        Success
      </Badge>
      <Badge variant='info' icon={<Info />}>
        Information
      </Badge>
      <Badge variant='warning' icon={<AlertTriangle />}>
        Warning
      </Badge>
      <Badge variant='negative' icon={<X />}>
        Error
      </Badge>
    </div>
  );
}
