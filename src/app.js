import getData from "./data";
import getIcon from "./icons";
import "./css/style.css";
import "./css/icons.data.png.css";

(function name() {
  // eslint-disable-next-line no-undef
  let options = INSTALL_OPTIONS;

  let data = getData();

  // Widget Creation
  const widget = document.createElement("div");
  widget.setAttribute("class", `widget ${options.location}`);
  widget.setAttribute("id", "social-links-widget");

  // Fill the Widget

  /*
  Structure of object ' '->variable names used
  data={
    'section':{
      title:"",
      content:{
        'content':{
          title:"",
          text:"",
          href:"",
          icon:""
        }
      }
    }
  }
  */

  function fillWidget(links) {
    let widgetContent = "";
    // eslint-disable-next-line no-restricted-syntax
    for (const sectionKey of Object.keys(data)) {
      const section = data[sectionKey];
      let mainDiv = "";
      if (sectionKey === "intro") {
        if (links.message.show)
          mainDiv += `<h4 class="section-heading">${links.message.msgtitle}</h4>
                                    <div class="section">
                                        <div class="info">
                                            <p class="info-heading">${links.message.msgtext}</p>
                                        </div>
                                </div>`;
      } else {
        let sectionDiv = "";
        let sectionHasContents = false;
        sectionDiv += '<div class="section">';
        // eslint-disable-next-line no-loop-func
        Object.keys(section.content).forEach((key) => {
          const item = links[key];
          if (item.show) {
            const content = section.content[key];
            sectionHasContents = true;
            let hrefContent;
            let infoTextContent;
            switch (key) {
              case "whatsapp":
                hrefContent = content.href + item.link.replace(/\D/g, "");
                infoTextContent = content.text + item.link.replace(/\D/g, "");
                break;
              case "slack":
                infoTextContent = item.link + content.href;
                hrefContent = `https://${infoTextContent}`;
                break;
              case "kik":
                infoTextContent = content.text + item.link;
                hrefContent = "";
                break;
              default:
                infoTextContent = content.text + item.link;
                hrefContent = content.href + item.link;
            }
            const a = `<a href=${hrefContent}>
              <div class="info">
                <div class="info-icon-div">
                  ${content.icon}
                </div>
                <div class="info-text-div">
                  <h5 class="info-heading">${content.title}</h5>
                  <p class="info-text">
                  ${infoTextContent}
                  </p>
                </div>
              </div>
            </a>`;
            sectionDiv += a;
          }
        });
        if (sectionHasContents) {
          mainDiv += `<h4 class="section-heading">${section.title}</h4>`;
          mainDiv += `${sectionDiv}</div>`;
        }
      }
      widgetContent += mainDiv;
    }
    return widgetContent;
  }

  function updateElement() {
    const { links } = options;
    widget.innerHTML = fillWidget(links);
  }

  // Widget Button
  const widgetButton = document.createElement("div");
  // eslint-disable-next-line no-undef
  widgetButton.innerHTML = getIcon();
  widgetButton.setAttribute("class", `widget-button ${options.location}`);
  widgetButton.setAttribute("id", "social-links-widgetButton");
  widgetButton.style.backgroundColor = options.widgetbutton.widgetColor;
  widgetButton.style.color = options.widgetbutton.iconColor;
  widgetButton.onclick = () => {
    widget.style.display = widget.style.display === "none" ? "block" : "none";
  };
  // Add everything to body
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(widget);
  body.appendChild(widgetButton);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  // Functions for live preview
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions;
      updateElement();
    },
    updateButton(nextOptions) {
      options = nextOptions;
      widgetButton.style.backgroundColor = options.widgetbutton.widgetColor;
      widgetButton.style.color = options.widgetbutton.iconColor;
      widgetButton.innerHTML = getIcon();
    },
    changeLocation(nextOptions) {
      options = nextOptions;
      widget.setAttribute("class", `widget ${options.location}`);
      widgetButton.setAttribute("class", `widget-button ${options.location}`);
    },
    changeBadge(nextOptions) {
      options = nextOptions;
      data = getData();
      updateElement();
    },
  };
})();
