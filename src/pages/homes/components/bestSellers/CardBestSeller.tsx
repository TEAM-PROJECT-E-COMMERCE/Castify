import { Button, Flex, Heading } from "@chakra-ui/react";
import BestSeller from "./BestSeller";
import dataBestSeller from "../../mock/dataBestSeller";

export default function CardBestSeller() {
  return (
    <>
      <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
        <Heading>BEST SELLER</Heading>
      </Flex>
      <Flex p={10} w={"full"} justifyContent={"center"} gap={10}>
        {dataBestSeller.map((item) => (
          <BestSeller
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            rate={item.rate}
            price={item.price}
          />
        ))}
      </Flex>
      <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
        <Button
          mb={12}
          w={"10%"}
          bg={"gray.200"}
          color={"black"}
          _hover={{ bg: "gray.500", color: "black" }}
          rounded={"full"}
        >
          View All
        </Button>
      </Flex>
    </>
  );
}
