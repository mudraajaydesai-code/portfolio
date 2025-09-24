export const mockData = {
  personal: {
    name: 'Mudra Ajay Desai',
    title: 'Data Analyst & Business Intelligence Expert',
    phone: '+1 (551) 358 – 5466',
    email: 'mudradesai6@gmail.com',
    linkedin: 'mudraajaydesai1995',
    summary: 'Results-driven Data Analytics Professional with 6+ years of proven leadership experience and a track record of delivering 15-18% performance improvements through strategic data insights. Expert in transforming complex datasets into actionable business intelligence that drives measurable outcomes and supports executive decision-making across diverse industries.'
  },

  about: {
    journey: `I am a data-driven professional with a powerful foundation in analytics, business intelligence, and strategic operations, distinguished by 6+ years of progressive leadership experience spanning education, project management, and business development. My expertise in SQL, Python, R, and advanced BI tools (Tableau, Looker Studio, Power BI) enables me to architect sophisticated data solutions that transform complex datasets into high-impact business intelligence.

    Through strategic internships with industry leaders like Fashinnovation Inc. and Fiducient Advisors, I've mastered the art of market research, financial operations analysis, and stakeholder engagement—consistently delivering measurable results in fast-paced, dynamic environments. My analytical prowess is complemented by proven project management skills and the ability to automate reporting systems that save organizations significant time and resources.

    Beyond technical excellence, I'm passionate about fostering the next generation of analytical thinkers through my volunteer work as a business coach with Build.org – IAM High School, where I guide students in developing entrepreneurial acumen and real-world problem-solving capabilities.

    Today, I leverage my unique blend of analytical expertise, leadership acumen, and collaborative mindset to drive data-driven transformation in organizations seeking to harness the power of analytics for strategic advantage and sustainable growth.`,
    
    highlights: [
      '6+ years of leadership and analytics experience',
      'Led teams of 25+ staff with 100% satisfaction ratings',
      'Achieved 18% increase in engagement through data-driven initiatives',
      'Fluent in English, Hindi, and Gujarati'
    ],

    personalGrowth: {
      title: "How My Experiences Shaped Me",
      experiences: [
        {
          title: "Building Resilience Through Remote Collaboration",
          company: "Fashinnovation Inc. Internship",
          description: "Working remotely taught me the importance of clear communication and self-discipline. Contributing to an 18% increase in engagement while working across time zones enhanced my ability to work independently and think strategically about business development.",
          skills: ["Remote Leadership", "Strategic Thinking", "Cross-Cultural Communication"]
        },
        {
          title: "Financial Acumen & Professional Networking",
          company: "Fiducient Adviser Internship", 
          description: "Exposure to financial modeling and client service operations broadened my analytical perspective beyond traditional data science. The mentorship sessions with senior leaders taught me the value of continuous learning and professional relationship building.",
          skills: ["Financial Analysis", "Professional Networking", "Mentorship"]
        },
        {
          title: "Giving Back & Leadership Development",
          company: "Build.org Volunteer Work",
          description: "Coaching high school students in entrepreneurship reminded me of my own journey and reinforced my passion for education. Teaching young minds to think analytically about business problems sharpened my ability to break down complex concepts into digestible insights.",
          skills: ["Mentoring", "Educational Leadership", "Problem Simplification"]
        }
      ],
      impact: "These diverse experiences have shaped me into a well-rounded professional who can adapt to various environments, lead with empathy, and communicate complex data insights to both technical and non-technical audiences. They've instilled in me the importance of continuous learning, giving back to the community, and maintaining a growth mindset in an ever-evolving field."
    }
  },

  skills: {
    technical: [
      { name: 'Python', level: 90, category: 'Programming' },
      { name: 'SQL', level: 85, category: 'Database' },
      { name: 'R', level: 80, category: 'Programming' },
      { name: 'Tableau', level: 85, category: 'Visualization' },
      { name: 'Excel/VBA', level: 95, category: 'Analysis' },
      { name: 'Machine Learning', level: 80, category: 'AI/ML' },
      { name: 'Statistics', level: 85, category: 'Analysis' },
      { name: 'Data Mining', level: 80, category: 'Analysis' }
    ],
    
    frameworks: [
      'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI'
    ],
    
    business: [
      { name: 'Team Leadership', level: 95 },
      { name: 'KPI Development', level: 90 },
      { name: 'Stakeholder Management', level: 90 },
      { name: 'Process Optimization', level: 85 },
      { name: 'Client Engagement', level: 95 },
      { name: 'Problem Solving', level: 90 }
    ]
  },

  projects: [
    {
      id: 1,
      title: 'ANALYSIS OF ADIDAS USA SALES DATA',
      organization: 'Long Island University',
      duration: '2024',
      description: 'Comprehensive analysis of Adidas USA sales data using advanced machine learning models to predict sales patterns and identify business opportunities.',
      
      objectives: [
        'Data Preparation & Cleaning: Removed duplicates, handled missing values, standardized categories',
        'Exploratory Data Analysis: Identified key trends across regions, products, and sales methods',
        'Data Modeling: Implemented RNN, LSTM, CNN, GRU, and Autoencoders for sequential sales patterns',
        'Visualization: Built interactive visualizations for sales distribution and profit analysis'
      ],
      
      insights: [
        'LSTM & RNN showed stronger performance for sequential forecasting tasks',
        'CNN was effective in capturing localized data patterns',
        'Regional and product-level trends highlighted pricing strategy opportunities'
      ],
      
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib', 'SQL', 'Tableau'],
      metrics: { accuracy: '85%', models: '5', insights: '15+' }
    },
    
    {
      id: 2,
      title: 'Housing Data Analysis – Real Estate Trends Exploration',
      organization: 'Long Island University',
      duration: '2024',
      description: 'Comprehensive analysis of housing market trends exploring factors influencing property sales using advanced statistical models.',
      
      objectives: [
        'Identify top-performing towns by mean sales price and household income',
        'Explore factors influencing property sales using regression models',
        'Conduct text analysis of property descriptions to reveal common themes'
      ],
      
      insights: [
        'Windsor Locks recorded highest mean household income; Woodbridge had highest mean sales price',
        '2017 and 2010 showed peak gaps between assessed value and sale price',
        '2019 showed larger living spaces with lower cost per sq. ft',
        'Text analysis revealed "location" and "staff" as key customer focus areas'
      ],
      
      technologies: ['Python', 'R', 'Statistical Analysis', 'Text Mining', 'Visualization'],
      metrics: { correlation: '0.89', towns: '50+', models: '3' }
    },
    
    {
      id: 3,
      title: 'Predicting Sleep Duration Using Lifestyle & Health Indicators',
      organization: 'Long Island University', 
      duration: '2024',
      description: 'Data-driven analysis to identify lifestyle and health indicators that most strongly influence sleep duration and quality.',
      
      objectives: [
        'Identify key lifestyle and health predictors of sleep duration',
        'Build predictive models to forecast sleep patterns',
        'Provide data-driven recommendations for sleep improvement'
      ],
      
      insights: [
        'Stress Level showed strong negative effect on sleep duration (p < 0.001)',
        'Heart Rate had negative correlation with sleep quality (p < 0.001)', 
        'Physical Activity showed positive impact on sleep (p = 0.003)',
        'Age demonstrated positive correlation with sleep duration (p < 0.001)'
      ],
      
      technologies: ['Python', 'Statistical Modeling', 'Regression Analysis', 'Tableau', 'Excel'],
      metrics: { r_squared: '0.85', records: '10,000+', accuracy: '82%' }
    }
  ],

  experience: [
    {
      company: 'Fashinnovation Inc.',
      position: 'Business Development Intern',
      duration: 'June 2025 - September 2025',
      location: 'Remote',
      achievements: [
        'Supported community engagement and client outreach initiatives',
        'Contributed to marketing initiatives, leading to 18% increase in engagement',
        'Collaborated with leadership teams on business proposals and investor decks'
      ]
    },
    {
      company: 'Fiducient Adviser',
      position: 'Summer Enrichment Intern',
      duration: 'June 2025 - July 2025',
      location: 'Chicago, IL',
      achievements: [
        'Gained exposure to financial modeling, research, and client service operations',
        'Participated in investment fundamentals and consulting practice workshops',
        'Engaged in networking and mentorship sessions with senior leaders'
      ]
    },
    {
      company: 'Shree Vidyanagar English Medium School',
      position: 'Primary Teacher/Coordinator',
      duration: '2018-2024',
      location: 'Ahmedabad, India',
      achievements: [
        'Led and motivated teams of 25+ staff members',
        'Enhanced performance through KPI tracking, improving outcomes by 15% year-over-year',
        'Organized large-scale community events and stakeholder engagement',
        'Achieved 100% satisfaction ratings from parents and stakeholders'
      ]
    }
  ],

  certifications: [
    {
      name: 'Data Analytics Job Simulation',
      issuer: 'Deloitte Australia',
      date: 'April 2025',
      skills: ['Data Analysis', 'Business Intelligence', 'Consulting']
    },
    {
      name: 'Tata Data Visualization: Empowering Business with Insights',
      issuer: 'Tata Group',
      date: 'April 2025',
      skills: ['Data Visualization', 'Tableau', 'Business Insights']
    },
    {
      name: 'BCG Data Science Job Simulation',
      issuer: 'Boston Consulting Group',
      date: 'May 2025',
      skills: ['Machine Learning', 'Predictive Analytics', 'Strategy']
    }
  ],

  education: [
    {
      degree: 'Master of Data Analytics and Strategic Business Intelligence',
      school: 'Long Island University',
      location: 'New York, USA',
      gpa: '3.89',
      graduation: 'December 2025'
    },
    {
      degree: 'Masters of Commerce',
      school: 'Gujarat University',
      location: 'Ahmedabad, Gujarat',
      gpa: '3.20',
      graduation: 'May 2017'
    }
  ],

  contact: {
    phone: '+1 (551) 358 – 5466',
    email: 'mudradesai6@gmail.com',
    linkedin: 'mudraajaydesai1995',
    location: 'New York, USA'
  }
};