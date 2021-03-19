import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import img1 from '../../../images/empty-image.png';
import img2 from '../../../images/prototype.png';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 300px;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed orange;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  
  ${({ justifyContent }) => (css`
    justify-content: ${justifyContent};
  `)}
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 500%;
  flex-shrink: 0;
  transition: all 0.5s;
  justify-content: flex-end;
  
  ${({ transform, transition }) => (
    css`
      transform: translate(${transform}%);
      transition: ${transition};
  `)};
`;

const Section = styled.section`
 flex: 1 0 20%;
 width: 20%;
 display: flex;
 justify-content: center;
`;

const Arrow = css`
  position: absolute;
  top: 10px;
`;

const ArrowLeft = styled.span`
  ${Arrow};
  left: 10px;
`;

const ArrowRight = styled.span`
  ${Arrow};
  right: 10px;
`;

const Image = styled.img`
  flex: inherit;
`;

const RandingPage = () => {
    const [translate, setTranslate] = useState(0);
    const [transition, setTransition] = useState('');
    const [justifyContent, setJustifyContent] = useState('');
    const [direction, setDirection] = useState(0);

    const slider = useRef(null);

    const ClickBtn = (arrowDirection) => {

        if (arrowDirection === 'left' ) {
            if (direction === -1) {
                slider.current.appendChild(slider.current.firstElementChild);
            }
            setDirection(1);
            setJustifyContent('flex-end');
            setTranslate(20);
        } else {
            if (direction === 1) {
                slider.current.prepend(slider.current.lastElementChild);
            }
            setDirection(-1);
            setJustifyContent('flex-start');
            setTranslate(-20);
        }
    }

    const onTransitionEnd = () => {

        if (direction === 1) {
            slider.current.prepend(slider.current.lastElementChild);
        } else {
            slider.current.appendChild(slider.current.firstElementChild);
        }

        setTransition('none');
        setTranslate(0);
        setTimeout(() => {
            setTransition('all 0.5s');
        });
    }

    return (
        <div style={{ maxWidth: '700px', margin: '0 auto'}}>
            <Container>
                <Carousel justifyContent={justifyContent}>
                    <Slider onTransitionEnd={onTransitionEnd} transform={translate} transition={transition} ref={slider}>
                        <Section><Image src={img1} /></Section>
                        <Section><Image src={img2} /></Section>
                        <Section>section 3</Section>
                        <Section>section 4</Section>
                        <Section>section 5</Section>
                    </Slider>
                    <div>
                        <ArrowLeft onClick={() => ClickBtn('left')}>prev</ArrowLeft>
                        <ArrowRight onClick={() => ClickBtn('right')}>next</ArrowRight>
                    </div>
                </Carousel>
            </Container>
        </div>
    );
};

export default RandingPage;