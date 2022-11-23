(function () {
  var old = console.log;
  let textTag = document.createElement("div");
  textTag.setAttribute("class", "board");
  document.body.appendChild(textTag);
  console.log = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        textTag.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        textTag.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();
let show = console.log;

export default show;
