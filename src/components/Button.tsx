import { Button as NativeBaseButton, IButtonProps } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Button({ title, variant = 'primary', ...rest }: Props) {
  const variants = [
    {variant: 'primary', bg: 'blue.500', color: 'gray.100', pressedBg: 'blue.700'},
    {variant: 'secondary', bg: 'gray.300', color: 'gray.600', pressedBg: 'gray.400'},
    {variant: 'tertiary', bg: 'gray.700', color: 'gray.100', pressedBg: 'gray.600'},
  ];

  const variantData = variants.find(item => item.variant === variant);

  return (
    <NativeBaseButton
      w='full'
      h={10}
      bg={variantData?.bg}
      borderWidth={0}
      borderColor='blue.700'
      rounded='sm'
      _text={{
        color: variantData?.color,
        fontFamily: 'heading',
        fontSize: 'sm'
      }}
      _pressed={{
        bg: variantData?.pressedBg
      }}
      {...rest}
    >
      {title}
    </NativeBaseButton>
  );
}