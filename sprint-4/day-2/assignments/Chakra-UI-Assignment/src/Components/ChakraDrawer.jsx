import {  VStack , Button, Drawer,  DrawerBody,  DrawerFooter,  DrawerHeader,  DrawerOverlay,  DrawerContent,  DrawerCloseButton, useDisclosure  } from '@chakra-ui/react'
import React from "react";

const ChakraDrawer = ({isOpen,onClose,btnRef,loginOnOpen}) => {
  return <>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        // data-cy="chakra-drawer"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chackra UI Assignment</DrawerHeader>

          <DrawerBody >
            <VStack justifyContent="space-between" height="100%" >
              <Button data-cy = "home" w="100%"  >Home</Button>
              <Button data-cy = "gallery" w="100%" >Gallery</Button>
              <Button data-cy = "login" w="100%" onClick={loginOnOpen} >Login</Button>
              <Button data-cy = "signup" w="100%" >SignUp</Button>
              <Button data-cy = "about" w="100%" >About Us</Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            Chackra UI Drawer
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  {/* Drawer should have   data-cy="chakra-drawer" */}
  </>;
};

export default ChakraDrawer;
