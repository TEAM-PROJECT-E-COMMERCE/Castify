import { Text, Box, Grid, GridItem } from '@chakra-ui/react';
import Breadcrums from './components/breadcrums';
import ListCheckout from './components/ListCheckoutCard';
import OrderSummary from './components/orderSummart';
import Navbar from '../../components/navbar';
import Footers from '../../components/footers';

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
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={3}>
            <Grid gap={4}>
              <ListCheckout />
            </Grid>
          </GridItem>

          <GridItem colSpan={1}>
            <OrderSummary />
          </GridItem>
        </Grid>
      </Box>
      <Footers />
    </>
  );
}

export default Checkout;
