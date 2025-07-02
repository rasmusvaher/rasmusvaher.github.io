/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "RASMUS",
  title: "Hi all, I'm Rasmus",
  subTitle: emoji(
    "I am a passionate Blockchain Engineer and Full Stack Developer with experience upgrading crypto poker platforms and integrating smart contracts with React and Nest.js. Skilled in wallet integrations, Web3, and real-time communication, I deliver secure, scalable solutions that enhance user experience. Motivated by innovation and problem-solving, I excel in building robust applications and writing clear documentation to support seamless project delivery."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BLOCKCHAIN ENGINEER & FULL STACK DEVELOPER SPECIALIZING IN CRYPTO PLATFORMS, SMART CONTRACTS, AND WEB3",
  skills: [
    emoji("⚡ Develop and upgrade crypto poker and casino platforms with secure, scalable blockchain solutions"),
    emoji("⚡ Integrate smart contracts with React and Nest.js for seamless dApp experiences"),
    emoji("⚡ Implement wallet integrations, Web3 connectivity, and real-time communication features"),
    emoji("⚡ Conduct security audits and write clear documentation for robust project delivery")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Solidity", fontAwesomeClassname: "fab fa-ethereum" },
    { skillName: "Ethereum", fontAwesomeClassname: "fab fa-ethereum" },
    { skillName: "Hardhat", fontAwesomeClassname: "fas fa-hammer" },
    { skillName: "Remix", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Rust", fontAwesomeClassname: "fab fa-rust" },
    { skillName: "Ethers.js", fontAwesomeClassname: "fas fa-link" },
    { skillName: "Web3.js", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Nest.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tallinn University of Technology",
      logo: require("./assets/images/tal-tech.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2016 - September 2020",
      desc: "Gained expertise in algorithms, data structures, software engineering, and blockchain technologies.",
      descBullets: [
        "Completed practical internships and projects in collaboration with Estonian tech companies.",
        "Developed skills in independent scientific research and problem-solving in computer science."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Blockchain & Smart Contracts", progressPercentage: "95%" },
    { Stack: "Full Stack Development (React/Nest.js)", progressPercentage: "90%" },
    { Stack: "Web3 & Wallet Integrations", progressPercentage: "90%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Blockchain & Full Stack Developer",
      company: "Crypto Casino Platform",
      companylogo: require("./assets/images/casino-logo.png"),
      banner: require("./assets/images/casino-banner.png"),
      date: "Feb 2023 – Feb 2025",
      desc: "Upgraded crypto Casino platform, integrated smart contracts with React and Nest.js, and implemented wallet integrations and real-time communication for enhanced user experience.",
      descBullets: [
        "Developed and maintained blockchain-based casino and poker platforms",
        "Integrated Ethereum smart contracts with modern web frameworks (React, Nest.js)",
        "Implemented secure wallet integrations and Web3 connectivity",
        "Led onboarding and project delivery, ensuring robust documentation and security"
      ]
    },
    {
      role: "Blockchain Developer (Freelance / Various Projects)",
      company: "Self-Employed",
      companylogo: require("./assets/images/freelancer-logo.png"),
      banner: require("./assets/images/freelancer-banner.jpg"),
      date: "May 2021 – Feb 2023",
      desc: "Developed decentralized applications (dApps) on Ethereum, focusing on smart contract development, wallet integration, and cross-chain interoperability.",
      descBullets: [
        "Designed and implemented wallet integration solutions for multi-cryptocurrency support",
        "Worked on cross-chain interoperability and token management for Web3 environments",
        "Collaborated with front-end teams to build React-based blockchain applications",
        "Conducted security audits and testing of smart contracts to ensure compliance with best practices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "BLOCKCHAIN & CRYPTO PLATFORMS I HELPED BUILD",
  projects: [
    {
      image: require("./assets/images/betthrob.png"),
      projectName: "Crypto casino Platform",
      projectDesc: "Upgraded and maintained a real-time crypto casino platform with smart contract integration, wallet support, and secure gameplay.",
      footerLink: [
        { name: "Visit Website", url: "http://betthrob.com/" }
      ]
    },
    {
      image: require("./assets/images/magax.png"),
      projectName: "Presale Platform",
      projectDesc: "Developed a presale platform for a new crypto project, integrated wallet integration and token management solutions for decentralized finance (DeFi) applications.",
      footerLink: [
        { name: "Visit Website", url: "#" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "dakkoyuv7@gmx.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
