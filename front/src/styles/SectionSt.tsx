// styled-components
import styled, { keyframes } from 'styled-components'

// keyframes
const fadeInUp = keyframes`
  0% {
      opacity:0;
      transform: translate3d(0, 8%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`

const awardItemsFadeInUp = keyframes`
  0% {
      opacity:0;
      transform: translate3d(0, 40%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`

// styled variable
export const SectionWrapper = styled.section`
  min-width: 1200px;
  height: auto;
  background-color: rgb(255 255 255);
`

export const ContentsWrapper = styled.div`
  position: relative;
  margin: 0px auto;
  width: 1040px;
  height: auto;
`

export const ContentsLogo = styled.div`
  // animation keyframes
  animation: ${fadeInUp};
  animation-duration: 700ms;
  animation-delay: 0ms;
  position: absolute;
  top: 150px;
  background-image: url(/images/triple2x.png);
  background-repeat: no-repeat;
  background-size: 400px 338px;
  width: 400px;
  height: 350px;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
`

export const ContentsReview = styled.div`
  // animation keyframes
  animation: ${fadeInUp};
  animation-duration: 700ms;
  animation-delay: 100ms;
  position: relative;
  margin-left: 623px;
  padding-top: 147px;
  color: rgb(58, 58, 58);
  font-size: 33px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  letter-spacing: 0px;
  div {
    margin-bottom: 15px;
  }
`

export const AwardItems = styled.div`
  // animation keyframes
  animation: ${awardItemsFadeInUp};
  animation-duration: 700ms;
  animation-delay: 200ms;
  position: relative;
  margin: 33px 0px 140px 623px;
  display: inline-flex;
  div {
    display: inline-block;
    background-size: 54px 54px;
    background-position: left top;
    background-repeat: no-repeat;
    padding: 5px 0px 5px 62px;
    /* font */
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: rgba(58, 58, 58, 0.8);
  }
`

export const AwardItemGoogle = styled.div`
  margin-right: 39px;
  background-image: url(/images/play-store2x.png);
`

export const AwardItemApple = styled.div`
  background-image: url(/images/badge-apple4x.png);
`
