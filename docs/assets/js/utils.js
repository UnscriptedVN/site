function assignAyuColor(elementName) {
  let element = document.getElementById(elementName);
  if (element == undefined) {
    return;
  }
  const types = [
    "keyword",
    "subst",
    "section",
    "entity",
    "string",
    "number",
    "comment",
    "regexp",
  ];

  let randomId = Math.floor(Math.random() * types.length);
  element.className += " hljs-" + types[randomId];
}
