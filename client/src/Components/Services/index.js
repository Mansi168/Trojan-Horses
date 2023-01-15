import React from 'react'
import Icon1 from '../../images/image1.png'
import Icon2 from '../../images/image2.png'
import Icon3 from '../../images/image3.png'
import { ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon,ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>RESEARCH PAPERS</ServicesH1>
       
        <ServicesWrapper>
            <ServicesCard> 
                <ServicesIcon src={Icon1}/>
                <ServicesH2><b>Argumentative</b></ServicesH2>
                <ServicesP>In an argumentative research paper, a student both states the topic they will be exploring and immediately establishes the position they will argue regarding that topic in a thesis statement.</ServicesP>
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={Icon2}/>
                <ServicesH2><b>Analytical</b></ServicesH2>
                <ServicesP>An analytical research paper states the topic that the writer will be exploring, usually in the form of a question, initially taking a neutral stance.</ServicesP>
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={Icon3}/>
                <ServicesH2><b>Technical Blogs</b></ServicesH2>
                <ServicesP>Be the part of the amazing community and connect with them sharing view and knowledge. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services