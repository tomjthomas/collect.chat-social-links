(function () {
  const options = INSTALL_OPTIONS;

  const widget = document.createElement("div");
  widget.setAttribute("class", `widget ${options.location}`);

  const widgetButton = document.createElement("div");
  widgetButton.style.backgroundImage = `url(${options.icon})`;
  widgetButton.setAttribute("class", `widget-button ${options.location}`);
  widgetButton.onclick = () => {
    widget.style.display = widget.style.display === "none" ? "block" : "none";
  };

  const body = document.getElementsByTagName("body");
  body[0].appendChild(widget);
  body[0].appendChild(widgetButton);
})();
