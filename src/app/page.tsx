import { HStack,
   Link as ChakraLink,
    Text, Icon, Button, VStack, Image as ChakraImage,
    Heading,
    Flex,
    CardRoot,
    CardBody,
    CardFooter} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image"
import { LuArrowRight, LuCar, LuClock, LuClock1, LuSparkles, LuStar } from "react-icons/lu";
import heroCar from "../../public/assets/hero-car.jpg"
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Tag } from "@/components/ui/tag";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "@/components/home/card";

export default function Home() {
  return (
    <>
      <HStack as="header" position={"fixed"} left={0} right={0} top={0} zIndex={50} bg="blackAlpha.800">

        <HStack as="nav" justify={"space-between"} px={8} py={4} w="full" alignItems={"center"}>
          <ChakraLink colorPalette={"yellow"} asChild alignItems={"center"}>
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
                <Text>Serviços</Text>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/agendar">
                <Text>Agendar</Text>
              </NextLink>
            </ChakraLink>
            
            <Button variant="outline" borderColor="white" _hover={{bg: "white", color: "black"}} rounded={"xl"}>Acessar</Button>
          </HStack>
          
        </HStack>

      </HStack>

      <VStack as="main">
        
        <VStack 
          as="section" 
          position={"relative"}
          w="100vw" 
          h="100vh" 
          align={"start"} 
          justifyContent={"center"}
        >
          <ChakraImage zIndex={0} position={"absolute"} w="100vw" h="100vh" asChild
          >
            <NextImage src={heroCar} alt="AutoShine"/>
          </ChakraImage>

          <Flex position={"absolute"} zIndex={1} w="100vw" h="100vh" bgColor={"blackAlpha.500/90"}/>

          <VStack zIndex={2} maxW="2xl" align="start" position={"relative"} px={6}>
            <Tag fontWeight={"medium"} h="6" rounded={"xl"} startElement={<LuStar/>}>Excelencia em Estética Automotiva</Tag>
            <Heading 
              as="h1" 
              fontSize="7xl" 
              fontWeight={"bold"}
              lineHeight="shorter"
              letterSpacing="tight"
              mb="6"
            >
              Seu carro merece o <Text as="span" color="yellow.400" fontWeight={"bolder"}>melhor</Text> cuidado
            </Heading>
            <Text maxW="lg" fontSize="lg" mb={6}>
              Transformamos seu veículo com servíços premium de estética automotiva.
              Agende online e garanta o brilho que seu carro merece.
            </Text>
            
            <HStack >
              <Button colorPalette={"yellow"} rounded={"xl"}> <LuClock/> Agendar Agora</Button>
              <Button rounded="xl" > <LuArrowRight/> Ver Serviços</Button>
            </HStack>

          </VStack>
        </VStack>

        <VStack as="section" py={24} gap={16}>
          <VStack gap={4}>
            <Heading as="h2" fontWeight={"bold"} fontSize="4xl">Nossos Serviços</Heading>
            <Text maxW={"xl"} textAlign={"center"} fontSize={"lg"}>Oferecemos os melhores serviços de estética automotiva, para manter seu veículo impecável</Text>
          </VStack>

          <HStack gap={8}>
            <Card
              icon={<LuSparkles color="black"/>}
              title="Polimento Premium"
              description="Restauração Completa do brilho original da pintura com técnicas profissionais"
              textFooter="R$1500,00"
            />
            <Card
              icon={<LuCar color="black"/>}
              title="Vitrificação"
              description="Proteção cerâmica de longa duração que mantém seu carro impecável"
              textFooter="R$800,00"
            />
            <Card
              icon={<LuStar color="black"/>}
              title="Lavagem Detalhada"
              description="Limpeza profunda de bancos, carpetes e painéis com"
              textFooter="R$300,00"
            />
            <Card
              icon={<LuStar color="black"/>}
              title="Higienização Interna"
              description="Limpeza profunda de bancos, carpetes e painéis com produtos de alta qualidade"
              textFooter="R$300,00"
            />
          </HStack>

          <Button colorPalette={"yellow"} rounded="xl">Agendar Serviço <LuArrowRight/></Button>
        </VStack>

      </VStack>
      <VStack as="footer" borderTopWidth={1} py={12}>
        <ChakraLink colorPalette={"yellow"} alignItems={"center"} asChild>
            <NextLink href="">
              <Icon height={7} width={7}>
                <LuCar/>
              </Icon>
              <Text fontSize="xl" fontWeight={"bold"}>AutoShine</Text>
            </NextLink>
          </ChakraLink>
          <Text fontSize={"sm"} color="whiteAlpha.700">@ 2026 AutoShine Estética Automobilística. Todos os direitos reservados.</Text>
      </VStack>
    </>
  );
}
