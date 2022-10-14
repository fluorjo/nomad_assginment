
// 1. ResizeObserver 객체 만들기
const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
    const {width, height} = entry.contentRect;
 
    result.innerText = `너비: ${width} 높이: ${height}`;
    let a=width
    b=a-a

    console.log('a:',a);
    console.log('b:',b);
  }
});



// 2. 감지할 요소 추가하기
observer.observe(background);

