import { useEffect, useState } from 'react'

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

// 숫자 올라가는 애니매이션
// react와 DOM API로만 구현
// 0부터 시작, 2초 동안 증가, 동시 끝
// 증가 속도 느려지는 효과까지 (setInterval, clearInterval)
// 참고: https://www.youtube.com/watch?v=pwV40r8IGWQ

const Section = () => {
  const [triper, setTriper] = useState<number>(700)
  const [reviewer, setReviewer] = useState<number>(100)
  const [calendar, setcCalendar] = useState<number>(470)

  useEffect(() => {
    triperTimer(triper)
    reviewerTimer(reviewer)
    calendarTimer(calendar)
  }, [])

  function triperTimer(number: number) {
    let num: number = 0
    let intervalTime: number = 10
    let timer = setInterval(() => {
      num += 6
      if (num >= number) {
        num = 700
        setTriper(number)
        clearInterval(timer)
      }
      return setTriper(num)
    }, intervalTime)
  }

  function reviewerTimer(number: number) {
    let num: number = 0
    let intervalTime: number = 63
    let timer = setInterval(() => {
      num += 6
      if (num >= number) {
        num = 100
        setReviewer(number)
        clearInterval(timer)
      }
      return setReviewer(num)
    }, intervalTime)
  }

  function calendarTimer(number: number) {
    let num: number = 0
    let intervalTime: number = 14
    let timer = setInterval(() => {
      num += 6
      if (num >= number) {
        num = 470
        setcCalendar(470)
        clearInterval(timer)
      }
      return setcCalendar(num)
    }, intervalTime)
  }

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <ContentsLogo>2021년 12월 기준</ContentsLogo>
        <ContentsReview>
          <div>
            <strong>
              <span>{triper}</span>만 명
            </strong>
            의 여행자
          </div>
          <div>
            <strong>
              <span>{reviewer}</span>만 개
            </strong>
            의 여행 리뷰
          </div>
          <div>
            <strong>
              <span>{calendar}</span>만 개
            </strong>
            의 여행 일정
          </div>
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
