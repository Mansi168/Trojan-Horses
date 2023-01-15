import React from 'react'
import {Container, Icons, FormButton, FormContent, Form, FormH1, FormInput, FormLabel, FormWrap, Text } from './SignInElements';

const SignIn = () => {
  return (
    <>
     <Container>
        <FormWrap>
            <Icons to="/">Bloggy's</Icons>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' require />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' require />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password?</Text>
                </Form>
            </FormContent>
        </FormWrap>
     </Container>
    </>
  )
}

export default SignIn;