import { Flex, Text, Spacer, Button, Divider, useDisclosure, IconButton  } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react';
import ChakraDrawer from './ChakraDrawer';
import ChakraModal from './ChakraModal';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure() ;
  const btnRef = React.useRef()

    //  for login modal 
  const { isOpen:loginIsOpen, onOpen:loginOnOpen, onClose:loginOnClose } = useDisclosure() ;
  const initialRef = React.useRef(null) ;
  const finalRef = React.useRef(null) ;
  return ( 
    <>
      <Flex color='black'  data-cy="navbar" justifyContent={'space-between'}>
        <Text data-cy="logo" fontSize="2xl" px={3}>Chakra UI</Text>

        <IconButton
          colorScheme='blue'
          data-cy="drawer-open-btn" 
          icon={<HamburgerIcon />}
          onClick={onOpen}
          ref={btnRef} 
        />

        <ChakraDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} loginOnOpen={loginOnOpen} />
        <ChakraModal isOpen={loginIsOpen} onOpen={loginOnOpen} onClose={loginOnClose} finalRef={finalRef} initialRef={initialRef} />
      </Flex>

      <Divider  borderWidth="1px" borderColor="black"/>
      
      {/* data-cy="navbar" - Flex  */}
      {/* data-cy="logo" - Logo  */}
      {/* data-cy="drawer-open-btn" - Drawer open button */}
    </>
  );
};

export default Navbar;
