import styled from "styled-components"

export const BlogContainer=styled.div`
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
/* background:white; */
font-family: 'Merriweather';
background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvtFeXnOY9_eQyYIlFWIGy4dJwelnIYAIeQ&usqp=CAU);
background-repeat:no-repeat;
background-size:cover;

@media screen and (max-width:768px){
    height:150px;
}
@media screen and (max-width:480px){
    height:130 px;
}
`
export const BlogH1=styled.h1`
/* font-size:5rem;
color:black;
margin-bottom:64px; */
margin-bottom: 64px;
    font-size: 70px;
    line-height: 1.1;
    font-weight: 300;
    /* text-transform: uppercase; */
    color: white;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
    /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
      0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff; */
    animation: blinker 1s linear infinite;
    /* @keyframes blinker {
  50% {
    opacity: 0;
  }
} */

@media screen and (max-width:480px){
    font-size:2rem;
}`