//
const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initalValue = 0;
  const increaseCount = setInterval(() => {
    initalValue += increment;
    if (initalValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initalValue}+`;
  }, 1);
};

const values = [...document.querySelectorAll('.value')];

values.forEach((span) => {
  updateCount(span);
});
