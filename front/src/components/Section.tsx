// styled-components
import {
  SectionWrapper,
  ContentsWrapper,
  ContentsLogo,
  ContentsReview,
  AwardItems,
  AwardItemGoogle,
  AwardItemApple,
} from '../styles/SectionSt'
// mockdata
import { database } from '../mockdata/data'

const Section = () => {
  console.log(database.triper.length)
  console.log(database.review.length)
  console.log(database.calendar.length)

  const triperNum = (num: number) => {
    if (num > 999) {
      return (
        <>
          <strong>
            <span>{num}</span> 만 명
          </strong>
          의 여행자
        </>
      )
    }
  }

  const reviewerNum = (num: number) => {
    if (num > 9999) {
      return (
        <>
          <strong>
            <span>{num}</span>만 개
          </strong>
          의 여행 리뷰
        </>
      )
    }
  }

  const calendarNum = (num: number) => {
    if (num > 9999) {
      return (
        <>
          <strong>
            <span>{num}</span>만 개
          </strong>
          의 여행 일정
        </>
      )
    }
  }

  function numberToKorea(number: number) {
    // todo: 숫자 단위를 한글로 자르기
  }

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <ContentsLogo>2021년 12월 기준</ContentsLogo>
        <ContentsReview>
          <div>{triperNum(database.triper.length)}</div>
          <div>{reviewerNum(database.review.length)}</div>
          <div>{calendarNum(database.calendar.length)}</div>
        </ContentsReview>
        <AwardItems>
          <AwardItemGoogle>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardItemGoogle>
          <AwardItemApple>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardItemApple>
        </AwardItems>
      </ContentsWrapper>
    </SectionWrapper>
  )
}

export default Section
