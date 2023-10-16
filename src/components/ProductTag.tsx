import { Button, IButtonProps } from 'native-base';

type Props = IButtonProps & {
  isNew: boolean;
  isSelectable?: boolean;
}

export function ProductTag({ isNew = true, isSelectable = true, ...rest }: Props) {
  const type = isNew ? 'NOVO' : 'USADO';

  return (
    <Button
      disabled={!isSelectable}
      bg={isNew ? 'blue.700' : 'gray.600'}
      position='absolute'
      m={1}
      px={2}
      py={0.5}
      rounded='xl'
      top='0'
      right='0'
      _pressed={{
        bg: isNew ? 'blue.700' : 'gray.600',
        opacity: 80,
      }}
      _text={{
        fontSize: '2xs',
        fontFamily: 'heading',
        color: 'white'
      }}
      {...rest}
    >
      { type }
    </Button>
  );
}
