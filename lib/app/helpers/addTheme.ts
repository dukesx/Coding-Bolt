export var themeLoader = function (param: any): void {
  var domArray = document.head.querySelectorAll("link");

  domArray.forEach((link) => {
    if (link.href.includes("light")) {
      link.parentNode.removeChild(link);
    }
    if (link.href.includes("dark")) {
      link.parentNode.removeChild(link);
    }
  });

  var headID = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";

  if (param == "dark") {
    link.href = "/assets/themes/dark-theme.css";
  } else {
    link.href = "/assets/themes/light-theme.css";
  }

  headID.appendChild(link);
};
