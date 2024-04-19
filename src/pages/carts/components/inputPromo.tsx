import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import { MdOutlineDiscount } from 'react-icons/md';

function InputPromo() {
  return (
    <>
      <Box>
        <InputGroup w='320px'>
          <InputLeftElement pointerEvents="none">
            <MdOutlineDiscount color='gray.500' />
          </InputLeftElement>
          <Input type="tel" placeholder="Add Promo Code" borderRadius='50px' />
        </InputGroup>
      </Box>
    </>
  );
}

export default InputPromo;
