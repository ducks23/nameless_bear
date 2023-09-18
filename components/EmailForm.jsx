import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
  Center,
  Textarea,
} from "@chakra-ui/react";

export default function EmailForm() {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    console.log(values);
    emailjs
      .send("service_jc1unvt", "template_pnzl32f", values, "K2i9c6y8AURAqNsTW")
      .then(
        () => {
          toast({
            title: "Email Sent",
            description: "Thank you, we will get back to you soon.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          emailjs
            .send(
              "service_jc1unvt",
              "template_qdwb95f",
              values,
              "K2i9c6y8AURAqNsTW"
            )
            .then((err) => {
              console.log(err);
            });
        },
        (err) => {
          console.log(err);
          toast({
            title: "Not Sent",
            description: "Please reach out with email above or over phone",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Center>
        <FormControl
          p={2}
          w={{
            base: 375,
            md: 400,
            xl: 600,
          }}
          isInvalid={errors.name}
        >
          <Input
            id="name"
            borderColor="blue.400"
            placeholder="Name"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <Input
            mt={2}
            id="email"
            borderColor="blue.400"
            placeholder="Email"
            {...register("email", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <Input
            mt={2}
            id="subject"
            borderColor="blue.400"
            placeholder="Phone"
            {...register("phone", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <Textarea
            mt={2}
            id="message"
            borderColor="blue.400"
            placeholder="Message"
            {...register("message", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
      </Center>
      <Button
        className="z-10"
        mt={4}
        color="white"
        bg="purple.500"
        isLoading={isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
