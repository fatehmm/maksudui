import ButtonGroup, { ButtonGroupItem } from '@/registry/default/ui/button-group';

export default function ButtonGroupMixedSizesDemo() {
  return (
    <div className='flex flex-col gap-4'>
      <ButtonGroup size='sm' orientation='horizontal'>
        <ButtonGroupItem>Small A</ButtonGroupItem>
        <ButtonGroupItem>Small B</ButtonGroupItem>
        <ButtonGroupItem>Small C</ButtonGroupItem>
      </ButtonGroup>

      <ButtonGroup size='default' orientation='horizontal'>
        <ButtonGroupItem>Default A</ButtonGroupItem>
        <ButtonGroupItem size='sm'>Sm override</ButtonGroupItem>
        <ButtonGroupItem>Default C</ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
}
