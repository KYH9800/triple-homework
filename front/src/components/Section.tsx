import React from 'react';
// styled-components
import { SectionWrapper, Wrapper } from '../styles/SectionSt';

const Section = (): any => {
  return (
    <SectionWrapper>
      <Wrapper>Welcome to Next.js!</Wrapper>
    </SectionWrapper>
  );
};

export default Section;

// 문구, 이미지의 레이아웃과 스타일은 트리플 홈페이지와 동일해야 합니다.
// 단, 반응형 레이아웃은 고려하지 않습니다. 최소 화면 폭을 1200px로 고정합니다.

// React를 이용하여 개발합니다. 그 외의 개발 스택은 자유롭게 구성합니다.

// Google Chrome 최신 버전에서 동작해야 합니다.

// README.md를 작성합니다. 아래 내용을 반드시 포함하되, 이외 내용은 자유롭게
// 추가할 수 있습니다.
// ○ 프로젝트 실행 방법
// ○ 사용한 기술과 선택한 이유

// 린팅/포매팅 셋업 시 titicacadev/eslint-config-triple 을 적용해주세요.
// https://github.com/titicacadev/eslint-config-triple
