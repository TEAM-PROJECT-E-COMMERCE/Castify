import {
  Box,
  ButtonText,
  Center,
  CloseIcon,
  Heading,
  Icon,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { useRef, useState } from "react";
import { AirbnbRating, Rating } from "react-native-ratings";

export default function AddButtonReview() {
  const [showModal, setShowModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  //   console.log(showModal);
  const ref = useRef(null);

  const handleRatingChange = (rating: number) => {
    setRatingValue(rating);
  };

  console.log(ratingValue);

  return (
    <Box>
      <Button
        px={30}
        bgColor="black"
        rounded={"$full"}
        onPress={() => setShowModal(true)}
        ref={ref}
      >
        <ButtonText>+ Add Review</ButtonText>
      </Button>

      <Center>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">Add Review</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody m={0} p={0}>
              <AirbnbRating
                defaultRating={ratingValue}
                onFinishRating={handleRatingChange}
                ratingContainerStyle={{ paddingVertical: 0, marginTop: -15 }}
                starContainerStyle={{ gap: 17 }}
              />

              <Textarea size="md" w="$64" borderWidth={0}>
                <TextareaInput placeholder="Input Message" />
              </Textarea>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                rounded={"$full"}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                // action="positive"
                bgColor="black"
                rounded={"$full"}
                borderWidth="$0"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Submit</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Box>
  );
}
