import { HStack,
   Link as ChakraLink,
    Text, Icon, Button, VStack, Image as ChakraImage } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image"
import { LuCar } from "react-icons/lu";
import heroCar from "../../public/assets/hero-car.jpg"

export default function Home() {
  return (
    <>
      <HStack as="header" position={"fixed"} left={0} right={0} top={0} zIndex={50} bg="whiteAlpha.500">
        <HStack as="nav" justify={"space-between"} px={8} py={4} w="full" alignItems={"center"}>
          <ChakraLink asChild alignItems={"center"}>
            <NextLink href="">
              <Icon height={7} width={7}>
                <LuCar/>
              </Icon>
              <Text fontSize="xl" fontWeight={"bold"}>AutoShine</Text>
            </NextLink>
          </ChakraLink>
        
          <HStack alignItems={"center"} gap={8}>
            <ChakraLink asChild>
              <NextLink href="/">
                <Text>Início</Text>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="#servicos">
                <Text>Servíços</Text>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/agendar">
                <Text>Agendar</Text>
              </NextLink>
            </ChakraLink>
            <Button rounded={"xl"}>Acessar</Button>
          </HStack>
        </HStack>
      </HStack>
      <VStack as="main">
        <VStack as="section">
          <ChakraImage w="100vw" h="100vh" asChild>
            <NextImage src={heroCar} alt="AutoShine"/>
          </ChakraImage>
        </VStack>
      </VStack>
    </>
  );
}
