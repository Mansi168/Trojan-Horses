import styled from 'styled-components'

export const AboutContainer = styled.div`
    color: #fff;
   
  
    background-image :url(https://static.vecteezy.com/system/resources/thumbnails/003/123/185/small/saber-neon-glow-color-flowing-rectangle-background-free-photo.jpg);
    background-repeat:no-repeat;
    background-size:cover;

    @media screen and (max-width: 768px){
        padding: 100px 0;
       
    }
`
export const AboutH1=styled.h1`

margin-bottom: 60px;
text-align:center;
    font-size: 70px;
    line-height: 1.1;
    font-weight: 300;
    /* text-transform: uppercase; */
    color: #ff00fe;
    text-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
    /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
      0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff; */
   
`
export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1300px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        

    }
`;
export const Column1 = styled.div`
    margin-bottom: 730px;
    padding: 0 15px;
    grid-area: col1;
`;
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;
export const Column2 = styled.div`
    margin-bottom: 730px;
    padding: 0 15px;
    grid-area: col2;
`;
export const Column4 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const Column5 = styled.div`
    margin-top: 794px;
    padding: 0 15px;
    grid-area: col1;
`;
export const Column6 = styled.div`
    margin-top: 794px;
    padding: 0 15px;
    grid-area: col2;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:white;
    text-align:center; 
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const SubTitle = styled.p`
    max-width: 450px;
    margin-bottom: 35px;
    font-size: 20px;
    font-weight:70px;
    line-height: 27px;
    color: white; 
    text-align:center;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    
`
export  const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 768px){
       display:none;
    }
`