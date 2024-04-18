import { Text, Box, Grid } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import Breadcrums from './components/breadcrums';
import ListCheckout from './components/ListCheckoutCard';
import OrderSummary from './components/orderSummart';

function Checkout() {
  return (
    <>
      <Navbar />
      <Box border="1px" borderColor="#EDEDED" w="90%" ms="75px" />
      <Box p="75px" mt="-50px">
        <Breadcrums />
        <Text fontWeight="bold" fontSize="40px" mt="20px">
          Your Cart
        </Text>
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          <ListCheckout />
          <OrderSummary />
        </Grid>
      </Box>
    </>
  );
}

export default Checkout;
