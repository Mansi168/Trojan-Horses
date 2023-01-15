import styled from 'styled-components'
export const Contactcontainer=styled.div`
 padding:60px 0px;
 height:800px;
 display:block;
 background-image: url(/assets/img/one-yellow.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`
export const Contacth1=styled.h1`
 margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const Contactwrapper=styled.div`
 display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;