module.exports = function (data) {
console.log(data);
  return {
    "index.html": [
      "<!doctype html>",
      "<html manifest=\"cache.manifest\">",
      "<title>Isola BRD</title>",
      "<head>",
      "<meta charset=\"utf-8\"/>",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"/>",
      "<link href=\"https://fonts.googleapis.com/css?family=Istok+Web:400,400italic,700,700italic\" type=\"text/css\">",
      "<link href=\"\\" + data.css + "\" rel=\"stylesheet\" type=\"text/css\" />",
      "</head>",
      "<body>",
      "</body>",
      "</html>"
    ].join("")
  };
};
