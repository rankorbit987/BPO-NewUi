import ContactUsButton from "@/app/UI/Buttons/contactusBtn";


const servicesData = [
  {
    title: "Automation AI Solutions",
    content: [
      {
        title: "Automation AI Solutions",
        description: "Automation is not just about speeding up tasks. We create real conversations that help your customers instantly. Our AI understands, responds, and interacts with your customers across voice and chat channels, providing natural and smooth conversations without delays. From instant call handling to 24/7 chatbot support, our automation ensures faster service, happier customers, and scalable operations."
      },
      {
        title: "Calling AI",
        description: "Incoming calls get answered instantly. Our voice AI listens, responds, and handles common questions or routes complex calls to the right team. No more long hold times. Your customers feel heard from the first ring."
      },
      {
        title: "Website Integrated AI (Chatbots)",
        description: "Visitors want help now. Our chatbots provide instant answers, help customers navigate your site, book appointments, and capture leads, all while feeling personal and helpful. They work 24/7, even when your team sleeps."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-blue-400",
    activeColor: "bg-blue-400",
    caseStudies: [
      { image: "/images/ServiceCardsImages/imag1.webp", label: "CASE STUDY", title: "Streamlining Customer Support for a National Retailer" },
      { image: "/images/ServiceCardsImages/imag2.webp", label: "CASE STUDY", title: "Back-Office Optimization for a Financial Services Provider" },
      { image: "/images/ServiceCardsImages/imag3.webp", label: "CASE STUDY", title: "AI Chatbot Deployment for Healthcare Appointment Booking" },
      { image: "/images/ServiceCardsImages/imag4.webp", label: "CASE STUDY", title: "Global Voice AI Call Center Rollout" }
    ]
  },

  {
    title: "Customer Support",
    content: [
      {
        title: "Customer Support Services",
        description: "Our agents don’t read scripts — they listen, care, and solve problems. We handle your phone calls, emails, and chats with empathy and patience, treating every interaction as a chance to build trust. With training, quality checks, and continuous feedback, your customers always feel like they're speaking with your in-house team."
      },
      {
        title: "Angry Customer Handling",
        description: "We calm frustrated customers quickly and turn negative experiences into loyalty."
      },
      {
        title: "Confused Customer Assistance",
        description: "We patiently guide confused customers and ensure they find solutions easily."
      },
      {
        title: "Happy Customer Engagement",
        description: "We reinforce positive experiences, turning satisfied customers into long-term advocates."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-red-400",
    activeColor: "bg-red-400",
    caseStudies: [
      { image: "/images/ServiceCardsImages/imag1.webp", label: "CASE STUDY", title: "Multichannel Support Expansion for an E-commerce Platform" },
      { image: "/images/ServiceCardsImages/imag2.webp", label: "CASE STUDY", title: "Invoice Processing Overhaul for a Global Manufacturer" },
      { image: "/images/ServiceCardsImages/imag3.webp", label: "CASE STUDY", title: "24/7 Customer Support Launch for International Airline" }
    ]
  },

  {
    title: "Virtual Assistant",
    content: [
      {
        title: "Virtual Assistance Services",
        description: "Our virtual assistants handle all the small but critical tasks, keeping your schedule, inbox, and workload organized. From booking meetings to following up on invoices and managing research, we free your time so you can focus on growth while we handle the details."
      },
      {
        title: "Schedule & Calendar Management",
        description: "We manage your appointments, meetings, and deadlines, keeping your day smooth and predictable."
      },
      {
        title: "Inbox & Communication Management",
        description: "We handle emails, follow-ups, and communication tasks, ensuring timely responses and organization."
      },
      {
        title: "Task Execution & Research",
        description: "We take care of repetitive tasks and detailed research so you stay focused on core business decisions."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-green-400",
    activeColor: "bg-green-400",
    caseStudies: [
      { image: "/images/ServiceCardsImages/imag1.webp", label: "CASE STUDY", title: "Scalable Data Entry Solution for a Healthcare Network" },
      { image: "/images/ServiceCardsImages/imag2.webp", label: "CASE STUDY", title: "Back-Office Process Automation for a Financial Services Provider" },
      { image: "/images/ServiceCardsImages/imag3.webp", label: "CASE STUDY", title: "Virtual Assistant Services for Real Estate Firm" },
      { image: "/images/ServiceCardsImages/imag4.webp", label: "CASE STUDY", title: "Remote Admin Support for Tech Startups" },
      { image: "/images/ServiceCardsImages/imag5.webp", label: "CASE STUDY", title: "Appointment Coordination for Medical Clinics" }
    ]
  },

  {
    title: "Appointment Setting",
    content: [
      {
        title: "Appointment Setting Services",
        description: "We go beyond making calls. Our team studies your product, learns your pitch, qualifies leads, and books appointments that turn into real sales conversations. Every outreach is tailored and genuine. No scripts. No pushy tactics. Just meaningful conversations that move your sales forward."
      },
      {
        title: "Lead Qualification",
        description: "We pre-qualify prospects, ensuring your sales team meets only with highly relevant leads."
      },
      {
        title: "Tailored Pitching",
        description: "Our callers approach every prospect like part of your sales team, using your unique messaging."
      },
      {
        title: "Calendar Booking",
        description: "We handle scheduling and confirmations to keep your sales calendar full and organized."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-yellow-400",
    activeColor: "bg-yellow-400",
    caseStudies: [
      { image: "/images/ServiceCardsImages/imag1.webp", label: "CASE STUDY", title: "Appointment Setting Success for SaaS Platform Expansion" },
      { image: "/images/ServiceCardsImages/imag2.webp", label: "CASE STUDY", title: "Lead Conversion Boost for B2B Service Provider" },
      { image: "/images/ServiceCardsImages/imag3.webp", label: "CASE STUDY", title: "Outreach Strategy for International Consulting Firm" },
      { image: "/images/ServiceCardsImages/imag4.webp", label: "CASE STUDY", title: "Cold Call Appointment Growth for Insurance Brokerage" }
    ]
  },

  {
    title: "Marketing Campaigns",
    content: [
      {
        title: "Marketing Campaign Services",
        description: "We design, build, and optimize targeted marketing campaigns that get your message in front of the right audience. From email to social ads, we handle the entire campaign lifecycle with constant tracking and improvement. Our creative, data-driven approach fuels lead generation and sales growth."
      },
      {
        title: "Email Campaigns",
        description: "We craft sharp, effective email blasts that engage your audience and drive conversions."
      },
      {
        title: "Social Media Advertising",
        description: "We run paid social ad campaigns across platforms, reaching audiences where they scroll and click."
      },
      {
        title: "Funnel Building & Optimization",
        description: "We design complete sales funnels, track metrics, and refine strategies for maximum lead flow."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-purple-400",
    activeColor: "bg-purple-400",
    caseStudies: [
      { image: "/images/ServiceCardsImages/imag1.webp", label: "CASE STUDY", title: "Lead Generation Campaign for Tech Startup" },
      { image: "/images/ServiceCardsImages/imag2.webp", label: "CASE STUDY", title: "Multichannel Marketing Rollout for National Franchise" },
      { image: "/images/ServiceCardsImages/imag3.webp", label: "CASE STUDY", title: "Paid Ad Conversion Optimization for SaaS Company" },
      { image: "/images/ServiceCardsImages/imag4.webp", label: "CASE STUDY", title: "Email Automation Campaign for eCommerce Brand" },
      { image: "/images/ServiceCardsImages/imag5.webp", label: "CASE STUDY", title: "Social Media Growth Strategy for Global Apparel Brand" }
    ]
  },

  {
    title: "Back-Office Optimization",
    content: [
      {
        title: "Process Optimization",
        description: "We identify and streamline inefficient back-office operations. Through automation and smarter workflows, we free your team to focus on growth and client service."
      },
      {
        title: "Invoice Processing Automation",
        description: "We automate validation and reporting processes, reduce errors, and improve payment cycles for stable cash flow."
      },
      {
        title: "Data Entry & Verification",
        description: "Our team ensures high accuracy and speed in data entry, reducing errors and improving reporting reliability."
      }
    ],
    buttons: <ContactUsButton />,
    hoverColor: "hover:bg-teal-400",
    activeColor: "bg-teal-400",
    caseStudies: [
      { image: "/images/ServiceCardsImages/imag1.webp", label: "CASE STUDY", title: "Invoice Processing Overhaul for a Global Manufacturer" },
      { image: "/images/ServiceCardsImages/imag2.webp", label: "CASE STUDY", title: "Data Entry Automation for Healthcare Network" },
      { image: "/images/ServiceCardsImages/imag3.webp", label: "CASE STUDY", title: "Back-Office Workflow Automation for SaaS Enterprise" }
    ]
  }
];

export default servicesData;
