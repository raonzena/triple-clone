# Triple Assignment

## 프로젝트 설치 및 실행

1. yarn install 명령어를 입력하여 패키지 설치 (사용 노트 버전: v16.15.0)
2. yarn dev 명령어를 입력하여 프로젝트 실행

## 사용한 기술과 선택한 이유

- React : 사용 기술 필수 스택에 포함
- Typescript : 협업 시 거의 필수인 도구라고 생각되어 추가했습니다. 코드를 짠 사람이 아닌 사람이 보았을 때 코드를 훨씬 이해하기 편하게 만들어 줍니다.
- SCSS : 간단한 프로젝트이기 때문에 css-in-js를 사용하는 것보다 퍼포먼스가 더 빠를 것이라 생각해서 사용했습니다.
- vite : 처음에 cra로 프로젝트 생성해 보았는데, https://github.com/titicacadev/eslint-config-triple/issues/189 해당 이슈의 버그가 생기는 것을 알게 되었습니다. 대안으로 create vite를 고려하여 사용해 보았는데 cra와 달리 번들링을 생략하여 개발 서버 구동이 빨라서 사용하기 좋았습니다.
