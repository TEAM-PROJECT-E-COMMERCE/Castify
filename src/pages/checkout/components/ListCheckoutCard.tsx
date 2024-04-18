import { Image, Text, Box, Button } from '@chakra-ui/react';
import ButtonAdd from './buttonAdd';
import { FaRegTrashAlt } from 'react-icons/fa';

function ListCheckout() {
  return (
    <>
      <Box border="1px" borderRadius="10px" w="59%" display="flex" boxShadow="lg" borderColor='#E8E8E8'>
        <Image objectFit="fill" borderRadius="20px" p="10px" boxSize="100%" width="200px" height="150px" src="https://mocil.id/uploads/vehicle/size-md-720--Qajax7QntLMccyrNPJ80028okY9WRcMallAZdiI4.jpg" alt="Mobil lejend" />
        <Box>
          <Button ms="449px" position='absolute' mt='10px' bgColor='transparent'>
            <FaRegTrashAlt color='red' fontWeight='bold' />
          </Button>
          <Text fontWeight="bold" fontSize="23px">
            Daihatsu Sigra 2018
          </Text>
          <Box display="flex" gap={3}>
            <Text fontSize="18px">Type:</Text>
            <Text fontSize="18px" color="gray">
              MPV 7
            </Text>
          </Box>
          <Box display="flex" gap={3}>
            <Text fontSize="18px">Model:</Text>
            <Text fontSize="18px" color="gray">
              Sigra Tahun 2018
            </Text>
          </Box>
          <Text fontSize="18px" mt="20px">
            Rp. 300.000.000
          </Text>
          <ButtonAdd />
        </Box>
      </Box>
    </>
  );
}

export default ListCheckout;
