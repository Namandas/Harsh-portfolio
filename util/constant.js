
const headerOptions = [{ name: "Home", path: "home" }, { name: "About", path: "about" }, { name: "Education", path: "education" }, { name: "Experience", path: "experience" }, { name: "Projects", path: "project" }, { name: "Skills", path: "skills" },
//  { name: "Resume", path: "resume" }, 
 { name: "Contact", path: "contact" }]
const aboutPointsFirstHalf = [{point:"Birthday",value:"18 october 2003"},{point:"City",value:"Bhopal, Madhya Pradesh, India"},]
const aboutPointsSecondHalf = [{point:"Phone",value:"+91 9425014361"},{point:"Email",value:"apuharshu@gmail.com"}]
const interest =[{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},]
const skills = [
    {
        tech: "LANGUAGES AND DATABASES",
        tools: [ {name: "JS", img : "javaScript"},
            {name: "HTML",img: "html"},
            {name: "CSS",img:"css" },
            {name: "MongoDB",img: "mongodb" }
        ]
    },
    {
    tech: "LIBRARIES",tools: [
            { name: "Nodejs",img : "node" },
            { name: "Expressjs",img: "express"},
            { name: "MUI",img: "mui"},
            { name: "React",img: "react"},
            { name: "Mongoose",img: "mongoose"},
            { name: "Nextjs",img: "next"},
            { name: "BootStrap",img: "bootstrap"},
        ]
    },
    {
        tech:"OTHER TOOLS",tools:[
            {name:"GIT",img:"git"},
            {name:"Github",img:"github"},
            {name:"Glitch",img:"glitch"},
            {name:"Netlify",img:"netlify"},
            {name:"Postman",img:"postman"},
            {name:"ClickUp",img:"clickup"},
        ]
    }
]
const educationDetails =[{
    // img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtnOdVVw73rwydfE-enIUvil3-7J8MePhOzqD-e0A07-aBxwnQVU-JQSmU5FIGVVDOMZ2R2MopQQ_Ek3QFkIqMTfHqylIDYEJaKwsYveBPufT5CKvvyjtTEJOof5fRRQ9i7e_F5QKbDcZD/s1600/topheader.jpg",
    name:"Birla Institute of Technology (Mesra) ",
    location:"Mesra, Jharkhand, India",
    cgpa:"8.85/10",
    degree:"B.Tech - Artificial Intelligence and Machine Learning",
    duration:"August, 2022 - June, 2026",
    id:"bit-mesra",
    link:"https://www.bitmesra.ac.in/1"
}]
const contactDetails = [{name:"Address",value:"Bhopal, Madhya Pradesh, India"},{name:"Email",value:"apuharshu@gmail.com"},{name:"Contact",value:"+91 9425014361"},{name:"Social Profiles",value:{"linkedin" : "https://in.linkedin.com/in/harsh-reddy-2697b4317","github":"https://github.com/HarshR-03","gmail":"mailto:apuharshu@gmail.com"}}]
const about = "I am in my B.Tech from BIT MESRA, Ranchi  (Jharkhand). I have worked on multiple projects using different tehnologies like JS, Nodejs, ExpressJs,Next.JS, GIT, JWT, HTML, CSS, Postman."
const experienceDetails = [{name:"TEXAS INSTRUMENT",role:"UPCOMING SWE INTERN",date:"MAY, 2025 ",location:"Banglore, India", responsibility:[""],link:""}]
const resumeLink = "https://drive.google.com/file/d/1AEPwv2ODD5Ca-3PM6o_0GnMncvSDY9ta/view?usp=sharing"
const projects=[
{
    name:"InterviewMentorAI:",
    type:["frontend","backend","fullstack"],
    about:" Developed an innovative SaaS application allowing users to upload resumes.",
    img:"fitness",
    techStack:["ReactJS","JS","Nodejs","MongoDB","ExpressJs","PostMan"],github:"https://github.com/sudhnashu/InterviewMentorAI",demo:"https://interview-mentor-ai-ten.vercel.app/",description:"Developed an innovative SaaS application allowing users to upload resumes and participate in simulated online interviews, utilizing the Google Gemini API for personalized interview functionalities.",
    features:[
        "–Implemented secure user authentication and account management with Clerk, resulting in enhanced user engagement and satisfaction.",
        "–Built a responsive web application using Next.js and TypeScript, providing a seamless user experience.",
        "–Integrated real-time response analysis, improving user feedback and preparation.",
        "–Enabled users to efficiently view past feedback, significantly boosting user preparedness."
    ]
}
]
module.exports = {
    headerOptions, aboutPointsFirstHalf, aboutPointsSecondHalf, skills, about, experienceDetails, educationDetails, contactDetails,
    resumeLink,projects
}
