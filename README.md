# Taeifolio

- NextJS, scss, gsap, notion-client
- 포트폴리오 페이지를 취향대로 제작하면서 관심있던 애니메이션 효과나 gsap, notion-client를 활용해 본 페이지
- 현재 배포중단


---

- 당시 노션을 활용한 공지사항이나 약관 업데이트가 FE에서 화제여서 시도해보았다.
- 불러온 데이터를 정제해서 글자로 출력하는 것 까지하고 b태그 같은 장식 태그를 동일하게 적용하는 건 실패했었다.
- 문자열만 반환하는 코드는 좀 간단했다.
- 노션 데이터로 썼던 기록 페이지를 비공개로 전환해서 페이지는 없다.

```
 const renderData = await getRenderData({ params });
  const textArr = Object.values(renderData.block)
    .map((block) => block.value.properties)
    .filter((title) => !!title)
    .map((title) => title.title)
    .flat()
    .map((textItem) => textItem[0])
    .flat();

```

<img width="1920" height="2084" alt="screencapture-localhost-3000-2025-09-15-01_34_18" src="https://github.com/user-attachments/assets/089c6989-f1b3-4916-a630-b0a93d6f1a49" />
<img width="1920" height="1405" alt="screencapture-localhost-3000-project-2025-09-15-01_36_59" src="https://github.com/user-attachments/assets/f5c875e5-6706-4da9-8d70-06d0f40436a8" />
<img width="1920" height="1087" alt="screencapture-localhost-3000-thanku-2025-09-15-01_34_46" src="https://github.com/user-attachments/assets/cb5033ce-3520-4100-a3ab-edfe7951003f" />
