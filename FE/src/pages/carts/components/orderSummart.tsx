import { Box, Button, Text } from '@chakra-ui/react';
import InputPromo from './inputPromo';
import { FaArrowRight } from "react-icons/fa";

function OrderSummary() {
  return (
      <Box w='100%'>
        <Box border="1px" borderRadius="10px" borderColor="#E8E8E8" boxShadow="lg">
          <Box p="20px">
            <Text fontWeight="bold" fontSize="25px">
              Order Summary
            </Text>
            <Box display="flex" justifyContent='space-between'>
              <Text fontSize="20px" mt="15px">
                Subtotal
              </Text>
              <Text fontSize="20px" mt="15px" >
                Rp. 271.300.000
              </Text>
            </Box>
            <Box display="flex" justifyContent='space-between'>
              <Text fontSize="20px" mt="15px">
                Tax
              </Text>
              <Text fontSize="20px" mt="15px" color="red">
                Rp. -1.300.000
              </Text>
            </Box>
            <Box display="flex" justifyContent='space-between'>
              <Text fontSize="20px" mt="15px">
                Shipping
              </Text>
              <Text fontSize="20px" mt="15px" >
                Rp. 5.900.000
              </Text>
            </Box>
            <Box border="1px" borderColor="#EDEDED" w="100%" mt="15px" />
            <Box display="flex" justifyContent='space-between'>
              <Text fontSize="20px" mt="15px">
                Total
              </Text>
              <Text fontSize="20px" mt="15px" >
                Rp. 265.100.000
              </Text>
            </Box>
            <Box w='100%' display='flex' py="20px" gap={4}>
              <InputPromo />
              <Button w='50%' colorScheme='blackAlpha' bgColor='black' borderRadius='20px'>Apply</Button>
            </Box>
            <Button w='100%' colorScheme='blackAlpha' bgColor='black' borderRadius='20px' gap={3}>Checkout <FaArrowRight /></Button>
          </Box>
        </Box>
      </Box>
  );
}

export default OrderSummary;
