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

export default services;
export { about, support };