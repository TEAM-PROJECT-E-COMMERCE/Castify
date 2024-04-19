import { Box, Grid, Text, Image, NumberInput } from '@chakra-ui/react';
import Breadcrums from './components/breadcrums';
import FiltersCards from './components/filtersCards';
import { IoStarSharp } from 'react-icons/io5';
import dataMobel from './mocks/dataMobel.json';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Navbar from '../../components/navbar';

function Category() {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#FFC663',
    inactiveFillColor: 'gray',
  };
  return (
    <>
      <Navbar />
      <Breadcrums />
      <Box position="absolute" left="360px" top="140px">
        <Text fontSize="30px" fontWeight="bold">
          Car
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {dataMobel.map((data, index) => (
            <Box mt="10px" key={index}>
              <Image borderRadius="20px" boxSize="500px" width="280px" height="250px" objectFit="fill" src={data.image} alt="chevrolet" />
              <Text fontWeight="bold" fontSize="20px">
                {data.name}
              </Text>
              <Box display="flex" gap={2}>
                <Rating style={{ maxWidth: 115 }} value={data.rating} readOnly itemStyles={myStyles} />
                <Text>{data.rating}/5</Text>
              </Box>
              <Text fontWeight="bold" fontSize="15px">
                {data.harga}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <FiltersCards />
    </>
  );
}

export default Category;
