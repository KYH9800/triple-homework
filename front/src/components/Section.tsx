import { useEffect, useRef, useState } from 'react'
// styled-components
import {
  SectionWrapper,
  ContentsWrapper,
  ContentsLogo,
  ContentsReview,
  AwardItems,
  AwardItemGoogle,
  AwardItemApple,
  fadeInUp,
} from '../styles/SectionSt'
// mockdata
import { database } from '../mockdata/data'

const Section = () => {
  const contentsLogoAnimation = useRef(null)
  const contentsReviewAnimation = useRef(null)
  const awardItemsAnimation = useRef(null)

  useEffect(() => {
    console.log(contentsLogoAnimation)
    setTimeout(() => {
      console.log(contentsReviewAnimation)
    }, 100)
    setTimeout(() => {
      console.log(awardItemsAnimation)
    }, 200)
  }, [])

  // 숫자 올라가는 애니매이션
  // react와 DOM API로만 구현
  // 0부터 시작, 2초 동안 증가, 동시 끝
  // 증가 속도 느려지는 효과까지 (setInterval, clearInterval)
  // 참고: https://www.youtube.com/watch?v=pwV40r8IGWQ

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <ContentsLogo ref={contentsLogoAnimation}>
          2021년 12월 기준
        </ContentsLogo>
        <ContentsReview ref={contentsReviewAnimation}>
          <div>
            <strong>
              <span>700</span>만 명
            </strong>
            의 여행자
          </div>
          <div>
            <strong>
              <span>100</span>만 개
            </strong>
            의 여행 리뷰
          </div>
          <div>
            <strong>
              <span>470</span>만 개
            </strong>
            의 여행 일정
          </div>
        </ContentsReview>
        <AwardItems ref={awardItemsAnimation}>
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
const [count, setCount] = useState<any>(0)
console.log(count)

useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(count) <= 699) {
        setCount(parseInt(count) + 1)
      } else if (count === 699) {
        clearInterval(countdown)
      }
    }, 0)
    return () => clearInterval(countdown)
  }, [count])

*/
