import { Alert, AlertDescription, AlertTitle } from '@/registry/default/ui/alert';
import { CheckCircle, Info, TriangleAlert } from 'lucide-react';
import { useState } from 'react';

export default function AlertDismissibleDemo() {
  const [alerts, setAlerts] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const dismissAlert = (type: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className='flex flex-col gap-4'>
      {alerts.info && (
        <Alert dismissible onDismiss={() => dismissAlert('info')}>
          <Info className='size-4' />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This alert can be dismissed. Click the × button to remove it.
          </AlertDescription>
        </Alert>
      )}

      {alerts.success && (
        <Alert variant='success' dismissible onDismiss={() => dismissAlert('success')}>
          <CheckCircle className='size-4' />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Operation completed successfully! This alert can be dismissed.
          </AlertDescription>
        </Alert>
      )}

      {alerts.warning && (
        <Alert variant='warning' dismissible onDismiss={() => dismissAlert('warning')}>
          <TriangleAlert className='size-4' />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Please review your settings. This warning can be dismissed.
          </AlertDescription>
        </Alert>
      )}

      {alerts.error && (
        <Alert variant='destructive' dismissible onDismiss={() => dismissAlert('error')}>
          <TriangleAlert className='size-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. This error alert can be dismissed.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
