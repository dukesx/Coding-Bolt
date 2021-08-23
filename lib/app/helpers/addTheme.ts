export var themeLoader = function (param: any): void {
  var domArray = document.head.querySelectorAll("link");
  var lightIndex: number = 0;
  var darkIndex: number = 0;
  // domArray.forEach((link, index) => {
  //   if (link.href.includes("light")) {
  //     lightIndex = lightIndex + 1;
  //     if (lightIndex >= 1) {
  //       link.parentNode.removeChild(link);
  //     }
  //   }
  //   if (link.href.includes("dark")) {
  //     darkIndex = darkIndex + 1;
  //     if (darkIndex >= 1) {
  //       link.parentNode.removeChild(link);
  //     }
  //   }
  // });

  var headID = document.getElementsByTagName("head")[0];
  var linked = document.createElement("link");
  linked.rel = "stylesheet";
  linked.type = "text/css";

  if (param == "dark") {
    domArray.forEach((link, index) => {
      if (link.href.includes("light")) {
        link.parentNode.removeChild(link);
      }
    });
    linked.href = "/assets/themes/dark-theme.css";
    headID.insertBefore(linked, headID.firstChild);
  } else {
    // link.href = "/assets/themes/light-theme.css";
    domArray.forEach((link, index) => {
      if (link.href.includes("dark")) {
        link.parentNode.removeChild(link);
      }
      if (link.href.includes("light")) {
        // link.parentNode.removeChild(link);
      } else {
        linked.href = "/assets/themes/light-theme.css";
        headID.insertBefore(linked, headID.firstChild);
      }
    });
  }

  // headID.appendChild(link);
};
