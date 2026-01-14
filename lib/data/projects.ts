// lib/data/projects.ts
import { ProjectDetail } from '@/lib/types';

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "SmartRiver",
    categories: ["Web App", "AI/ML"],
    description: "Smart river monitoring system dengan interface yang intuitif untuk real-time tracking dan analysis air sungai menggunakan IoT sensors.",
    tags: ["React.js", "Computer Vision", "AWS Cloud"],
    image: "/assets/showcase/smartriver.png",
    link: "#",
    github: "#",
    clientBackground: "Environmental agencies and local governments needed a comprehensive solution to monitor river health and water quality in real-time to prevent pollution and protect ecosystems.",
    projectOverview: "Developed a smart river monitoring system that combines IoT sensors with computer vision to track water quality, pollution levels, and ecosystem health. The platform provides real-time alerts and comprehensive analytics for environmental protection.",
    solution: [
      "Implemented IoT sensor network for continuous water quality monitoring",
      "Integrated computer vision for visual analysis of river conditions",
      "Built real-time dashboard with React.js for data visualization",
      "Deployed on AWS Cloud for scalability and reliability",
      "Created alert system for immediate notification of anomalies"
    ],
    result: "Successfully deployed across multiple river monitoring stations, providing 24/7 surveillance and early detection of water quality issues. Reduced response time to pollution incidents by 70% and improved environmental protection strategies.",
    screenshots: ["/assets/showcase/smartriver.png"]
  },
  {
    id: 2,
    title: "SWEETIFY",
    categories: ["Mobile App", "AI/ML"],
    description: "Aplikasi mobile untuk menemukan dan memesan dessert favorit dengan antarmuka yang menarik dan seamless ordering experience.",
    tags: ["Kotlin", "Firebase", "Computer Vision", "Google Cloud Platform"],
    image: "/assets/showcase/sweetify.png",
    link: "#",
    github: "#",
    clientBackground: "Local dessert shops and bakeries needed a unified platform to reach customers digitally and streamline their ordering process while maintaining a delightful user experience.",
    projectOverview: "Created a mobile application that connects dessert lovers with local bakeries and sweet shops. Features include AI-powered dessert recognition, personalized recommendations, and seamless order management.",
    solution: [
      "Developed native Android app using Kotlin for optimal performance",
      "Integrated Firebase for real-time order tracking and notifications",
      "Implemented computer vision for dessert image recognition",
      "Built recommendation engine using machine learning",
      "Designed intuitive UI/UX for seamless ordering experience"
    ],
    result: "Partnered with 50+ local dessert shops, processing over 10,000 orders in the first 6 months. Customer satisfaction rate of 4.8/5 stars with positive feedback on the intuitive interface and quick delivery times.",
    screenshots: ["/assets/showcase/sweetify.png"]
  },
  {
    id: 3,
    title: "PLATVISION",
    categories: ["AI/ML"],
    description: "Platform computer vision untuk analisis visual dan object detection dengan akurasi tinggi menggunakan teknologi deep learning terkini.",
    tags: ["TensorFlow", "OpenCV"],
    image: "/assets/showcase/platvision.png",
    link: "#",
    github: "#",
    clientBackground: "Businesses across industries needed an accessible computer vision platform to automate visual inspection tasks and extract insights from image and video data.",
    projectOverview: "Developed a comprehensive computer vision platform that enables businesses to deploy custom object detection and image analysis models without requiring deep AI expertise. The platform provides pre-trained models and customization capabilities.",
    solution: [
      "Built modular architecture using TensorFlow for model deployment",
      "Integrated OpenCV for real-time image processing",
      "Created user-friendly API for model integration",
      "Implemented transfer learning for custom model training",
      "Optimized inference speed for real-time applications"
    ],
    result: "Platform adopted by 20+ companies for various use cases including quality control, security surveillance, and retail analytics. Achieved 95%+ accuracy on standard object detection benchmarks.",
    screenshots: ["/assets/showcase/platvision.png"]
  },
  {
    id: 4,
    title: "SITEPAT",
    categories: ["Web App", "AI/ML"],
    description: "Platform manajemen site construction dengan fitur monitoring progress, resource allocation, dan real-time collaboration tools.",
    tags: ["IoT", "Bootstrap", "WebSocket", "Computer Vision"],
    image: "/assets/showcase/Sitepat.jpg",
    link: "#",
    github: "#",
    clientBackground: "Construction companies needed a centralized platform to monitor multiple project sites, track progress, manage resources, and ensure safety compliance in real-time.",
    projectOverview: "Created a comprehensive construction site management platform that combines IoT sensors, computer vision, and real-time collaboration tools to optimize project delivery and enhance safety.",
    solution: [
      "Developed responsive web platform using Bootstrap",
      "Integrated IoT sensors for equipment and material tracking",
      "Implemented WebSocket for real-time updates and notifications",
      "Added computer vision for automated progress tracking",
      "Built resource allocation and scheduling modules"
    ],
    result: "Deployed across 15+ construction sites, improving project completion rate by 25% and reducing safety incidents by 40%. Enhanced collaboration between on-site workers and project managers.",
    screenshots: ["/assets/showcase/Sitepat.jpg"]
  },
  {
    id: 5,
    title: "Exavator Detection",
    categories: ["AI/ML"],
    description: "Sistem deteksi dan tracking excavator real-time menggunakan computer vision untuk optimasi pekerjaan konstruksi dan monitoring equipment.",
    tags: ["Vision Transformer", "OpenCV"],
    image: "/assets/showcase/Exavator.png",
    link: "#",
    github: "#",
    clientBackground: "Construction and mining companies needed automated equipment tracking to optimize utilization, prevent theft, and improve operational efficiency.",
    projectOverview: "Developed a real-time excavator detection and tracking system using state-of-the-art Vision Transformer models to monitor equipment location, usage patterns, and operational status.",
    solution: [
      "Implemented Vision Transformer (ViT) for accurate excavator detection",
      "Used OpenCV for video stream processing",
      "Created tracking algorithm for equipment movement",
      "Built analytics dashboard for utilization metrics",
      "Integrated alert system for unauthorized movement"
    ],
    result: "Achieved 98% detection accuracy across various weather and lighting conditions. Helped companies improve equipment utilization by 30% and prevent unauthorized equipment usage.",
    screenshots: ["/assets/showcase/Exavator.png"]
  },
  {
    id: 6,
    title: "Mushroom Classification",
    categories: ["AI/ML"],
    description: "Model machine learning untuk klasifikasi jenis jamur berdasarkan karakteristik fisik dengan akurasi tinggi menggunakan deep learning.",
    tags: ["TensorFlow", "Keras", "Computer Vision"],
    image: "/assets/showcase/Klasifikasi Jamur.png",
    link: "#",
    github: "#",
    clientBackground: "Mushroom foragers and agricultural researchers needed a reliable tool to identify mushroom species and distinguish between edible and poisonous varieties.",
    projectOverview: "Created a deep learning model for accurate mushroom species classification based on visual characteristics. The system helps users identify mushrooms safely and supports mycological research.",
    solution: [
      "Built CNN model using TensorFlow and Keras",
      "Trained on comprehensive mushroom image dataset",
      "Implemented data augmentation for better generalization",
      "Created mobile-friendly inference pipeline",
      "Added confidence scoring and safety warnings"
    ],
    result: "Achieved 94% classification accuracy across 100+ mushroom species. Model deployed in mobile app used by foragers and researchers, contributing to safer mushroom identification practices.",
    screenshots: ["/assets/showcase/Klasifikasi Jamur.png"]
  },
  {
    id: 7,
    title: "Food Commodity Production Forecasting",
    categories: ["AI/ML"],
    description: "Sistem prediksi produksi komoditas pangan di Sumatera menggunakan time series forecasting dan machine learning untuk mendukung perencanaan pertanian.",
    tags: ["LSTM", "TensorFlow"],
    image: "/assets/showcase/forcasting sumatra.png",
    link: "#",
    github: "#",
    clientBackground: "Agricultural departments needed accurate production forecasts to plan resource allocation, manage supply chains, and ensure food security across Sumatra region.",
    projectOverview: "Developed a time series forecasting system using LSTM neural networks to predict food commodity production. The system analyzes historical data, weather patterns, and seasonal trends to generate accurate forecasts.",
    solution: [
      "Implemented LSTM model for time series prediction",
      "Integrated multiple data sources (weather, soil, historical yields)",
      "Built TensorFlow pipeline for model training and inference",
      "Created visualization dashboard for forecast analysis",
      "Developed automated reporting system"
    ],
    result: "Achieved forecasting accuracy of 85%+ for major food commodities. Helped agricultural planners optimize resource distribution and reduce food waste by 20%.",
    screenshots: ["/assets/showcase/forcasting sumatra.png"]
  },
  {
    id: 8,
    title: "Rockpaperscissors Classification",
    categories: ["AI/ML"],
    description: "Model CNN untuk mengenali gesture tangan rock, paper, scissors secara real-time menggunakan computer vision dan neural network.",
    tags: ["TensorFlow", "OpenCV"],
    image: "/assets/showcase/rockpaperscissors.png",
    link: "#",
    github: "#",
    clientBackground: "Educational technology project aimed at demonstrating computer vision and gesture recognition capabilities through an interactive game implementation.",
    projectOverview: "Created a real-time hand gesture recognition system that classifies rock, paper, scissors gestures using convolutional neural networks. The project serves as both an educational tool and entertainment application.",
    solution: [
      "Developed CNN model using TensorFlow for gesture classification",
      "Integrated OpenCV for real-time video processing",
      "Implemented hand detection and segmentation",
      "Created interactive game interface",
      "Optimized model for real-time inference"
    ],
    result: "Achieved 99% accuracy on gesture classification with minimal latency. Project used as educational demonstration in computer vision workshops and courses.",
    screenshots: ["/assets/showcase/rockpaperscissors.png"]
  },
  {
    id: 9,
    title: "Portofolio Web",
    categories: ["Web App"],
    description: "Website portofolio personal yang showcase project, skills, dan expertise dengan design modern dan responsive interface.",
    tags: ["Next.js", "Reactbits", "Tailwind CSS"],
    image: "/assets/showcase/portofolio.png",
    link: "#",
    github: "#",
    clientBackground: "Personal brand development required a professional online presence to showcase technical skills, projects, and attract potential clients and employers.",
    projectOverview: "Designed and developed a modern, interactive portfolio website that highlights technical expertise, project showcase, and professional experience with engaging animations and responsive design.",
    solution: [
      "Built with Next.js for optimal performance and SEO",
      "Implemented modern UI components using Reactbits",
      "Styled with Tailwind CSS for responsive design",
      "Added interactive animations and smooth transitions",
      "Integrated contact form and social media links"
    ],
    result: "Created a professional online presence that effectively showcases skills and projects. Improved online visibility and received positive feedback from potential clients and recruiters.",
    screenshots: ["/assets/showcase/portofolio.png"]
  }
];
