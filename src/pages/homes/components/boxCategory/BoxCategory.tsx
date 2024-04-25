import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const BoxCategory = () => {
  return (
    <Box w={{xl: '100%', '2xl': '80%'}} m='auto'>
      <Box p={4} h={"auto"} bg={"#F0F0F0"} rounded={"xl"}>
        <Box justifyContent={"center"} py={4} display={"flex"}>
          <Heading>BROWSE BY CAR CATEGORY</Heading>
        </Box>
        <Grid h="420px" w={"90%"} m={"auto"} mb={10} templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem
            rounded={"lg"}
            h={"210px"}
            colSpan={6}
            bg={"white"}
            px={12}
            shadow={"lg"}
          >
            <NavLink
              to={"/category"}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Heading color={"black"}>Brands</Heading>
              <Image
                src="https://i.ibb.co/m9VFx2s/bg-brand-boxcategory.png"
                h={"100%"}
                alt="brands"
              />
            </NavLink>
          </GridItem>
          <GridItem rounded={"lg"} h={"210px"} colSpan={3} px={12} bg={"white"} shadow={"lg"}>
            <NavLink
              to={"#"}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                src="https://i.ibb.co/jvQJY51/bg-type-box-category.png"
                w={80}
                h={"100%"}
                alt="brands"
              />
              <Heading color={"black"}>Type</Heading>
            </NavLink>
          </GridItem>
          <GridItem rounded={"lg"} h={"210px"} colSpan={3} bg={"white"} shadow={"lg"}>
            <NavLink
              to={"#"}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Heading ml={10} color={"black"}>
                Model
              </Heading>
              <Image
                src="https://i.ibb.co/2ccqsf7/bg-model-boxcategory.png"
                w={80}
                h={"100%"}
                alt="brands"
              />
            </NavLink>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default BoxCategory;
