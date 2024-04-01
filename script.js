let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (btn.innerText == "ON") {
    document.documentElement.style.cssText =
      "--light-color: #f8d11d; background-color: #f0f0f0";
    btn.innerText = "OFF";
  } else {
    document.documentElement.style.cssText =
      "--light-color: #94b0ff; background-color: #000";
    btn.innerText = "ON";
  }
});
