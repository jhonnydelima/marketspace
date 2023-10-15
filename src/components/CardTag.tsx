import { Center } from 'native-base';

type Props = {
  isNew: boolean;
}

export function CardTag({ isNew = true }: Props) {
  const type = isNew ? 'NOVO' : 'USADO';

  return (
    <Center
      bg={isNew ? 'blue.700' : 'gray.600'}
      _text={{
        color: 'white',
        fontFamily: 'heading',
        fontSize: '2xs',
      }}
      position='absolute'
      m={1}
      px={2}
      py={0.5}
      rounded='xl'
      top='0'
      right='0'
    >
      { type }
    </Center>
  );
}
