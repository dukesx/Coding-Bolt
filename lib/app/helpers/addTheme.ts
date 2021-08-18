export var themeLoader = function (param: unknown ): void  {
  if (param == "dark") {
    document.head.querySelectorAll("link").forEach((link) => {
      console.log(link);
      if (link.href.includes("light")) {
        link.parentNode.removeChild(link);
      }
    });
  } else {
    document.head.querySelectorAll("link").forEach((link) => {
      console.log(link);
      if (link.href.includes("dark")) {
        link.parentNode.removeChild(link);
      }
    });
  }
  var headID = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";

  headID.appendChild(link);

  link.href = "/assets/themes/" + param + "-theme.css";
};
