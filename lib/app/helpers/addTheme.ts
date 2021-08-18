export var themeLoader = function (param: any): void {
  var domArray = document.head.querySelectorAll("link");
  if (param == "dark") {
    domArray.forEach((link) => {
      // if (link.href.includes("light")) {
      //   link.parentNode.removeChild(link);
      // }

      var headID = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/assets/themes/dark-theme.css";

      headID.appendChild(link);
    });
  } else {
    domArray.forEach((link) => {
      if (link.href.includes("dark")) {
        link.parentNode.removeChild(link);
      }
    });
  }
};
