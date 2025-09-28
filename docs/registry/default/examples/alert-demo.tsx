import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/registry/default/ui/alert';
import { Button } from '@/registry/default/ui/button';
import { Info } from 'lucide-react';

export default function AlertDemo() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <Alert
          dismissible
          onDismiss={() => {
            console.log('Alert dismissed');
          }}
          icon={<Info />}
        >
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is a default alert. You can add any content here.
          </AlertDescription>
          <AlertAction>
            <Button size='sm'>Learn more</Button>
          </AlertAction>
        </Alert>
      </div>
    </div>
  );
}
