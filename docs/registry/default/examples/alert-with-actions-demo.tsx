import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/registry/default/ui/alert';
import { Button } from '@/registry/default/ui/button';
import { TriangleAlert } from 'lucide-react';

export default function AlertWithActionsDemo() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <span className='text-muted-foreground text-sm'>Warning with Multiple Actions</span>
        <Alert variant='warning'>
          <TriangleAlert className='size-4' />
          <AlertTitle>Storage Almost Full</AlertTitle>
          <AlertDescription>
            Your storage is 90% full. Consider upgrading your plan or cleaning up files.
          </AlertDescription>
          <AlertAction>
            <div className='flex gap-2'>
              <Button size='sm' variant='warning'>
                Upgrade Plan
              </Button>
              <Button size='sm' variant='outline'>
                Clean Up
              </Button>
            </div>
          </AlertAction>
        </Alert>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='text-muted-foreground text-sm'>Error with Dismissible Action</span>
        <Alert variant='destructive' dismissible>
          <TriangleAlert className='size-4' />
          <AlertTitle>Connection Failed</AlertTitle>
          <AlertDescription>
            Unable to connect to the server. Please check your internet connection.
          </AlertDescription>
          <AlertAction>
            <Button size='sm' variant='destructive'>
              Retry Connection
            </Button>
          </AlertAction>
        </Alert>
      </div>
    </div>
  );
}
