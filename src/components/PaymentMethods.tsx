import { useState } from 'react';
import { LogBox } from 'react-native';
import { Checkbox, VStack } from 'native-base';

type Methods = 'BANKING_BILLET' | 'PIX' | 'CASH' | 'CREDIT' | 'BANK_DEPOSIT';

export function PaymentMethods() {
  // TODO: criar contexto para filtros
  const [groupValue, setGroupValue] = useState<Methods[]>([]);

  LogBox.ignoreLogs([
    'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
  ]);

  return (
    <VStack>
      <Checkbox.Group
        colorScheme='blue'
        defaultValue={groupValue}
        accessibilityLabel='Selecione um meio de pagamento'
        onChange={(values) => {
          setGroupValue(values || []);
        }}
      >
        <Checkbox value='BANKING_BILLET' mb={2}>
          Boleto
        </Checkbox>
        <Checkbox value='PIX' mb={2}>
          Pix
        </Checkbox>
        <Checkbox value='CASH' mb={2}>
          Dinheiro
        </Checkbox>
        <Checkbox value='CREDIT' mb={2}>
          Cartão de Crédito
        </Checkbox>
        <Checkbox value='BANK_DEPOSIT' mb={2}>
          Depósito Bancário
        </Checkbox>
      </Checkbox.Group>
    </VStack>
  );
}
