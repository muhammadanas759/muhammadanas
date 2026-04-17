export const portfolioData = {
  name: "Muhammad Anas Qamar",
  tagline: "Engineering @ VentureDive",
  contact: {
    email: "anasmuhammad759@gmail.com",
    phone: "(+92) 331-3867853",
    linkedin: "https://linkedin.com/in/muhammad-anas-180169154/",
    whatsapp: "https://wa.me/+923313867853",
  },
  about:
    "Experienced mobile app developer with 5+ years of expertise in Android Native and Flutter app development. Skilled in Kotlin, Java, and Flutter, I have successfully delivered robust, user-friendly applications. Committed to writing high-quality code and following best practices, I strive to create clean, maintainable, and scalable solutions. Passionate about problem-solving and delivering intuitive experiences, I'm eager to collaborate on impactful mobile app projects. Let's connect and bring your ideas to life!",
  topSkills: [
    "Android Development",
    "Mobile App Development",
    "Flutter",
    "Unit Testing",
    "Clean Architecture",
  ],
  technicalSkills: [
    {
      category: "Programming Languages",
      items: ["Kotlin", "Java", "Dart", "Swift"],
    },
    {
      category: "Mobile Frameworks",
      items: [
        "Flutter (BLoC, Cubit, Provider, Clean Architecture)",
        "Jetpack Compose",
        "XML",
      ],
    },
    {
      category: "Android Jetpack",
      items: [
        "ViewModel",
        "LiveData",
        "DataBinding",
        "Room",
        "Navigation",
        "WorkManager",
        "Hilt/Dagger2",
      ],
    },
    {
      category: "State Management (Flutter)",
      items: ["BLoC", "Riverpod", "GetX", "Provider"],
    },
    {
      category: "Async & Reactive Programming",
      items: ["Coroutines", "Flows", "RxJava", "Streams"],
    },
    {
      category: "API & Backend Integration",
      items: ["REST APIs", "GraphQL", "WebSockets", "Retrofit", "Dio"],
    },
    {
      category: "Databases & Storage",
      items: [
        "Room",
        "SQLite",
        "Hive",
        "Firebase Firestore/Realtime DB",
        "Secure Storage",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: ["Firebase (Auth, Analytics, FCM, Crashlytics)", "AWS (S3)"],
    },
    {
      category: "CI/CD & Code Quality",
      items: ["Fastlane", "CodeMagic", "Jenkins", "SonarQube"],
    },
    {
      category: "Payments & IAP",
      items: ["Google Play Billing", "Apple IAP", "Stripe", "PayPal"],
    },
    {
      category: "Tools & Collaboration",
      items: ["Git (GitFlow)", "Jira", "Trello", "Slack", "Android Studio", "Xcode"],
    },
    {
      category: "Testing",
      items: ["JUnit", "Mockito", "Espresso", "Flutter Driver", "JaCoCo", "DevTools"],
    },
    {
      category: "Other Skills",
      items: [
        "ExoPlayer",
        "Socket.IO",
        "Offline Caching & Sync",
        "Localization (i18n, l10n)",
        "App Store/Play Store Deployment",
      ],
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer (Flutter | Android)",
      company: "VentureDive",
      location: "Remote, PK",
      period: "Jun 2021 – Present",
      highlights: [
        "Architected and developed ATHAN App (15M+ downloads) and ATHAN Academy (100k+ downloads) using MVVM (Android) and Cubit/BLoC (Flutter) with Clean Architecture.",
        "Achieved 80%+ test coverage (ATHAN) and 90%+ unit test coverage (ATHAN Academy) using CI/CD pipelines with Fastlane and SonarQube.",
        "Implemented high-performance audio and video streaming modules with caching and offline handling.",
        "Designed and built a background location tracking module with exact alarm scheduling for precise prayer alerts.",
        "Integrated real-time messaging (text, audio, images) for seamless student-teacher interaction.",
        "Drove revenue growth by integrating Apple/Google In-App Purchases via RevenueCat.",
        "Configured build flavors for multiple environments, streamlining deployment workflows.",
        "Owned end-to-end delivery—from ideation to API integration, development, testing, and app store releases.",
      ],
    },
    {
      role: "Android Developer - Part Time",
      company: "HALALDASH APP",
      location: "Remote, USA",
      period: "Jan 2021 - May 2021",
      highlights: [
        "Maintained and enhanced the HALALDASH App using MVP architecture.",
        "Developed and deployed a Kiosk app with POS integration and receipt printer support.",
        "Integrated real-time chat functionality via MQTT servers.",
        "Managed and optimized three HalalDash apps (Drivers, Customers, Restaurants).",
      ],
    },
    {
      role: "Flutter Developer - Part Time",
      company: "BID ON TASK APP",
      location: "Remote, CANADA",
      period: "Jan 2022 - Oct 2022",
      highlights: [
        "Architected scalable app using BLoC/Cubit and Clean Architecture.",
        "Developed real-time chat feature using Socket_io and Firebase.",
        "Integrated RESTful APIs and real-time location tracking.",
        "Managed release processes with CI/CD pipelines (CodeMagic).",
      ],
    },
    {
      role: "Software Engineer",
      company: "Manhattan Datanet LLC",
      location: "Remote, PK",
      period: "Dec 2019 – June 2021",
      highlights: [
        "Architected the app with Clean Architecture and Dependency Injection (Dagger2).",
        "Developed a video-based social platform with dynamic home feed (ExoPlayer + caching).",
        "Built a Resume Builder feature and integrated Stripe for payments.",
        "Implemented offline caching for videos and critical data.",
      ],
    },
    {
      role: "Software Engineer – Android",
      company: "Edgeon Solutions",
      location: "Karachi, PK",
      period: "Sep 2018 – Dec 2019",
      highlights: [
        "Built TravelApp (aviation-focused) from scratch using Java, Kotlin, MVVM.",
        "Integrated aviation APIs for live flight data and real-time chat via Firebase.",
        "Implemented In-App Audio Calling via Twilio and Firebase Push Notifications.",
        "Enhanced app performance with offline handling and optimized API calls.",
      ],
    },
  ],
  projects: [
    {
      name: "Pets Hero",
      description:
        "Social Media, E-Commerce and Consultant App for Pet Lovers. Built a cross-platform pet care app from scratch with vet consultations, real-time chat (Socket.IO), e-shop with secure payments, Google Maps order tracking, pet services booking (sitting, grooming, cleaning), and event/meetup features.",
      tech: [
        "Flutter",
        "Firebase",
        "Google Maps",
        "Stripe",
        "Socket.IO",
        "REST APIs",
        "Clean Architecture",
        "Background Task",
      ],
      link: "https://play.google.com/store/apps/details?id=com.petshero.customer",
      links: [
        { label: "Customer App", url: "https://play.google.com/store/apps/details?id=com.petshero.customer" },
        { label: "Vendor App", url: "https://play.google.com/store/apps/details?id=com.petshero.vendor" },
      ],
      screenshots: [
        "/projects/pets-hero/1.png",
        "/projects/pets-hero/2.png",
        "/projects/pets-hero/3.png",
        "/projects/pets-hero/4.png",
        "/projects/pets-hero/5.png",
      ],
    },
    {
      name: "Reverie Global",
      description:
        "Next-Level Platform for Fun Activities and Making It Profitable. Reverie supports the extracurricular and sporting activities of talented and skilled people. Encouraging people to participate allows them to be chosen by professional scouts.",
      tech: [
        "Android",
        "Kotlin",
        "Java",
        "Jetpack Components",
        "Firebase",
        "Room",
        "MVVM",
        "Clean Architecture",
        "ExoPlayer",
        "CI/CD",
      ],
      link: "https://play.google.com/store/apps/details?id=com.datanet.reverie&hl=en",
      screenshots: ["/projects/reverie/1.png"],
    },
    {
      name: "Islam & Quran Learning Academy (Athan Academy)",
      description:
        "Education App for Islamic Learning. Athan Academy offers video-based courses, assignments, and quizzes to strengthen users' foundational knowledge. It connects users with experts for a deeper learning experience.",
      tech: [
        "Flutter",
        "Dart",
        "Bloc",
        "Firebase",
        "SQFLite",
        "Google IAP",
        "Mockito",
        "Unit Testing",
        "CI/CD",
      ],
      link: "https://play.google.com/store/apps/details?id=com.islamicfinder.alif&hl=en&gl=US",
    },
    {
      name: "Athan: Prayer Times & Al Quran",
      description:
        "15M+ Downloads - Islamic Lifestyle App. Athan simplifies your daily Islamic lifestyle through powerful features. Complete your Daily Goals and embark on a meaningful spiritual journey.",
      tech: [
        "Android",
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "Coroutines",
        "Flows",
        "RXJava",
        "LiveData",
        "Firebase",
        "Room",
        "MVVM",
        "MVI",
        "Clean Architecture",
        "CI/CD",
      ],
      link: "https://play.google.com/store/apps/details?id=com.athan&hl=en_US",
      screenshots: ["/projects/athan/1.png"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Karachi, PK",
      period: "2015 – 2019",
    },
    {
      degree: "Android Developer Certification",
      institution: "Aptech Institute",
      period: "Jun 2018 – Aug 2018",
    },
  ],
  connectMessage:
    "I'm passionate about building scalable, user-friendly mobile applications and always open to discussing new opportunities and collaborations. Feel free to reach out!",
} as const;
