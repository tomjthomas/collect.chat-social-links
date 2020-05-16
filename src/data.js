export default function getData() {
  // eslint-disable-next-line no-undef
  const { badge } = INSTALL_OPTIONS;
  return {
    intro: {
      title: "INTRODUCTION",
      content: "Welcome to our website!",
    },
    classic: {
      title: "CLASSIC",
      content: {
        email: {
          title: `E-MAIL ${badge}`,
          text: "",
          href: "mailto:",
          icon: '<div class="icons icon-email"></div>',
        },
        phone: {
          title: `CALL ${badge}`,
          text: "",
          href: "tel:",
          icon: '<div class="icons icon-phone"></div>',
        },
        website: {
          title: `VISIT ${badge}`,
          text: "",
          href: "https://",
          icon: '<div class="icons icon-website"></div>',
        },
      },
    },
    social: {
      title: "SOCIAL MEDIA",
      content: {
        facebook: {
          title: `LIKE ${badge}`,
          text: "facebook.com/",
          href: "https://www.facebook.com/",
          icon: '<div class="icons icon-facebook"></div>',
        },
        instagram: {
          title: `FOLLOW ${badge}`,
          text: "instagram.com/",
          href: "https://www.instagram.com/",
          icon: '<div class="icons icon-instagram"></div>',
        },
        twitter: {
          title: `TWEET ${badge}`,
          text: "twitter.com/",
          href: "https://www.twitter.com/",
          icon: '<div class="icons icon-twitter"></div>',
        },
        youtube: {
          title: `WATCH ${badge}`,
          text: "youtube.com/",
          href: "https://www.youtube.com/",
          icon: '<div class="icons icon-youtube"></div>',
        },
        soundcloud: {
          title: `LISTEN TO ${badge}`,
          text: "soundcloud.com/",
          href: "https://www.soundcloud.com/",
          icon: '<div class="icons icon-soundcloud"></div>',
        },
        facebookmessenger: {
          title: `MESSAGE ${badge}`,
          text: "m.me/",
          href: "https://m.me/",
          icon: '<div class="icons icon-facebook-messenger"></div>',
        },
        whatsapp: {
          title: `WHATSAPP ${badge}`,
          text: "wa.me/",
          href: "https://wa.me/",
          icon: '<div class="icons icon-whatsapp"></div>',
        },
        snapchat: {
          title: `SNAP ${badge}`,
          text: "snapchat.com/add/",
          href: "https://www.snapchat.com/add/",
          icon: '<div class="icons icon-snapchat"></div>',
        },
        linkedin: {
          title: `CONNECT WITH ${badge}`,
          text: "linkedin.com/in/",
          href: "https://www.linkedin.com/in/",
          icon: '<div class="icons icon-linkedin"></div>',
        },
        medium: {
          title: `READ WITH ${badge}`,
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
          title: `TELEGRAM ${badge}`,
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
          title: `KICKSTART ${badge}`,
          text: "kickstarter.com/",
          href: "https://www.kickstarter.com/",
          icon: '<div class="icons icon-kickstarter"></div>',
        },
        kik: {
          title: `KIK ${badge}`,
          text: "",
          href: "",
          icon: '<div class="icons icon-kik"></div>',
        },
        slack: {
          title: `WORK WITH ${badge}`,
          text: ".slack.com",
          href: ".slack.com",
          icon: '<div class="icons icon-slack"></div>',
        },
        vimeo: {
          title: `WATCH ${badge}`,
          text: "vimeo.com/",
          href: "https://www.vimeo.com/",
          icon: '<div class="icons icon-vimeo"></div>',
        },
        producthunt: {
          title: `HUNT WITH ${badge}`,
          text: "producthunt.com/",
          href: "https://www.producthunt.com/",
          icon: '<div class="icons icon-producthunt"></div>',
        },
        xing: {
          title: `XING ${badge}`,
          text: "xing.com/profile/",
          href: "https://www.xing.com/profiles/",
          icon: '<div class="icons icon-xing"></div>',
        },
        vk: {
          title: `VK ${badge}`,
          text: "vk.com/",
          href: "https://www.vk.com/",
          icon: '<div class="icons icon-vkcom"></div>',
        },
      },
    },
  };
}
