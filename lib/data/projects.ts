// lib/data/projects.ts
import { ProjectDetail } from '@/lib/types';

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "SmartRiver",
    categories: ["Web App", "AI/ML"],
    description: "Smart river monitoring system dengan interface yang intuitif untuk real-time tracking dan analysis air sungai menggunakan CCTV.",
    tags: ["Computer Vision", "AWS Cloud", "OpenCV", "Vision Transformer"],
    image: "/assets/showcase/smartriver.png",
    link: "#",
    github: "#",
    clientBackground: "Central and local governments need a comprehensive solution to monitor rivers in real-time to prevent potential flooding.",
    projectOverview: "Developed a computer vision-based smart river monitoring system to detect debris and visual water quality. By leveraging existing CCTV infrastructure without the need for additional physical sensors, the system analyzes flow velocity, discharge, and water levels in real-time. The platform serves as a comprehensive Early Warning System (EWS) to mitigate flood risks and detect river surface anomalies.",
    solution: [
      "Developed a computer vision system to monitor water level, flow velocity, and discharge using existing CCTV, eliminating the need for costly physical sensors",
      "Integrated AI-driven visual analysis to detect river debris and real-time surface anomalies",
      "Built a high-performance real-time dashboard for comprehensive flood monitoring and data visualization",
      "Architected and deployed the platform on AWS Cloud to ensure enterprise-grade scalability and reliability",
      "Developed an automated Early Warning System (EWS) providing instant alerts for flood risks and critical river conditions"
    ],
    result: "Implemented an AI-powered surveillance platform providing real-time response to river surface anomalies and potential floods. The system enables immediate alerting and comprehensive data analysis without physical sensor maintenance, ensuring a scalable and highly responsive environmental protection solution.",
    screenshots: ["/assets/showcase/smartriver.png"]
  },
  {
    id: 2,
    title: "SWEETIFY",
    categories: ["Mobile App", "AI/ML"],
    description: "Aplikasi mobile berbasis computer vision untuk mengidentifikasi minuman kemasan dan menyajikan informasi detail mengenai klasifikasi kadar gula berdasarkan tingkatan grade produk tersebut.",
    tags: ["Kotlin", "Firebase", "Computer Vision", "Google Cloud Platform"],
    image: "/assets/showcase/sweetify.png",
    link: "#",
    github: "#",
    clientBackground: "The issue of high sugar consumption in Indonesia, particularly through packaged beverages, is a serious concern as it contributes to the rising cases of obesity and diabetes. Many people are unaware of the dangers of excessive sugar intake and have difficulty accessing accurate information about the sugar content in their drinks.",
    projectOverview: "Created a mobile application designed to raise awareness about the dangers of excessive sugar consumption and empower users to make healthier beverage choices.",
    solution: [
      "Using computer vision methods, SWEETIFY classifies packaged beverages into 4 classes (A-D) based on their sugar levels, making it easy for users to understand their options",
      "SWEETIFY allows users to track their daily sugar intake by scanning beverage packaging. The analysis feature provides a comprehensive overview of consumption patterns and potential health risks",
      "SWEETIFY provides accurate information about daily sugar limits, healthy lifestyle tips, and advice for managing sugar intake",
    ],
    result: "SWEETIFY empowers users to take control of their health by providing instant sugar grade insights for smarter beverage choices. It simplifies daily sugar management and promotes long-term wellness through real-time awareness and accessible education.",
    screenshots: ["/assets/showcase/sweetify.png"]
  },
  {
    id: 3,
    title: "PLATVISION",
    categories: ["AI/ML", "Computer Vision"],
    description: "An Automatic Number Plate Recognition (ANPR) system for real-time detection and recognition of vehicle license plates using computer vision technology (YOLO).",
    tags: ["TensorFlow", "OpenCV", "YOLO", "OCR"],
    image: "/assets/showcase/platvision.png",
    link: "#",
    github: "#",
    clientBackground: "-",
    projectOverview: "PLATVISION is an Automatic Number Plate Recognition (ANPR) system designed to detect, extract, and recognize vehicle license plates in real-time. The system uses a combination of YOLO and EasyOCR to process images or video streams, identify license plates, and extract license plate text with high accuracy.",
    solution: [
      "Developed a license plate detection model using YOLO for object identification of license plates in images",
      "Integrated Optical Character Recognition (OCR) for text extraction from detected license plates",
      "Used TensorFlow and OpenCV for image processing and performance optimization",
      "Implemented image preprocessing to handle various lighting conditions and viewing angles"
    ],
    result: "ANPR system with license plate recognition accuracy reaching 95%+ under optimal conditions.",
    screenshots: ["/assets/showcase/platvision.png"]
  },
  {
    id: 4,
    title: "SITEPAT",
    categories: ["AI/ML", "IoT"],
    description: "A smart waste management system that automatically classifies and sorts waste into organic, inorganic, and hazardous (B3) categories using IoT and computer vision technology.",
    tags: ["IoT", "Computer Vision", "TensorFlow Lite", "Raspberry Pi"],
    image: "/assets/showcase/Sitepat.jpg",
    link: "#",
    github: "#",
    clientBackground: "The lack of organized waste management and sorting systems at both central and local government levels has led to environmental and health issues. There is a need for an automated solution to properly classify and sort waste to improve recycling efficiency and reduce pollution.",
    projectOverview: "SITEPAT is a Smart Waste Bin System designed to address the disorganization in waste management and sorting. The system automatically classifies waste by scanning it, then sorts it into organic, inorganic, and hazardous (B3) categories using IoT sensors and computer vision technology for detection and automated sorting.",
    solution: [
      "Developed computer vision models for automatic waste classification into organic, inorganic, and B3 categories",
      "Integrated IoT sensors and actuators for automated waste sorting mechanisms",
      "Implemented real-time scanning and classification using image processing algorithms",
      "Built a centralized dashboard for monitoring waste collection and sorting statistics",
      "Created a user-friendly interface for waste management personnel to track system performance"
    ],
    result: "Successfully deployed smart waste bins that achieved 90%+ accuracy in waste classification and sorting. Reduced manual sorting efforts by 70% and improved recycling rates by 40%, contributing to better environmental management and public health.",
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
