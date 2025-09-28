import { Alert, AlertDescription, AlertTitle } from '@/registry/default/ui/alert';
import { AlertTriangle, CheckCircle, Info, TriangleAlert } from 'lucide-react';

export default function AlertVariantsDemo() {
  return (
    <div className='grid gap-4'>
      <Alert>
        <Info className='size-4' />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is the default alert variant. It's perfect for general information and neutral
          messages.
        </AlertDescription>
      </Alert>

      <Alert variant='success'>
        <CheckCircle className='size-4' />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          Use this variant to indicate successful operations, confirmations, or positive outcomes.
        </AlertDescription>
      </Alert>

      <Alert variant='warning'>
        <TriangleAlert className='size-4' />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This variant draws attention to potential issues or important information that requires
          user attention.
        </AlertDescription>
      </Alert>

      <Alert variant='destructive'>
        <AlertTriangle className='size-4' />
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          Use this for errors, failures, or critical issues that need immediate attention from the
          user.
        </AlertDescription>
      </Alert>
    </div>
  );
}
