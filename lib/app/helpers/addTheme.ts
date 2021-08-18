export var themeLoader = function (param: any): void {
  var domArray = document.head.querySelectorAll("link");
  if (param == "dark") {
    domArray.forEach((link) => {
      if (link.href.includes("light")) {
        link.parentNode.removeChild(link);
      }
    });
  } else {
    domArray.forEach((link) => {
      if (link.href.includes("dark")) {
        link.parentNode.removeChild(link);
      }
    });
  }
  var headID = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href = "/assets/themes/" + param + "-theme.css";

  headID.appendChild(link);
};
