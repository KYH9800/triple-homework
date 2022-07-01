import { useEffect, useRef } from 'react'

import {
  SectionWrapper,
  ContentsWrapper,
  ContentsLogo,
  ContentsReview,
  AwardItems,
  AwardItemGoogle,
  AwardItemApple,
} from '../styles/SectionSt'

// parseInt(numberTarget.current[i].ariaValueMax)
// parseInt(numberTarget.current[i].innerText = num)
// numberTarget.current[idx].innerText = num
// numberTarget.current.length
// https://www.youtube.com/watch?v=pwV40r8IGWQ

// 1. useRef 활용
// 2. 함수 다 쪼개기
// 3. useEffect 안에 비동기 코드는 componentWillUnmount로 구현, useEffect(()=> {return () => todo}, [])

const Section = () => {
  let num = 0 // useState로 바꾸기
  let intervalTime = 1 // useState로 바꾸기
  const numberTarget = useRef([])

  useEffect(() => {
    const setTimer = setTimeout(() => {
      console.log('setTimeout: 2초')
    }, 2000)
    return () => clearTimeout(setTimer)
  }, [])

  // todo: intervalTime의 시간을 점차 늘리기...
  useEffect(() => {
    console.log('componentDidMount')
    let setTime = setInterval(() => {
      // todo: intervalTime++
    }, 1)
    return () => {
      console.log('componentWillUnmount')
      return clearInterval(setTime)
    }
  }, [])

  useEffect(() => {
    console.log('ComponentDidUpdate') // 리렌더링을 완료한 후 실행, 업데이트가 끝난 직후이므로, DOM관련 처리를 해도 무방
    for (let i = 0; i < numberTarget.current.length; i++) {
      counter(i) // 이게 먼저 실행
    }
  })

  function counter(idx: number) {
    const timer = setInterval(() => {
      const limitNumber = parseInt(numberTarget.current[idx].ariaValueMax)
      intervalTime += 100
      console.log(intervalTime)
      num += 1
      numberTarget.current[idx].innerText = num
      if (num > limitNumber) {
        clearInterval(timer)
        numberTarget.current[idx].innerText = limitNumber
      }
    }, intervalTime)
    return () => clearInterval(timer)
  }

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <ContentsLogo>2021년 12월 기준</ContentsLogo>
        <ContentsReview>
          <div>
            <strong>
              <span
                aria-valuemax={700}
                ref={(el) => (numberTarget.current[0] = el)}
              >
                0
              </span>
              만 명
            </strong>
            의 여행자
          </div>
          <div>
            <strong>
              <span
                aria-valuemax={100}
                ref={(el) => (numberTarget.current[1] = el)}
              >
                0
              </span>
              만 개
            </strong>
            의 여행 리뷰
          </div>
          <div>
            <strong>
              <span
                aria-valuemax={470}
                ref={(el) => (numberTarget.current[2] = el)}
              >
                0
              </span>
              만 개
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

/*
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
    const timer = setInterval(() => {
      if (triper > 685) {
        setTriperIntervalTime((time) => time + 10)
      }
      setTriper((num) => num + 1)
    }, triperIntervalTime)
    if (triper === 700) {
      return clearInterval(timer)
    } else if (triper >= 700) {
      return setTriper(700)
    }
    return () => clearInterval(timer)
  }, [triper, triperIntervalTime])

  useEffect(() => {
    const timer = setInterval(() => {
      if (reviewer > 80) {
        setReviewerIntervalTime((time) => time + 10)
      }
      setReviewer((num) => num + 1)
    }, reviewerIntervalTime)
    if (reviewer === 100) {
      return clearInterval(timer)
    } else if (reviewer >= 100) {
      return setReviewer(100)
    }
    return () => clearInterval(timer)
  }, [reviewer, reviewerIntervalTime])

  useEffect(() => {
    const timer = setInterval(() => {
      if (calendar > 455) {
        setCalendarIntervalTime((time) => time + 15)
      }
      setCalendar((num) => num + 1)
    }, calendarIntervalTime)
    if (calendar === 470) {
      return clearInterval(timer)
    } else if (calendar >= 470) {
      return setCalendar(470)
    }
    return () => clearInterval(timer)
  }, [calendar, calendarIntervalTime])

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <ContentsLogo>2021년 12월 기준</ContentsLogo>
        <ContentsReview>
          <div>
            <strong>
              <span
                aria-valuemax={700}
                // ref={(el) => (triperRef.current[0] = el)}
              >
                {triper}
              </span>
              만 명
            </strong>
            의 여행자
          </div>
          <div>
            <strong>
              <span
                aria-valuemax={100}
                // ref={(el) => (triperRef.current[1] = el)}
              >
                {reviewer}
              </span>
              만 개
            </strong>
            의 여행 리뷰
          </div>
          <div>
            <strong>
              <span
                aria-valuemax={470}
                // ref={(el) => (triperRef.current[2] = el)}
              >
                {calendar}
              </span>
              만 개
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
*/
