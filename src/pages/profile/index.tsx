import {
  Box,
  Button,
  Card,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiFilePaper2Line } from "react-icons/ri";
import Footers from "../../components/footers";

const MyProfile = () => {
  return (
    <>
      <Navbar />
      <Box p="20px" display={"flex"} flexDirection={"row"} mb={4} w={"full"}>
        <Box
          w={"22%"}
          h={"70vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <NavLink to={"#"}>
            <Flex pl={4}>
              <Button
                _hover={{ bg: "transparent", color: "gray" }}
                bg={"transparent"}
              >
                <CgProfile size={25} />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Profile
              </Text>
            </Flex>
          </NavLink>
          <NavLink to={"#"}>
            <Flex pl={4}>
              <Button
                _hover={{ bg: "transparent", color: "gray" }}
                bg={"transparent"}
              >
                <RiFilePaper2Line size={25} />
              </Button>
              <Text
                _hover={{ color: "gray" }}
                fontWeight="600"
                alignItems="center"
                mt={2}
              >
                Transaction History
              </Text>
            </Flex>
          </NavLink>
        </Box>
        <Box>
          <Text mx={'20px'} my={'5px'}>My Profile</Text>
          <Card w={"800px"} h={"100%"} bg={"#F0F0F0"} p={12} rounded={"2xl"}>
            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"4px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Fullname
              </Text>
              <Input
                border={"1px solid Black"}
                placeholder="Fullname"
                type="text"
                size="md"
              />
            </Flex>

            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"4px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Email
              </Text>
              <Input
                border={"1px solid Black"}
                placeholder="Email"
                type="email"
                size="md"
              />
            </Flex>
            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"6px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Phone Number
              </Text>
              <Input
                border={"1px solid Black"}
                type="tel"
                name="phone"
                placeholder="Nomor telepon"
              />
            </Flex>
            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"4px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Address
              </Text>
              <Textarea
                border={"1px solid Black"}
                h={"150px"}
                name="address"
                placeholder="Enter your Address"
              />
            </Flex>
          </Card>
        </Box>
      </Box>
      <Footers/>
    </>
  );
};

export default MyProfile;
