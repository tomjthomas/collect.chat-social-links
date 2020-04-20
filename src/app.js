import { values } from "./data.js";
window.onload = function () {
	const options = INSTALL_OPTIONS;

	//temporary options till cloudflare works
	let options = {
		icon:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Ftransparent-round-icons%2F512%2Fchat.png&f=1&nofb=1",
		location: "bottom-right",
	};

	let data = values();

	//Widget Creation
	const widget = document.createElement("div");
	widget.setAttribute("class", `widget ${options.location}`);

	//Fill the Widget

	/* 
	Structure of object ' '->variable names used
	data={
		'section':{
			title:"",
			content:{
				'content':{
					title:"",
					content:"",
					href:"",
					icon:""
				}
			}
		}
	}
	*/
	for (let key of Object.keys(data)) {
		let section = data[key];
		let mainDiv = document.createElement("div");
		if (key == "intro") {
			mainDiv.innerHTML = `<h4 class="section-heading">${section["title"]}</h4>
                                    <div class="section">
                                        <div class="info">
                                            <p class="in fo-heading">${section["content"]}</p>
                                        </div>
                                </div`;
		} else {
			mainDiv.innerHTML = `<h4 class="section-heading">${section["title"]}</h4>`;
			let sectionDiv = document.createElement("div");
			sectionDiv.setAttribute("class", "section");
			Object.keys(section["content"]).forEach((key) => {
				let content = section["content"][key];
				console.log(content);
				let a = document.createElement("a");
				a.setAttribute("href", content["href"]);
				a.innerHTML = `  <div class="info">
                            <div class="info-icon-div">
                                <span>${content["icon"]}</span>
                            </div>
                            <div class="info-text-div">
                                <h5 class="info-heading">${content["title"]}</h5>
                                <p class="info-text">
                                ${content["content"]}
                                </p>
                            </div>
                        </div>`;
				sectionDiv.appendChild(a);
			});
			mainDiv.appendChild(sectionDiv);
		}
		widget.appendChild(mainDiv);
	}

	//Widget Button
	const widgetButton = document.createElement("div");
	widgetButton.style.backgroundImage = `url(${options.icon})`;
	widgetButton.setAttribute("class", `widget-button ${options.location}`);
	widgetButton.onclick = () => {
		widget.style.display = widget.style.display === "none" ? "block" : "none";
	};

	//Add everything to body
	const body = document.getElementsByTagName("body")[0];
	body.appendChild(widget);
	body.appendChild(widgetButton);
};
