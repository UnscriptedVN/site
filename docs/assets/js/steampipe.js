function resolveEquineAttrs() {
  const searchParameters = new URLSearchParams(window.location.search);

  if (!searchParameters.has("hl2_send")) {
    return;
  }

  if (searchParameters.get("hl2_send") == "true") {
    let itchButton = document.getElementsByClassName("itch");
    if (itchButton.length < 0) {
      return;
    }
    for (let itchy of itchButton) {
      itchy.className += " promised";
    }
  }
}

resolveFreemanDependencies();
