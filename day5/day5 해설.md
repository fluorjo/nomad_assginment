1. `flex-direction`과 메인 축, 교차 축
   - flex와 함께 사용되는 속성인 justify-content 와 align-items는 각각 메인 축, 교차 축 정렬을 담당하는 속성입니다. `단순히 가로, 세로라고 생각하시면 오해하기 쉽습니다.`
   - 기본적으로 flex의 하위 컨텐츠들은 메인 축에 따라 정렬됩니다.
   - 메인 축을 설정하는 속성이 바로, `flex-direction`입니다.
   - default값은 row(행)로, 메인 축(justify-content)은 가로방향이 됩니다.
   - `flex-direction: row`일 경우엔 메인 축(justify-content)이 가로, 교차 축(align-items)이 세로를 의미합니다.
   - 예시에선 내부 컨텐츠가 세로로 정렬되어있으므로, flex-direction을 `column(열)`으로 설정해야 합니다.
   - `flex-direction: column`일 경우, 메인 축(justify-content)이 세로, 교차 축(align-items)이 가로를 의미하게 됩니다.
2. [선택자 명시도](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)
   - 하나의 요소에는 여러 class를 지정할 수 있습니다.
   - css 선택자의 유형, 갯수, 순서 등에 따라 우선순위가 정해집니다.
   - 선택자의 범위가 명확할 수록 우선순위가 높습니다.
3. border
   - border 속성은 테두리에 대한 속성으로, color, style, width 세 하위 속성이 있습니다.
   - border 속성 하나에 세 가지의 하위 속성을 모두 적용시킬 수 있지만, 예시와 같이 style만 바꾸고 싶다면 `border-style` 을 사용하면 됩니다.

## 결론

- Flex에 대한 이해는 중요합니다.
- justify-content는 가로 정렬, align-items는 세로 정렬로 기억하시면 헷갈릴 수 있습니다.
- 앞서 설명드린대로 flex-direction에 따라 justify-content가 세로 정렬을 담당할 수 있기 때문입니다.
- `justify-content는 메인 축, align-items는 교차 축, flex-direction은 메인 축의 방향` 이렇게 기억하시는 게 더 좋습니다.