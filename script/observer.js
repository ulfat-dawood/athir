const scrollOffset = 100;
 
const scrollElement = document.querySelector("#banner2 .img-wrapper");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  console.log('HIIIIIIII FUCL YOU ')
}
 
const hideScrollElement = () => {
  console.log('OKAAA Y BYEEE ')
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})