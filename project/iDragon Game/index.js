document.onkeydown = function (e) {
  console.log("key code is: ", e.keycode);
  if (e.keycode == 38) {
    dino = document.querySelector(".dino");
    dino.classlist.add("animateDino");
    setTimeout(() => {
      dino.classlist.remove("animateDino");
    }, 700);
  }
};
