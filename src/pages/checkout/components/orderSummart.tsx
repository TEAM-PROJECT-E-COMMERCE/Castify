import { Box, Text } from '@chakra-ui/react';

function OrderSummary() {
  return (
    <>
      <Box ms='750px' mt='0px' position='absolute'>
        <Box border="1px" borderRadius="10px" w="500px" h="500px" borderColor="#E8E8E8" boxShadow="lg">
          <Text>Order Summary</Text>
        </Box>
      </Box>
    </>
  );
}

export default OrderSummary;
