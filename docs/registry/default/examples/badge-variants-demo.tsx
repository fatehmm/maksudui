import { Badge } from '@/registry/default/ui/badge';

export default function BadgeVariantsDemo() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Badge variant='positive'>Positive</Badge>
      <Badge variant='info'>Info</Badge>
      <Badge variant='negative'>Negative</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='urgent'>Urgent</Badge>
    </div>
  );
}
