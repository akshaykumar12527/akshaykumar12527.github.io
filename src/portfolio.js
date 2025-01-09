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
  username: "Akshay Kumar",
  title: "Hi all, I'm Akshay Kumar",
  subTitle: emoji(
    "🚀 Passionate Software Engineer | Crafting Scalable Apps 🌐 | Exploring AI/ML 🤖 | Automating the Future ⚙️ | Lifelong Learner 📚 | Blogger 📝 Sharing Tech Tales | Turning Ideas into Impact 💡"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Dca3l-VakLFAlHdanDwbvVBR_wREOqrt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akshaykumar12527",
  linkedin: "https://www.linkedin.com/in/akshaykumar12527/",
  gmail: "akshaykumar12527@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/akshaykumar12527",
  medium: "https://medium.com/@akshaykumar12527",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Boundary-Pushing Full Stack Developer | Exploring All Things Tech 🚀",
  skills: [
    emoji(
      "🚀 Craft highly scalable backends using Monolith and Microservice architectures."
    ),
    emoji(
      "☁️ Manage cloud infrastructure on AWS and GCP for optimized performance."
    ),
    emoji(
      "🐳 Expertise in containerized applications and CI/CD pipelines for smooth deployments."
    ),
    emoji(
      "💻 Create powerful desktop applications with Electron for cross-platform usability."
    ),
    emoji(
      "🛠️ Master at building robust software solutions from scratch with a developer’s precision."
    ),
    emoji(
      "🌐 Develop high-performance web applications with React for engaging user experiences."
    ),
    emoji(
      "📱 Build dynamic and responsive mobile apps with React Native for seamless experiences."
    ),
    emoji(
      "🔗 Seamlessly integrate third-party APIs to extend functionality and enhance user experiences."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SaaS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Woolf University | Scalar",
      logo: require("./assets/images/woolfuniversity_logo.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - August 2024",
      desc: "Ranked top 10% in the program. Took courses about Data Structures, Databases, Software Engineering, Backend Systems, System Design, High Level Design and Low Level Design."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Guru Jambheshwar University of Science and Technology",
      logo: require("./assets/images/gjustLogo.png"),
      subHeader: "Bachelor of Technology  in Computer Science and Engineering",
      duration: "July 2012 - June 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Fullstack Web Development", //Insert stack or technology you have experience in
      progressPercentage: "100%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "100%"
    },
    {
      Stack: "Desktop Application Development",
      progressPercentage: "100%"
    },
    {
      Stack: "Cloud & Infrastructure",
      progressPercentage: "100%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "100%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "100%"
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "100%"
    },
    {
      Stack: "Cyber Security",
      progressPercentage: "100%"
    },
    {
      Stack: "AI/ML & Data Science",
      progressPercentage: "100%"
    },
    {
      Stack: "Product Management",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Lead",
      company: "Ec-Council",
      companylogo: require("./assets/images/ec-awareLogo.webp"),
      date: "Jan 2019 – Present",
      desc: "Handled all aspects of the Aware product implementation, including database design in MongoDB, implementation in Node, React, and Mithriljs, and deployment. I created the product from the ground up in a monolithic architecture."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Senior Web Developer",
      company: "Clixlogix Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/clixlogix_technologies_logo.jpeg"),
      date: "March 2017 – October 2017",
      desc: "Worked on multiple projects and worked on multiple stacks like Node.js, MongoDB, mysql, Angular, React, React Native etc."
    },
    {
      role: "Fullstack Developer",
      company: "Hatchit Up",
      companylogo: require("./assets/images/hatchitup.png"),
      date: "Jan 2016 – Feb 2017",
      desc: "I joined this company as a backend developer and upskilled myself to full-stack developer within 1 year."
    },
    {
      role: "Backend Engineer",
      company: "Aarvee Idea Labs Pvt. Ltd.",
      companylogo: require("./assets/images/aarvee_idea_labs.jpeg"),
      date: "September 2015 – Jan 2016",
      desc: "I joined this company as a backend developer and worked on a Loudshout product, which was a social media mobile application to post in the community anonymously."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ec-awareLogo.webp"),
      projectName: "OhPhish",
      projectDesc:
        "OhPhish is a Phishing Simulation tool which provides the organisation a platform to trigger phishing simulation campaigns on their employees.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://aware.ohphish.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iprosper_logo.png"),
      projectName: "iProsper",
      projectDesc: "Fully-customizable productivity tools for your businesss",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://iprosper.ca/"
        }
      ]
    },
    {
      image: require("./assets/images/avaana-logo.png"),
      projectName: "Avaana",
      projectDesc: "Find and book local health and wellbeing practitioners",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://avaana.com.au/"
        }
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
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  number: "+918802813876",
  email_address: "akshaykumar12527@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
