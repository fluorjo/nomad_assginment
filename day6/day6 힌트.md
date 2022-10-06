1. Flex를 썼는데, 예시처럼 2x2로 안나오고 한줄로 나오는 경우
   - flex를 선언하면 하위 컨텐츠들의 width가 아무리 커도 강제로 한줄로 배치됩니다.
   - 하지만 어떤 속성을 선언해준다면, 부모의 width를 초과하는 컨텐츠는 다음 행에 정렬됩니다.
2. [Pseudo Selector 또는 Pseudo Class](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)
   - 지난 번 챌린지처럼 새로운 class를 만들어 특정 요소의 배경색을 설정하는 방법으로도 구현할 수 있습니다.
   - 하지만 특정 Pseudo Selector 를 이용한다면 새로운 class를 만들지 않고도 구현가능합니다.
   - `몇 번째 요소는 빨간색, 몇 번째 요소는 노란색` 이런 식으로 말입니다.
3. [position](https://developer.mozilla.org/ko/docs/Web/CSS/position) 속성 사용하기
   - 색상이름과 색상코드가 적힌 박스를 보시면, 상단으로부터 일정 길이만큼 내려와 있습니다.
   - padding이나 margin을 이용해 똑같이 구현할 수 있습니다만, position 속성을 이용해 구현해주시기 바랍니다.
   - `relative`와 `absolute` 의 관계에 대해 알아보세요.