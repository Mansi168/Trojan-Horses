import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HomeContainer = styled.div`
    /* background: #0c0c0c; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 730px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
   background-image:url(https://i.pinimg.com/564x/8b/a7/e6/8ba7e64fed3082fc86a5bff74ae6a378.jpg);
   background-repeat:no-repeat;
   background-size:cover;
`

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100vh;
//     -o-object-fit: cover;
//     object-fit: cover;
   
// `

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 6px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeH1 = styled.h1`
    /* color: #fff;
    font-size: 48px;
    text-align: center; */
    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HomeP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`