//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Uugan Foundation", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'michaelscott@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'facebook', link: '', icon: faFacebook },
        { type: 'twitter', link: '', icon: faTwitter },
        { type: 'instagram', link: '', icon: faInstagram },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Uugan Champion Foundation",
        subtitle: "Enkhbatyn Badar-Uugan is a retired boxer from Mongolia who became the first Olympic boxing champion from his country when he won the gold medal in the Bantamweight (-54 kg) division at the 2008 Olympics. He was the second Mongolian to win Olympic gold in any sport."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Category", // eg.frontend, backend, devops etc
            skills: ["Skillset1", "Skillset1", "Skillset1"] //eg. react, html, python etc.
        },
        {
            category: "Category",
            skills: ["Skillset2", "Skillset2", "Skillset2"]
        },
        {
            category: "Category",
            skills: ["Skillset3", "Skillset3", "Skillset3"]
        },
        {
            category: "Category",
            skills: ["Skillset4", "Skillset4", "Skillset4"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2005 Ho Chi Minh City', //timespan
                title: 'Asian Championships', //eg. BTech in Compuster Engineering
                organization: '🥉 Bronze Medal', //eg. VJTI, Mumbai
                description: 'Flyweight' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2006 Almaty',
                title: 'World University Championships',
                organization: '🥇 Gold Medal',
                description: 'Bantamweight'
            },
            {
                time: '2006 Doha',
                title: 'Asian Games',
                organization: '🥉 Bronze Medal',
                description: 'Bantamweight'
            },
            {
                time: '2007 Chicago',
                title: 'World Amateur Championships',
                organization: '🥈 Silver Medal',
                description: 'Bantamweight'
            },
            {
                time: '2008 Beijing',
                title: 'Olympic Games',
                organization: '🥇 Golden Medal',
                description: 'Bantamweight'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Our Fund',
    workMainPage: 'Projects',
    capabilities: 'Gallery',
    about: 'About Me',
    education: 'Achievements',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'Our Fund',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}