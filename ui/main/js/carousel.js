
function removeChildsBySelector(selector) {
  var ul = document.querySelector(selector);
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function appendChildsOnElement(selector, data) {
  var ul = document.querySelector(selector);

  data.forEach(obj => {
    var li = document.createElement('li');
    li.textContent = obj.name;

    obj.value.forEach(dat => {
      var span = document.createElement('span');
      span.textContent = dat;
      li.appendChild(span);
    })

    ul.appendChild(li);
  });
}

function setOption(data) {
  removeChildsBySelector('.automatic-carousel');
  appendChildsOnElement('.automatic-carousel', data)
}

// 自动化项目滚动
function startAutoCarousel() {
  const carousel = document.querySelector('.automatic-carousel');
  const totalItems = document.querySelectorAll('.automatic-carousel li').length;
  const itemHeight = document.querySelector('.automatic-carousel li').clientHeight;

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

// NPI项目滚动
function startNPICarousel() {
  const carousel = document.querySelector('.npi-carousel');
  const totalItems = document.querySelectorAll('.npi-carousel li').length;
  const itemHeight = document.querySelector('.npi-carousel li').clientHeight;

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

