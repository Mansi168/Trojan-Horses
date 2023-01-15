import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
 min-height: 692px;
 position: fixed;
 bottom: 0;
 left: 0;
 right: 0;
 top: 0;
 z-index: 0;
 overflow: hidden;
 background: #1F51FF;
 background-image: url(https://img.freepik.com/free-vector/neon-lights-background-concept_52683-35551.jpg?w=900&t=st=1673767515~exp=1673768115~hmac=9199cb0456bf5479fe481c208447155f70e4032ce0e97eba295c8500290d7019);
`;

export const FormWrap = styled.div`
 height: 80%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 
 @media screen and (max-width: 400px) {
    height: 80%;
 }
 `;

export const Icons = styled(Link)`
 margin-left: 32px;
 margin-top: 40px;
 text-decoration: none;
 color: #fff;
 font-weight: 700;
 font-size: 32px;

 @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
 }
`;

export const FormContent = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 480px) {
    padding: 10px;
 } 
`;

export const Form = styled.form`
 background: #fff;
 max-width: 400px;
 height: auto;
 width: 100%;
 z-index: 1;
 display: grid;
 margin: 0 auto;
 padding: 80px 32px;
 border: 1px solid;
 border-radius: 4px;
 box-shadow: 0 1px 3px rgba(128, 128, 128, 1.0);

 @media screen and (max-width: 400px) {
    padding: 32px 32px;
 } 
`;

export const FormH1 = styled.label`
 margin-bottom: 40px;
 color: #010101;
 font-size: 25px;
 font-weight: 400;
 text-align: center;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
color: #010101;
font-size: 20px;
`;

export const FormInput = styled.input`
margin-bottom: 40px;
padding: 16px 16px;

border: 1px solid;
border-radius: 4px;
`;

export const FormButton = styled.button`
 background: #3800c0;
 padding: 16px 0;
 border: none;
 border-radius: 4px;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
`;

export const Text = styled.span`
 text-align: center;
 margin-top: 24px;
 color: #010101;
 font-size: 20px;
`;