# Triple
### 아래의 링크로 프로젝트를 확인 할 수 있습니다. (배포: vercel)

https://triple-homework-i2n6jvafj-ko7452.vercel.app/


## git clone
> 프로젝트 실행을 위해 터미널에서 아래의 명령어를 순서대로 실행해 주세요.
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
> 사용한 기술과 이유를 설명합니다.

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

---
## React Hooks
프로젝트에서 state 값과 react의 여러 기능을 사용할 수 있으며 ***무엇보다 함수형으로 컴포넌트를 관리하고자 사용했습니다.***

## useEffect

React의 라이프 사이클 중에서 `componentDidMount`, `componentWillUnmount`를 구현하기 위해

Effect Hook 사용하여 함수 컴포넌트에서 side effect를 수행하기 위한 목적으로 사용했습니다.

`componentDidMount`: 이 메서드는 컴포넌트를 만들고 첫 렌더링을 마친 후 실행됩니다.

`componentWillUnmount`: 이 메서드는 컴포넌트를 DOM에서 제거할 때 실행합니다.

```js
const App = () => {
    useEffect(() => {
        // componentDidMount
        return () => {
          // componentWillUnmount
        }
    }, []);
}
```

# refactoring
> 구현 후 요구사항에 더욱 부합하기 위해 refactoring

### 1. React Hooks: useRef (in progress...)
> 특정 DOM을 선택하여 조금 더 javascript 답게 사용하고자 합나디.

```js
let num = 0 // useState로 바꾸기
  let intervalTime = 1 // useState로 바꾸기
  const numberTarget = useRef([])

  useEffect(() => {
    let setTimer = setTimeout(() => {
      console.log('2초')
    }, 2000)
    return () => clearTimeout(setTimer)
  }, [])

  useEffect(() => {
    console.log('ComponentDidUpdate')
    for (let i = 0; i < numberTarget.current.length; i++) {
      counter(i)
    }
  }) // 라이프사이클 이해 -> 적용

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
```

### 2. window.requestAnimationFrame()
> CSS 성능 향상을 위해 적용합니다.

콜백의 수는 보통 1초에 60회지만, 일반적으로 대부분의 브라우저에서는 W3C 권장사항에 따라 그 수가 디스플레이 주사율과 일치하게됩니다.

대부분의 최신 브라우저에서는 성능과 배터리 수명 향상을 위해 `requestAnimationFrame()` 호출은 백그라운드 탭이나

hidden <iframe>에서 실행이 중단됩니다. (출처: MDN)

### 3. optimization
1. 모든 함수를 나눠서 작성합니다.
2. useEffect 안에 비동기 코드를 적용했으면 `componentWillUnmount`를 useEffect로 구현합니다.
