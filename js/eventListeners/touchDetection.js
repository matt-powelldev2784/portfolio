let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

export const addTouchDetectionEventListeners = (element, swipeFunctions) => {
  element.addEventListener(
    'touchstart',
    (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    },
    false
  );

  element.addEventListener(
    'touchend',
    (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleTouch(swipeFunctions);
    },
    false
  );

  const handleTouch = (swipeFunctions) => {
    const { swipeLeftFunction, swipeRightFunction, swipeUpFunction, swipeDownFunction, tapFunction } = swipeFunctions;
    const threshold = 80;

    if (touchendX < touchstartX - threshold) {
      if (swipeLeftFunction) {
        setTimeout(() => {
          swipeLeftFunction();
        }, 300);
      }
    }

    if (touchendX > touchstartX + threshold) {
      if (swipeRightFunction) {
        setTimeout(() => {
          swipeRightFunction();
        }, 300);
      }
    }

    if (touchendY < touchstartY - threshold) {
      if (swipeUpFunction) {
        setTimeout(() => {
          swipeUpFunction();
        }, 300);
      }
    }

    if (touchendY > touchstartY + threshold) {
      if (swipeDownFunction) {
        setTimeout(() => {
          swipeDownFunction();
        }, 300);
      }
    }

    if (touchendY === touchstartY) {
      if (tapFunction) {
        setTimeout(() => {
          tapFunction();
        }, 300);
      }
    }
  };
};
