import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonText } from "@gluestack-ui/themed";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  Select,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectTrigger,
  Text,
  Icon,
  SelectPortal,
  SelectContent,
  SelectItem,
  InputField,
  Input,
  SelectDragIndicator,
  SelectBackdrop,
  ChevronDownIcon,
  ActionsheetDragIndicator,
  ActionsheetBackdrop,
  Box,
  Button,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function FilterModal() {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Box>
      <Button bgColor="#e0e0e0" rounded={"$full"} onPress={handleClose}>
        <MaterialCommunityIcons
          name="tune-vertical"
          color={"black"}
          size={20}
        />
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem>
            <Box mt={20} w={"$full"}>
              <Text fontWeight="bold" fontSize={24} mb={10}>
                Category
              </Text>

              <Select>
                <SelectTrigger variant="underlined" size="md">
                  <SelectInput placeholder="Select option" />
                  <SelectIcon style={{ marginRight: 3 }}>
                    <Icon as={ChevronDownIcon} />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="UX Research" value="ux" />
                    <SelectItem label="Web Development" value="web" />
                    <SelectItem
                      label="Cross Platform Development Process"
                      value="cross-platform"
                    />
                    <SelectItem
                      label="UI Designing"
                      value="ui"
                      isDisabled={true}
                    />
                    <SelectItem label="Backend Development" value="backend" />
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Text fontWeight="bold" fontSize={24} mb={10} mt={30}>
                Price
              </Text>

              <Text mt={10}>Minimum</Text>
              <Input variant="underlined" size="md">
                <InputField placeholder="Rp." />
              </Input>

              <Text mt={20}>Maximum</Text>
              <Input variant="underlined" size="md">
                <InputField placeholder="Rp." />
              </Input>

              <Button mt={50} rounded={50} bgColor="black">
                <ButtonText fontWeight="bold">Set Default</ButtonText>
              </Button>
            </Box>
          </ActionsheetItem>
          {/* <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem> */}
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
}
