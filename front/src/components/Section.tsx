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

const Section = () => {
  const [triper, setTriper] = useState<number>(700)
  const [reviewer, setReviewer] = useState<number>(100)
  const [calendar, setcCalendar] = useState<number>(470)

  const setTimer = useCallback(
    (timer): void => {
      setTimeout(() => {
        setTriper(700)
        setReviewer(100)
        setcCalendar(470)
        clearInterval(timer)
      }, 2000)
    },
    [setTriper, setReviewer, setcCalendar, clearInterval],
  )

  const triperTimer = useCallback((number: number): void => {
    let num = 0
    const timer = setInterval((): void => {
      num += 6
      if (num > 680) {
        clearInterval(timer)
        const slowTimer = setInterval((): void => {
          num += 1
          setTriper(num)
          if (num > 700) {
            num = 700
            setTriper(num)
            clearInterval(slowTimer)
          }
        }, 78)
        setTimer(slowTimer)
      } else if (num >= number) {
        setTriper(number)
        clearInterval(timer)
      }
      return setTriper(num)
    }, 7)
  }, [])

  const reviewerTimer = useCallback((number: number): void => {
    let num = 0
    const timer = setInterval(() => {
      num += 6
      if (num > 89) {
        clearInterval(timer)
        const slowTimer = setInterval((): void => {
          num += 1
          setReviewer(num)
          if (num > 100) {
            num = 100
            setReviewer(num)
            clearInterval(slowTimer)
          }
        }, 100)
        setTimer(slowTimer)
      } else if (num >= number) {
        num = 100
        setReviewer(number)
        clearInterval(timer)
      }
      return setReviewer(num)
    }, 60)
  }, [])

  const calendarTimer = useCallback((number: number): void => {
    let num = 0
    const timer = setInterval(() => {
      num += 6
      if (num > 460) {
        clearInterval(timer)
        const slowTimer = setInterval((): void => {
          num += 1
          setcCalendar(num)
          if (num > 470) {
            num = 470
            setcCalendar(num)
            clearInterval(slowTimer)
          }
        }, 100)
        setTimer(slowTimer)
      } else if (num >= number) {
        num = 470
        setcCalendar(470)
        clearInterval(timer)
      }
      return setcCalendar(num)
    }, 15)
  }, [])

  useEffect(() => {
    triperTimer(triper)
    reviewerTimer(reviewer)
    calendarTimer(calendar)
  }, [])

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
