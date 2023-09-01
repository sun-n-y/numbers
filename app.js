const spans = [...document.querySelectorAll('.value')];

spans.forEach((span) => {
  const value = parseInt(span.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      span.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    span.textContent = `${initialValue}+`;
  }, 1);
});
