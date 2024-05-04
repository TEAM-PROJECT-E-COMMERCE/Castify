import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "@gluestack-ui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "@gluestack-ui/themed";

export default function Search() {
  return (
    <Box width={"100%"} mb={10}>
      <Input variant="rounded" size="lg" py={5} pl={10}>
          <Icon as={SearchIcon} w={22} h={22} my={5} ml={5} />
        <InputField placeholder="Search product" />
      </Input>
    </Box>
  );
}
