import { ref } from "vue";

export default ref([
    {
        name: "My Portfolio",
        src: "/portofolio/hansenwu.jpg",
        showInHomePage: true,
        role: "Independent Developer",
        description: "A simple site built to share my profile and connect with others for potential collaborations.",
        tags: ["Vue 3", "TypeScript", "SASS", "Vite"],
    },
    {
        name: "Pattidana CDM System",
        src: "/portofolio/pattidana.jpg",
        showInHomePage: true,
        role: "Independent Developer",
        description: "Built and maintained this system since 2020. It handles yearly event registrations for ~2,000 entries, including a user portal and a manual verification flow for donations.",
        tags: ["Laravel", "MySQL", "Vue.js"],
        links: [{ label: "Visit Site", url: "https://pattidana.dhammamanggala.org" }]
    },
    {
        name: "Schoolah",
        src: "/portofolio/schoolah.jpg",
        showInHomePage: true,
        role: "Independent Developer",
        description: "A university final project covering student attendance, tuition reminders, online exams, and a teacher-student chat forum.",
        tags: ["Laravel", "Vue.js", "MySQL"],
    },
    {
        name: "KMBD Organization",
        src: "/portofolio/kmbd.jpg",
        showInHomePage: true,
        role: "Independent Developer",
        description: "My debut project. Developed the organization's website and CMS. Integrated an RFID-based system for tracking member attendance at events.",
        tags: ["Laravel", "MySQL", "RFID Integration"],
        links: [{ label: "Visit Site", url: "https://kmbd.info" }]
    },
    {
        name: "Hotel Bintang Mulia",
        src: "/portofolio/bintang-mulia.jpg",
        showInHomePage: true,
        role: "Independent Developer",
        description: "Created a landing page to provide information and a digital presence for the hotel.",
        tags: ["Laravel", "Vue.js"],
    },
    {
        name: "Event Tracker",
        src: "/portofolio/event-tracker.jpg",
        role: "Hobbyist",
        description: "A mobile app project created to learn Flutter and SQLite for offline data tracking.",
        tags: ["Flutter", "SQLite", "Dart"],
        links: [{ label: "Demo Video", url: "https://www.youtube.com/watch?v=m1o9LBP-9NI" }]
    },
    {
        name: "Landing Page",
        src: "/portofolio/landing-page.jpg",
        role: "Hobbyist",
        description: "An exploratory project built to practice modern front-end styling and component structure.",
        tags: ["Vue.js", "Stylus"],
        links: [{ label: "Visit Site", url: "https://landingpage-eight-amber.vercel.app" }]
    }
]);