
function startCarousel() {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel li').length;
  const itemHeight = document.querySelector('.carousel li').clientHeight;
  let index = 0;
  let isTransitioning = false;

  setInterval(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      index++;

      if (index === totalItems) {
        // 当到达最后一行，先瞬间跳回第一行的上一行，再继续滑动
        index = 0;
        carousel.style.transition = "none"; // 取消动画，瞬间回到第一个
        carousel.style.transform = `translateY(0px)`;

        // 等待一帧再加回动画，保证视觉上无缝
        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out";
          isTransitioning = false;
        }, 50); // 延迟一点时间让浏览器完成跳转
      } else {
        carousel.style.transform = `translateY(-${index * itemHeight}px)`;
        isTransitioning = false;
      }
    }
  }, 1000); // 每1秒切换一次
}

startCarousel();
