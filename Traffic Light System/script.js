  const red = document.getElementById("red");
  const yellow = document.getElementById("yellow");
  const green = document.getElementById("green");

  let autoRunning = false;
  let timeoutRef;

  function turnOffAll() {
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");
  }

  function setLight(color) {
    stopAuto(); // stop auto if manual is used
    turnOffAll();

    if (color === "red") red.classList.add("active");
    if (color === "yellow") yellow.classList.add("active");
    if (color === "green") green.classList.add("active");
  }

  function autoCycle() {
    if (!autoRunning) return;

    // RED
    turnOffAll();
    red.classList.add("active");

    timeoutRef = setTimeout(() => {
      if (!autoRunning) return;

      // GREEN
      turnOffAll();
      green.classList.add("active");

      timeoutRef = setTimeout(() => {
        if (!autoRunning) return;

        // YELLOW
        turnOffAll();
        yellow.classList.add("active");

        timeoutRef = setTimeout(autoCycle, 2000);

      }, 4000);

    }, 4000);
  }

  function startAuto() {
    if (autoRunning) return;
    autoRunning = true;
    autoCycle();
  }

  function stopAuto() {
    autoRunning = false;
    clearTimeout(timeoutRef);
  }
