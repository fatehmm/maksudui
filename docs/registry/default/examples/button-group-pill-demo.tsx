import ButtonGroup, { ButtonGroupItem } from '@/registry/default/ui/button-group';

export default function ButtonGroupPillDemo() {
  return (
    <div className='flex flex-col gap-4'>
      <ButtonGroup size='pill' orientation='horizontal'>
        <ButtonGroupItem>Day</ButtonGroupItem>
        <ButtonGroupItem>Week</ButtonGroupItem>
        <ButtonGroupItem>Month</ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
}
