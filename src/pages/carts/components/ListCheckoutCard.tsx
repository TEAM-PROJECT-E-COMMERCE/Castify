import { Image, Text, Box, Button } from '@chakra-ui/react';
import ButtonAdd from './buttonAdd';
import { FaRegTrashAlt } from 'react-icons/fa';
import dataCheckout from '../mocks/dataCheckout.json';

function ListCheckout() {
  return (
    <>
      {dataCheckout.map((data, index) => (
        <Box border="1px" borderRadius="10px" w="680px" display="flex" boxShadow="lg" borderColor="#E8E8E8" key={index}>
          <Image objectFit="fill" borderRadius="20px" p="10px" boxSize="100%" width="200px" height="150px" src={data.image} alt={data.name} />
          <Box>
            <Button ms="410px" position="absolute" mt="10px" bgColor="transparent">
              <FaRegTrashAlt color="red" fontWeight="bold" />
            </Button>
            <Text fontWeight="bold" fontSize="23px">
              {data.name}
            </Text>
            <Box display="flex" gap={3}>
              <Text fontSize="18px">Type:</Text>
              <Text fontSize="18px" color="gray">
                {data.tipe}
              </Text>
            </Box>
            <Box display="flex" gap={3}>
              <Text fontSize="18px">Model:</Text>
              <Text fontSize="18px" color="gray">
                {data.model}
              </Text>
            </Box>
            <Text fontSize="18px" mt="20px">
              {data.harga}
            </Text>
            <ButtonAdd />
          </Box>
        </Box>
      ))}
    </>
  );
}

export default ListCheckout;
