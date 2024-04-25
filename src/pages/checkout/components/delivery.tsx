import React from "react";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Flex,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Select,
  Input,
  Radio,
  RadioGroup,
  Spacer,
} from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiTruckFill } from "react-icons/ri";

const Delivery = () => {
  const [value, setValue] = React.useState("");
  return (
    <Box mt='20'>
      <Flex alignItems="center" gap="5">
        <Text fontSize="4xl" fontWeight="bold">
          <RiTruckFill />
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          Delivery
        </Text>
      </Flex>
      {/* <Select border="1px" borderColor="#EDEDED" mt="5px" borderRadius="5px">
              <option value="option1">
                  <Flex w='100%' justifyContent='space-between'>
                      <Text>SiCepat Express</Text>
                      <Text>Rp.20000</Text>
                  </Flex>
        </option>
        <option value="option2">Toyota</option>
        <option value="option3">Daihatsu</option>
      </Select> */}
      <Accordion defaultIndex={[1]} allowMultiple mt='5' px='10'>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text>{value ? value : "Choose Delivery"}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <RadioGroup w="100%" onChange={setValue} value={value}>
              <Flex flexDirection="column" gap="5">
                <Flex w="100%" justifyContent="space-between">
                  <Radio value="SiCepat">SiCepat</Radio>
                  <Text fontWeight="bold">Rp.20000</Text>
                </Flex>
                <Flex w="100%" justifyContent="space-between">
                  <Radio value="J&T">J&T</Radio>
                  <Text fontWeight="bold">Rp.20000</Text>
                </Flex>
                <Flex w="100%" justifyContent="space-between">
                  <Radio value="AnterAja">AnterAja</Radio>
                  <Text fontWeight="bold">Rp.20000</Text>
                </Flex>
                <Flex w="100%" justifyContent="space-between">
                  <Radio value="JNE">JNE</Radio>
                  <Text fontWeight="bold">Rp.20000</Text>
                </Flex>
              </Flex>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Delivery;
