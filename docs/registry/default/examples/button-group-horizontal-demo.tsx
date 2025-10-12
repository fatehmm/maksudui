import ButtonGroup, { ButtonGroupItem } from '@/registry/default/ui/button-group';

export default function ButtonGroupHorizontalDemo() {
  return (
    <ButtonGroup size='default' orientation='horizontal'>
      <ButtonGroupItem>Day</ButtonGroupItem>
      <ButtonGroupItem>Week</ButtonGroupItem>
      <ButtonGroupItem>Month</ButtonGroupItem>
    </ButtonGroup>
  );
}
