# Triple
> 프로젝트 실행을 위해 터미널에서 아래의 명령어를 순서대로 실행해 주세요.

## git clone
```
git clone https://github.com/KYH9800/triple-homework.git
```

## move directory
```
cd front/
```

## Installation
```
npm install
```

## Start Project
```
npm run dev
```
----
# Stacks
> 사용한 기술과 선택한 이유

## next.js
해당 프로젝트에서는 SSR을 따로 구현하지는 않았지만, Next.js를 사용하는 이유는 Server Side Rendering과

이를 통한 SEO(검색 엔진 최적화)에 있습니다.

하지만 Client Side Rendering 방식으로 사용하면서 SPA의 장점도 유지가 가능하기 때문에 사용해도 무관하다

판단되어 사용했습니다.

## styled-components

styled-components의 장점으로는 몇가지가 있습니다.
- component 단위 스타일링
- 조건부 스타일링
- 확장 스타일링
- 중첩 스코프

해당 프로젝트에서는 component 단위 스타일링과 중첩 스코프 규칙을 사용하기 위해 styled-components를 적용했습니다.

## Web APIs
1. setInterval(), clearInterval()
- 숫자가 증가하는 효과를 주기 위해 사용했습니다.
- 설정한 초(ms) 마다 count를 증가시키는 코드를 실행 시킵니다.
- clearInterval()를 통해 count 종료합니다.

2. setTimeout()
- 2초 동안 count가 증가하고 종료할 때 동시에 종료되는 시각적인 효과를 위해 사용했습니다.


