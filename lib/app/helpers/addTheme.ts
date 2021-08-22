export var themeLoader = function (param: any): void {
  var domArray = document.head.querySelectorAll("link");
  var lightIndex: number = 0;
  var darkIndex: number = 0;
  domArray.forEach((link, index) => {
    if (link.href.includes("light")) {
      lightIndex = lightIndex + 1;
      if (lightIndex >= 2) {
        link.parentNode.removeChild(link);
      }
    }
    if (link.href.includes("dark")) {
      darkIndex = darkIndex + 1;
      if (darkIndex >= 2) {
        link.parentNode.removeChild(link);
      }
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
