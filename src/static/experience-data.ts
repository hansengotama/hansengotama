import { ref } from "vue";

export default ref({
    works: [
        {
            name: "PT. Central Mega Kencana",
            roles: [
                {
                    text: "IT Digital Developer Manager",
                    time: "Jul 2025 – Present",
                    description: [
                        "Led a lean digital team (3 dedicated engineers) and project-based freelancers, owning delivery, technical direction, and quality.",
                        "Worked with the team to build a secure CI/CD pipeline using GitHub Actions and self-hosted runners.",
                        "Improved observability and incident response by introducing Sentry APM and Uptime Kuma.",
                        "Strengthened platform security through rate limiting and secure token-based authentication.",
                        "Enabled zero-downtime deployments and graceful shutdowns for Golang services.",
                        "Migrated article images to centralized object storage, simplifying content management.",
                        "Rebuilt multi-brand e-commerce platforms with the team to support scalable and maintainable commerce features."
                    ]
                },
                {
                    text: "IT Manufacture Developer Manager",
                    time: "Aug 2024 – Jul 2025",
                    description: [
                        "Led a cross-functional team of 6 engineers, 1 technical writer, and 2 UI/UX designers.",
                        "Maintained and enhanced a legacy manufacturing system (PHP 5.6) while modernizing the platform using Golang (backend) and Flutter (mobile).",
                        "Migrated the codebase to Git, improving collaboration and release safety.",
                        "Optimized system performance by fixing slow queries and resource bottlenecks, CPU usage reduced from >80% to <30%.",
                        "Improved system security through secure coding practices."
                    ]
                }
            ]
        },
        {
            name: "Pinhome",
            roles: [
                {
                    text: "Senior Software Engineer",
                    time: "Apr 2024 – Aug 2024",
                    description: [
                        "Enhanced the Pinhome Consumer App search and filtering system by adding new filters and deprecating unused ones, improving search history, saved searches, deep links, and event tracking.",
                        "Led execution for the Home Service project using Shape Up for one cycle (1 month), collaborating with 2 senior and 1 mid-level engineer, delivering with no carry-over.",
                        "Planned and contributed to upgrading go-pg from v8 to v10, enabling support for PostgreSQL 15."
                    ]
                },
                {
                    text: "Acting Tech Lead",
                    time: "Jul 2023 – Oct 2023",
                    description: [
                        "Served as Acting Tech Lead, leading a team of 2 Backend, 1 Frontend, and 1 AI engineer.",
                        "Increased team ownership by aligning engineers with business goals, fostering open discussions, and negotiating trade-offs. Cycle time reduced from ~1.5 days to ~12 hours and capacity increased from 12 to 30 story points.",
                        "Led a critical system stabilization initiative by replacing offset pagination with token-based pagination, reducing response time from ~60s to <1s and improving operations efficiency by 55%.",
                        "Designed and built an AI-powered chatbot from scratch (OpenAI + Sendbird) for in-app property and mortgage support.",
                        "Identified and fixed faulty logic causing CPU spikes (>80%), stabilizing services to below 10% CPU usage.",
                        "Improved platform security by masking sensitive data in application logs."
                    ]
                },
                {
                    text: "Senior Software Engineer",
                    time: "Sep 2022 – Jul 2023",
                    description: [
                        "Developed features across backend and mobile for the Pinhome Rekan Jasa app, supporting allocation, bonus, and disbursement.",
                        "Proactively handled production incidents, delivering clear root cause analyses and long-term fixes.",
                        "Led system design discussions and broke initiatives into actionable technical tasks.",
                        "Reviewed upfront designs and code, unblocked engineers, and ensured successful sprint delivery.",
                        "Mentored engineers, including 2 direct mentees, supporting their technical and professional growth."
                    ]
                },
                {
                    text: "Software Engineer",
                    time: "Jan 2021 – Sep 2022",
                    description: [
                        "Led AC Fixing & Cleaning Services project with a team of 4 engineers.",
                        "Built in-app chat using Qiscus for Pinhome Rekan Jasa App.",
                        "Developed and improved allocation, scoring, and disbursement systems.",
                        "Migrated Pinhome Rekan Jasa App from Flutter v1 to v2."
                    ]
                }
            ]
        },
        {
            name: "Ruparupa.com",
            roles: [
                {
                    text: "Software Engineer / Backend Developer",
                    time: "Jul 2020 – Jan 2021",
                    description: [
                        "Backend engineer contributing to the MISS ACE App, implementing core e-commerce features including authentication, product, order, and transaction flows."
                    ]
                }
            ]
        },
        {
            name: "Bahaso.com",
            roles: [
                {
                    text: "Software Engineer / Full Stack Developer",
                    time: "Mar 2018 – Jul 2020",
                    description: [
                        "Developed and maintained the Bahaso and Aminin website and back office systems.",
                        "Built the Bahaso Talk Tutor Dashboard, supporting tutors with session notes, time management, and topic recommendations.",
                        "Designed and developed an in-app chat feature for the Aminin app, enabling consultations between customers and Ustad.",
                        "Integrated Google Analytics and Firebase Cloud Messaging for analytics and push notifications."
                    ]
                }
            ]
        }
    ],
    organizations: [
        {
            name: "Keluarga Mahasiswa Buddhis Dhammavadhana (KMBD)",
            roles: [
                { text: "Head of Secretariat & Entrepreneur", time: "2018 – 2019" },
                { text: "Organizer of Secretariat & Entrepreneur", time: "2017 – 2018" },
                { text: "Activist of Stand, Inventories & Library", time: "2016 – 2017" }
            ]
        }
    ],
    events: [
        { text: "DV Live In (Advisor)", time: "2018" },
        { text: "Buddhist Camp (Advisor)", time: "2018" },
        { text: "Book Fair (Advisor)", time: "2018" },
        { text: "Factory Visit (Advisor)", time: "2018" },
        { text: "DV Live In (Head of Event)", time: "2017" },
        { text: "DV Card (Project Manager)", time: "2017" },
        { text: "Bedah Film (Head of Event)", time: "2016" }
    ]
});

