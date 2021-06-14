const dbg = (...args) => {
  console.log(...args);
  return args[0];
};

document.querySelectorAll("nav > .mid").forEach(
  (el) =>
    // even though onpointer events are closer to what I want
    // it will always register as down even wehn going for a drag
    (el.onclick = () =>
      el.scrollIntoView({
        block: "end",
        behavior: "smooth",
      }))
);

window.onload = () => {
  document.querySelector(".mid > div").textContent =
    `mid\n` +
    Array(100)
      .fill(0)
      .map((_, i) => i.toString(10).padStart(3, "0"))
      .join("\n");

  document.querySelector(".mid").scrollIntoView();
};

let left = document.querySelector(".lhs");
let bottom = document.querySelector(".overlay");
document.querySelector("nav").addEventListener(
  'scroll',
  e => {
    bottom.style.bottom = (-52 * (e.target.scrollLeft / left.clientWidth)) + 'px'
  }
)
