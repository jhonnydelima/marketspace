import { Button as NativeBaseButton, IButtonProps } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'unstyled';
}

export function Button({ title, variant = 'primary', ...rest }: Props) {
  const variants = [
    {variant: 'primary', bg: 'blue.500', color: 'gray.100', pressedBg: 'blue.700'},
    {variant: 'secondary', bg: 'gray.300', color: 'gray.600', pressedBg: 'gray.200'},
    {variant: 'tertiary', bg: 'gray.700', color: 'gray.100', pressedBg: 'gray.500'},
    {variant: 'unstyled', bg: 'transparent', color: undefined, pressedBg: undefined},
  ];

  const variantData = variants.find(item => item.variant === variant);

  return (
    <NativeBaseButton
      h={10}
      bg={variantData?.bg}
      borderWidth={0}
      borderColor='blue.700'
      rounded='md'
      _text={{
        color: variantData?.color,
        fontFamily: 'heading',
        fontSize: 'sm',
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