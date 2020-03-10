# 프로젝트 세팅
* React 사용  
* css 로 스타일, 애니메이션 구현  
* Responsive UI 는 css 를 사용해 고려  
* 서버는 npm 에 json-server 외부 라이브러리 로 mock 서버를 사용  
* API 요청은 axios 외부 라이브러리를 사용하여 구현함 
* Typescript 를 사용함
* UI 테스트(story book, selenium 등)와 통합테스트는 구현되있지 않음

# 프로젝트 구조
* api - 서버 통신, 통신 후 응답으로 받을 타입이 정의 되있습니다.
* assets - 프로젝트에서 쓰일 정적인 이미지가 들어있습니다.
* constant - 프로젝트에 쓰일 상수들이 정의되 있습니다.
* components/screen - 보여줄 페이지와 페이지에 의존된 컴포넌트가 정의 되어있습니다.
* components/atom - 이미지, 라벨 등 가장 작은 단위에 컴포넌트가 정의 되있습니다.
* components/molecule - 하나의 기능을 가진 컴포넌트가 정의 되있습니다.
* components/organism - 하나 이상의 기능을 가진 컴포넌트가 정의 되있습니다.

# 프로젝트 실행법
1. npm 을 설치되있는지 확인합니다.
1-2. npm 이 없다면 설치합니다.
2. 프로젝트를 엽니다.
3. IDE 터미널에서 npm install 명령어를 실행합니다.
4. IDE 터미널에서 npm run server-start 를 실행합니다. 
5. IDE 터미널에서 npm run start 를 실행합니다.
