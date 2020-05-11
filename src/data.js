export function values() {
	//TODO: code to add user values to the object
	return {
		intro: {
			title: "INTRODUCTION",
			content: "Welcome to our website!",
		},
		classic: {
			title: "CLASSIC",
			content: {
				"e-mail": {
					title: "E-Mail",
					content: "tomjt99@gmail.com",
					href: "mailto:tomjt99@gmail.com",
					icon: '<img class="icons" src=".\\png\\email.png"></img>',
				},
				phone: {
					title: "Phone Number",
					content: "+918848111963",
					href: "tel:918848111963",
					icon: '<img class="icons" src=".\\png\\android.png"></img>',
				},
			},
		},
		social: {
			title: "SOCIAL MEDIA",
			content: {
				facebook: {
					title: "Facebook",
					content: "facebook.com/tom.joseph.5496",
					href: "https://www.facebook.com/tom.joseph.5496",
					icon: '<img class="icons" src=".\\png\\facebook.png"></img>',
				},
				instagram: {
					title: "Instagram",
					content: "instagram.com/tom.j.thomas",
					href: "https://www.instagram.com/tom.j.thomas/",
					icon: '<img class="icons" src=".\\png\\instagram.png"></img>',
				},
			},
		},
	};
}
