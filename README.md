# 순간 기록, 시간 비교하기

이걸 만들었을 때는, 사실 아무 생각도 없었다. 그냥 Log 찍을 때 아주 가벼운, 단순한 Time Stamp와 비교 도구가 필요했다.

## 준비
```
- git
- node
- npm
```

## 설치

### npm or yarn
```
npm i oshx/elapsed-time-counter
yarn add oshx/elapsed-time-counter
```

## 설치, 안 되는 경우
### npm
```
npm i git+https://oshx@github.com/oshx/elapsed-time-counter.git
```
### yarn
```
yarn add git+https://oshx@github.com/oshx/elapsed-time-counter.git
```

## 사용법
처음 정상적으로 불러온 후에 곧 바로 POSIX 시간 기준, 시간 도장을 찍는다.

`
setStamp(): Instance
` 새로 기준 시점을 잡는다.

`
getStamp(): number` 밀리초 기준 시점 값을 반환한다.
`
compareNow(): number` 밀리초로 기준 시점과 현재의 차이를 반환한다.

## 정책
아무 생각이 없이 만들었기 때문에, 아무 생각 없이 쓰면 된다.