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
  username: "Dao Ngoc Thang",
  title: "Hi all, I'm Thang",
  subTitle: emoji(
    "AI/ML-oriented IT student 🚀 at Ho Chi Minh City University of Education, focusing on Machine Learning, Deep Learning, and data-driven solutions. Hands-on experience with CNN-based image classification and RAG-based chatbot systems. Strong self-learning and problem-solving mindset."
  ),
  resumeLink:
    "./resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/justin-2212",
  linkedin: "https://www.linkedin.com/in/nthang05/",
  gmail: "ngocthangchien@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML STUDENT BUILDING CNN MODELS AND RAG-BASED AI SYSTEMS",
  skills: [
    emoji(
      "⚡ Develop deep learning models for computer vision using CNN and image classification"
    ),
    emoji("⚡ Build RAG-based chatbot systems and LLM applications with Prompt Engineering"),
    emoji(
      "⚡ Create data processing pipelines and train machine learning models with TensorFlow and PyTorch"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "rag",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "vscode",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ho Chi Minh University of Education",
      logo: require("./assets/images/hcmueLogo.webp") ,
      subHeader: "Bachelor of Information Technology (AI-oriented)",
      duration: "September 2023 - April 2027",
      desc: "Pursuing a strong foundation in Computer Science with focus on Artificial Intelligence, Machine Learning, and Data Science. Actively exploring modern AI systems including deep learning and large language models (LLMs).",
      descBullets: [
        "Studying core subjects: Data Structures & Algorithms, Database Systems, Operating Systems, and Machine Learning fundamentals",
        "Practicing AI development using Python, TensorFlow, and PyTorch in academic and personal projects",
        "Building experience with Git/GitHub, research reading, and model implementation for real-world AI problems"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning / Neural Networks",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Analysis & Processing",
      progressPercentage: "80%"
    },
    {
      Stack: "RAG Systems & LLMs",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Year 3 - AI Specialization",
      company: "Ho Chi Minh University of Education",
      companylogo: require("./assets/images/hcmueLogo.webp"),
      date: "September 2025 - Present",
      desc: "Focusing on advanced AI and Machine Learning courses with practical projects in deep learning, neural networks, and real-world AI applications.",
      descBullets: [
        "Advanced Machine Learning: Studying advanced ML algorithms and model optimization techniques",
        "Deep Learning: Working with neural networks, CNNs, and RNNs using TensorFlow and PyTorch",
        "AI Projects: Implementing end-to-end AI projects including computer vision and NLP applications"
      ]
    },
    {
      role: "Year 2 - Core CS Foundations",
      company: "Ho Chi Minh University of Education",
      companylogo: require("./assets/images/hcmueLogo.webp"),
      date: "September 2024 - August 2025",
      desc: "Completed foundational computer science courses including data structures, algorithms, operating systems, and database systems.",
      descBullets: [
        "Data Structures & Algorithms: Mastered fundamental DSA concepts and their implementations",
        "Database Systems: Learned SQL, database design, and optimization techniques",
        "Operating Systems: Studied OS concepts, processes, and system programming"
      ]
    },
    {
      role: "Year 1 - Introduction to IT",
      company: "Ho Chi Minh University of Education",
      companylogo: require("./assets/images/hcmueLogo.webp"),
      date: "September 2023 - August 2024",
      desc: "Completed introductory IT courses including programming fundamentals, discrete mathematics, and introduction to software engineering.",
      descBullets: [
        "Programming Fundamentals: Learned Python programming and problem-solving techniques",
        "Mathematics for CS: Studied discrete mathematics and mathematical foundations of CS",
        "Software Development Basics: Introduction to software engineering principles and version control"
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
  title: "Projects",
  subtitle: "AI/ML PROJECTS I HAVE DEVELOPED",
  projects: [
    {
      projectName: "Fruit Ripeness Classification",
      projectDesc: "CNN-based deep learning model to classify fruit ripeness from images. Achieved 92.33% accuracy with image preprocessing and data augmentation.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/callm3tk/fruit-ripeness-classification"
        }
      ]
    },
    {
      projectName: "IT Career Mentor (RAG Chatbot)",
      projectDesc: "AI/LLM chatbot system to recommend IT career paths (Web, Game, AI) for students. Uses RAG pipeline to retrieve and generate intelligent responses.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/justin-2212/IT_career_mentor "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Online Certifications and Completed Courses from DeepLearning.AI, Google Cloud, and Udemy",

  achievementsCards: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle:
        "DeepLearning.AI Certification - Completed on February 2026. Mastered fundamental ML algorithms and techniques.",
      imageAlt: "Machine Learning Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/9be64873d8b80c813fbb6394cf7cb8c7"
        }
      ]
    },
    {
      title: "Retrieval Augmented Generation (RAG)",
      subtitle:
        "DeepLearning.AI Certification - Completed on April 2026. Advanced knowledge in RAG systems and LLM applications.",
      imageAlt: "RAG and LLM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/9be64873d8b80c813fbb6394cf7cb8c7"
        }
      ]
    },

    {
      title: "Complete Python Programming for Beginners",
      subtitle: "Udemy Certification - Completed on March 2026. Comprehensive Python programming fundamentals.",
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-a0e0b622-293b-4c9c-8206-b489938e39ca/"
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
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
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
    "Interested in discussing AI/ML projects or opportunities? Feel free to reach out!",
  number: "",
  email_address: "ngocthangchien@gmail.com",
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
