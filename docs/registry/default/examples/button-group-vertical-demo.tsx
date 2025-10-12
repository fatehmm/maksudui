import ButtonGroup, { ButtonGroupItem } from '@/registry/default/ui/button-group';

export default function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup size='default' orientation='vertical'>
      <ButtonGroupItem>Left</ButtonGroupItem>
      <ButtonGroupItem>Center</ButtonGroupItem>
      <ButtonGroupItem>Right</ButtonGroupItem>
    </ButtonGroup>
  );
}
