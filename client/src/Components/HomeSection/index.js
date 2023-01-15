import React, {useState} from 'react'
import Video from '../../videos/video1.mp4'
import { HomeContainer, HomeBg, HomeContent,VideoBg, HomeBtnWrapper,HomeH1, HomeP, ArrowForward, ArrowRight } from './HomeElements'
import {Button} from '../ButtonElements'

const HomeSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HomeContainer id="home">
        <HomeBg>
            <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/> 
        </HomeBg>
        <HomeContent>
            <HomeH1>Write your first Blog here!</HomeH1>
            <HomeP>
               <b>Join now to connect with your peers and share your blogs and plethora of experiences</b> 
            </HomeP>
            <HomeBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HomeBtnWrapper>
        </HomeContent>
    </HomeContainer>
  )
}

export default HomeSection