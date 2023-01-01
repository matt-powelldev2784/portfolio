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

    if (touchendX < touchstartX) {
      console.log('Swiped left');
      if (swipeLeftFunction) {
        swipeLeftFunction();
      }
    }

    if (touchendX > touchstartX) {
      console.log('Swiped right');
      if (swipeRightFunction) {
        swipeRightFunction();
      }
    }

    if (touchendY < touchstartY) {
      console.log('Swiped up');
      if (swipeUpFunction) {
        swipeUpFunction();
      }
    }

    if (touchendY > touchstartY) {
      console.log('Swiped down');
      if (swipeDownFunction) {
        swipeDownFunction();
      }
    }

    if (touchendY === touchstartY) {
      console.log('Tap');
      if (tapFunction) {
        tapFunction();
      }
    }
  };
};
