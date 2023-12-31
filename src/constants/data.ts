import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import aboutImage from '../assets/about.webp';
import pen from '../assets/pen.webp';
import sourceCode from '../assets/sourceCode.webp';

const services = [
    {
        image: one,
        title: "Vulnerability Assessments",
        content: "Regular penetration testing and vulnerability assessments can help you identify weaknesses in your IT security infrastructure and address them before they can be exploited by attackers."
    },
    {
        image: two,
        title: "Threat Detection",
        content: "Your IT security solutions should include robust threat detection and prevention mechanisms to safeguard against cyberattacks such as malware, viruses, and ransomware."
    },
    {
        image: three,
        title: "Web Development",
        content: "We provide professional and reliable web development services to help businesses establish a strong online presence. Our team of skilled developers and designers work closely with our clients."
    },
    {
        image: four,
        title: "Security Awareness Training",
        content: "Employees are often the weakest link in IT security, so it’s essential to provide them with regular security awareness training to educate them about cybersecurity best practices"
    }
]

const about = [
    {
        image: aboutImage,
        heading: "About Us",
        title: "Delivering IT solutions that secure your bussiness, and enable you to work smarter",
        content: "we’re constantly rethinking the future of IT security by creating innovative features that are tailored to your business’s unique needs. Our team of experts takes a hybrid perspective, blending cutting-edge technology with real-world experience to develop the next generation of IT security solutions. With our innovative features, the unthinkable today becomes inevitable – we’ll help you stay ahead of cyber threats and secure your business’s future. Our custom-built IT security solutions are designed to transform your business’s security posture and protect your valuable assets from harm. From advanced threat detection and response to state-of-the-art encryption and network security, we offer a comprehensive suite of services that can be tailored to fit your business’s unique shape. With our help, you can transform your business’s security and gain peace of mind knowing that your valuable data is safe and secure."
    }
]

const support = [
    {
        image: one,
        title: "Vulnerability Assessments"
    },
    {
        image: pen,
        title: "Penetration Testing"
    },
    {
        image: three,
        title: "Web Development"
    },
    {
        image: two,
        title: "Threat Detection"
    },
    {
        image: one,
        title: "Security Awareness Training"
    },
    {
        image: sourceCode,
        title: "Source Code Review"
    },
]

const stats = [
    {
        title: "Vulnerability Assessments",
        score: 95
    },
    {
        title: "Threat Detection",
        score: 80
    },
    {
        title: "Security Awareness Training",
        score: 87
    },
    {
        title: "Source Code Review",
        score: 70
    },
]

const faqData = [
    {
        question: "Will your security measures cause any disruption to our website or business operations?",
        ans: "We strive to minimize disruption to your website and business operations as much as possible. Our expert tech team will carefully implement our security measures to ensure they do not cause any significant downtime or issues. However, in some cases, minor disruptions may be unavoidable, but we will work closely with you to minimize any potential impacts."
    },
    {
        question: "What level of support can we expect if we have any security-related issues?",
        ans: "our clients may want to know what kind of support they can expect if they encounter any security-related issues while using your services. This could include things like how quickly they can expect a response from your team, what methods of communication are available (e.g. phone, email, chat), and what steps your team will take to address the issue."
    },
    {
        question: "Can you explain the process of how you will secure our website?",
        ans: "We follow a thorough process to secure your website. First, we conduct a comprehensive assessment to identify potential vulnerabilities. Based on our findings, we develop a customized security plan that addresses your specific needs. Our team then implements the plan, which may include measures such as encryption, firewalls, and malware protection."
    },
]

const plans = [
    {
        title: "Security Awareness Training",
        description: "A fully interactive training on Web Vulnerability Assessments",
        pricing: "$49/event",
        details: "Security awareness training is education for individuals to understand and mitigate cyber threats to protect sensitive information and systems.",
        button: "Join Now   "
    },
    {
        title: "Web Development",
        description: "We build robust web application with proper Security measure",
        pricing: "price as per Consultant",
        details: "Our web development service provides custom-designed websites and web applications that are user-friendly, visually appealing, and responsive to various devices."
    },
    {
        title: "Vulnerability Assessments",
        description: "Assessments on OWASP Top 10",
        pricing: "$100/audit",
        details: "Vulnerability assessment is a service that identifies and evaluates security vulnerabilities in systems and applications to improve security posture."
    },
    {
        title: "Threat Detection",
        description: "24/7 Monitoring on Web Server",
        pricing: "$149/Month",
        details: "Our 24/7 thread detection service continuously monitors systems for suspicious activities and alerts to prevent cyber attacks."
    },
]

export default services;
export { about, support,  stats, faqData, plans };