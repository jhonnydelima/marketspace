import { FormControl, Input as NativeBaseInput, IInputProps } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg='gray.100'
        h={12}
        px={4}
        py={3}
        borderWidth={0}
        fontSize='md'
        fontFamily='body'
        color='gray.500'
        placeholderTextColor='gray.400'
        rounded='md'
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.400'
        }}
        _focus={{
          bg: 'gray.100',
          borderWidth: 1,
          borderColor: 'blue.700'
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: 'red.400' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}