(function () {
	let options = INSTALL_OPTIONS;

	let data = {
		intro: {
			title: "INTRODUCTION",
			content: "Welcome to our website!",
		},
		classic: {
			title: "CLASSIC",
			content: {
				email: {
					title: "E-MAIL US",
					text: "",
					href: "mailto:",
					icon: '<div class="icons icon-email"></div>',
				},
				phone: {
					title: "CALL US",
					text: "",
					href: "tel:",
					icon: '<div class="icons icon-android"></div>',
				},
				website: {
					title: "VISIT US",
					text: "",
					href: "",
					icon: '<div class="icons icon-website"></div>',
				},
			},
		},
		social: {
			title: "SOCIAL MEDIA",
			content: {
				facebook: {
					title: "LIKE US",
					text: "facebook.com/",
					href: "https://www.facebook.com/",
					icon: '<div class="icons icon-facebook"></div>',
				},
				instagram: {
					title: "FOLLOW US",
					text: "instagram.com/tom.j.thomas",
					href: "https://www.instagram.com/",
					icon: '<div class="icons icon-instagram"></div>',
				},
				twitter: {
					title: "TWEET US",
					text: "twitter.com/",
					href: "https://www.twitter.com/",
					icon: '<div class="icons icon-twitter"></div>',
				},
				youtube: {
					title: "WATCH US",
					text: "youtube.com",
					href: "https://www.youtube.com/",
					icon: '<div class="icons icon-youtube"></div>',
				},
				facebookmessenger: {
					title: "MESSAGE US",
					text: "m.me/",
					href: "https://m.me/",
					icon: '<div class="icons icon-facebook-messenger"></div>',
				},
				whatsapp: {
					title: "WHATSAPP US",
					text: "wa.me/",
					href: "https://wa.me/",
					icon: '<div class="icons icon-whatsapp"></div>',
				},
				snapchat: {
					title: "SNAP US",
					text: "snapchat.com/add/",
					href: "https://www.snapchat.com/add/",
					icon: '<div class="icons icon-snapchat"></div>',
				},
				linkedin: {
					title: "CONNECT WITH US",
					text: "linkedin.com/in/",
					href: "https://www.linkedin.com/in/",
					icon: '<div class="icons icon-linkedin"></div>',
				},
				medium: {
					title: "READ WITH US",
					text: "medium.com/",
					href: "https://www.medium.com/",
					icon: '<div class="icons icon-medium"></div>',
				},
				skype: {
					title: "LET'S SKYPE",
					text: "",
					href: "skype:",
					icon: '<div class="icons icon-skype"></div>',
				},
				telegram: {
					title: "TELEGRAM US",
					text: "t.me/",
					href: "https://telegram.me/",
					icon: '<div class="icons icon-telegram"></div>',
				},
				github: {
					title: "GITHUB",
					text: "github.com/",
					href: "https://www.github.com/",
					icon: '<div class="icons icon-github"></div>',
				},
				kickstarter: {
					title: "KICKSTART US",
					text: "kickstarter.com/profile/",
					href: "https://www.kickstarter.com/profile/",
					icon: '<div class="icons icon-kickstarter"></div>',
				},
				slack: {
					title: "WORK WITH US",
					text: ".slack.com",
					href: ".slack.com",
					icon: '<div class="icons icon-slack"></div>',
				},
				vimeo: {
					title: "WATCH US",
					text: "vimeo.com/",
					href: "https://www.vimeo.com/",
					icon: '<div class="icons icon-vimeo"></div>',
				},
				producthunt: {
					title: "HUNT WITH US",
					text: "producthunt.com/",
					href: "https://www.producthunt.com/",
					icon: '<div class="icons icon-producthunt"></div>',
				},
				xing: {
					title: "XING US",
					text: "xing.com/profile/",
					href: "https://www.xing.com/profiles/",
					icon: '<div class="icons icon-xing"></div>',
				},
				vk: {
					title: "VK US",
					text: "vk.com/",
					href: "https://www.vk.com/",
					icon: '<div class="icons icon-vk.com"></div>',
				},
			},
		},
	};
	//Add to data from install options
	/*const links = options.links;
	for (let key of Object.keys(links)) {
		link = links[key];
		switch (key) {
			case "message":
				if (link.show) {
					data.intro.title = link.msgtitle.toUpperCase;
					data.intro.content = link.msgtext;
				}
			case "email":
			case "phone":
				if (link.show) {
					data.classic.content[ke];
				}
		}
	}*/
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
					text:"",
					href:"",
					icon:""
				}
			}
		}
	}
	*/

	function updateElement() {
		let links = options.links;
		widget.innerHTML = fillWidget(links);
	}

	function fillWidget(links) {
		let widgetContent = "";
		for (let key of Object.keys(data)) {
			let section = data[key];
			let mainDiv = "";
			if (key == "intro") {
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
				Object.keys(section.content).forEach((key) => {
					item = links[key];
					if (item.show) {
						let content = section.content[key];
						sectionHasContents = true;
						let hrefContent, infoTextContent;
						switch (key) {
							case "whatsapp":
								hrefContent = content.href + item.link.replace(/\D/g, "");
								infoTextContent = content.text + item.link.replace(/\D/g, "");
								break;
							case "slack":
								infoTextContent = item.link + content.href;
								hrefContent = "https://" + infoTextContent;
								break;
							default:
								infoTextContent = content.text + item.link;
								hrefContent = content.href + item.link;
						}
						let a = `<a href=${hrefContent}>
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
					mainDiv += sectionDiv + "</div>";
				}
			}
			widgetContent += mainDiv;
		}
		return widgetContent;
	}

	//Widget Button
	const widgetButton = document.createElement("div");
	widgetButton.innerHTML = INSTALL_SCOPE.icon;
	widgetButton.setAttribute("class", `widget-button ${options.location}`);
	widgetButton.style.backgroundColor = options.widgetbutton.widgetColor;
	widgetButton.style.color = options.widgetbutton.iconColor;
	widgetButton.onclick = () => {
		widget.style.display = widget.style.display === "none" ? "block" : "none";
	};
	//Add everything to body
	const body = document.getElementsByTagName("body")[0];
	body.appendChild(widget);
	body.appendChild(widgetButton);

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", updateElement);
	} else {
		updateElement();
	}

	window.INSTALL_SCOPE = {
		setOptions(nextOptions) {
			options = nextOptions;
			updateElement();
		},
		updateButton(nextOptions) {
			options = nextOptions;
			widgetButton.style.backgroundColor = options.widgetbutton.widgetColor;
			widgetButton.style.color = options.widgetbutton.iconColor;
		},
		changeLocation(nextOptions) {
			options = nextOptions;
			widget.setAttribute("class", `widget ${options.location}`);
			widgetButton.setAttribute("class", `widget-button ${options.location}`);
		},
	};
})();
