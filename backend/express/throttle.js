
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    console.log("diff", now - lastCall)
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}

const throttledScrollHandler = throttle(() => {
  console.log("Loading more content...");
}, 1000);

window.addEventListener("scroll", throttledScrollHandler);