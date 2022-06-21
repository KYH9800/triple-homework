import styled from 'styled-components'

export const SectionWrapper: any = styled.section`
  min-width: 1200px;
  height: auto;
  background-color: rgb(255 255 255);
`

export const ContentsWrapper: any = styled.div`
  position: relative;
  margin: 0px auto;
  width: 1040px;
  height: auto;
`

export const ContentsLogo: any = styled.div`
  position: absolute;
  top: 150px;
  background-image: url(/images/triple2x.png);
  background-repeat: no-repeat;
  background-size: 400px 338px;
  width: 400px;
  height: 50px;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
`

export const ContentsReview: any = styled.div`
  /* position: absolute;
  top: 143px;
  right: 148px; */
  margin-left: 623px;
  padding-top: 150px;
  color: rgb(58, 58, 58);
  font-size: 33px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  letter-spacing: 0px;
  div {
    margin-bottom: 15px;
  }
`

export const AwardItems: any = styled.div`
  /* position: absolute;
  top: 346px;
  right: -23px; */
  margin: 50px 0px 140px 623px;
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

export const AwardItemGoogle: any = styled.div`
  margin-right: 39px;
  background-image: url(/images/play-store2x.png);
`

export const AwardItemApple: any = styled.div`
  background-image: url(/images/badge-apple4x.png);
`
