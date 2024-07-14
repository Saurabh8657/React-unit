import { useToast , Button, FormControl, FormLabel, Modal, Input,  ModalOverlay,  ModalContent,  ModalHeader,  ModalFooter,  ModalBody,  ModalCloseButton, } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
const ChakraModal = ({  isOpen, onOpen,onClose, finalRef, initialRef }) => {
  const [ userData, setUserData ] = useState({email:"",password:""}) ;
  const toast = useToast() ;
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      let response = await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(userData) 
      }) ;
      let data = await response.json() ;
      console.log(data) ;
      if(data.token){
        toast({
          title: 'Login Successfull',
          description: "We've successfully loged into your accout.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }else{
        toast({
          title: 'Login Failed',
          description: "Sorry try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      }
    }
    catch(error){
      toast({
        title: 'Login Failed',
        description: "Sorry try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    
  }

  return (
    <>
     <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        // data-cy="chakra-modal"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input ref={initialRef} 
                  type="email"
                  placeholder='enter email ' 
                  value={userData.email} 
                  onChange={(e)=>setUserData(prev=> {return {...prev,email:e.target.value}})} 
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input 
                  type="email"
                  placeholder='password'
                  value={userData.password} 
                  onChange={(e)=>setUserData(prev=> {return {...prev,password:e.target.value}})} 
                />
              </FormControl>
            

          <ModalFooter>
            <Button colorScheme='blue' mr={3} w="100%" type="submit" >
              Login
            </Button>
          </ModalFooter>
          </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Modal Overlay should have data-cy="chakra-modal"  */}
    </>
  );
};

export default ChakraModal;
