import { useCallback, useEffect, useState } from 'react'

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
// 참고: https://velog.io/@effort_jk/setInterval-clearInterval-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%A8%EC%88%98-%EB%B0%98%EB%B3%B5-%EC%A4%91%EB%8B%A8-%EC%9E%AC%EC%8B%9C%EC%9E%91

const Section = () => {
  const [triper, setTriper] = useState<number>(0) // 700
  const [reviewer, setReviewer] = useState<number>(0) // 100
  const [calendar, setCalendar] = useState<number>(0) // 470
  const [triperIntervalTime, setTriperIntervalTime] = useState<number>(1)
  const [reviewerIntervalTime, setReviewerIntervalTime] = useState<number>(1)
  const [calendarIntervalTime, setCalendarIntervalTime] = useState<number>(1)

  useEffect(() => {
    setTimeout(() => {
      setTriper(700)
      setReviewer(100)
      setCalendar(470)
      console.log('2초')
    }, 2000)
  }, [])

  useEffect(() => {
    let timer = setInterval(() => {
      if (triper > 680) {
        setTriperIntervalTime((time) => time + 6)
      }
      setTriper((num) => num + 1)
    }, triperIntervalTime)
    if (triper === 700) {
      return clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [triper])

  useEffect(() => {
    let timer = setInterval(() => {
      if (reviewer > 80) {
        setReviewerIntervalTime((time) => time + 10)
      }
      setReviewer((num) => num + 1)
    }, reviewerIntervalTime)
    if (reviewer === 100) {
      return clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [reviewer])

  useEffect(() => {
    let timer = setInterval(() => {
      if (calendar > 455) {
        setCalendarIntervalTime((time) => time + 7)
      }
      setCalendar((num) => num + 1)
    }, calendarIntervalTime)
    if (calendar === 470) {
      return clearInterval(timer)
    }
    return () => clearInterval(timer)
  })

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
