import React from "react";
import {
  IoLogoApple,
  IoLogoAndroid,
  IoGlobeOutline,
  IoPhonePortraitOutline,
  IoLayersOutline,
  IoShieldCheckmarkOutline,
  IoPulseOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi";

const MobileWebDevelopment = () => {
  const techStack = [
    // Languages
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Go" },
    { name: "Rust" },
    { name: "Dart" },
    { name: "C#" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "Swift" },
    { name: "PHP" },
    { name: "Ruby" },

    // Frontend Frameworks & Libraries
    { name: "React" },
    { name: "Next.js" },
    { name: "Vue.js" },
    { name: "Nuxt.js" },
    { name: "Angular" },
    { name: "Svelte" },
    { name: "SvelteKit" },
    { name: "Astro" },
    { name: "Remix" },
    { name: "Gatsby" },
    { name: "SolidJS" },
    { name: "Qwik" },
    { name: "Preact" },
    { name: "Alpine.js" },
    { name: "htmx" },

    // Mobile Frameworks
    { name: "React Native" },
    { name: "Flutter" },
    { name: "Expo" },
    { name: "Ionic" },
    { name: "NativeScript" },
    { name: "SwiftUI" },
    { name: "Jetpack Compose" },

    // Styling Libraries
    { name: "Tailwind CSS" },
    { name: "SASS/SCSS" },
    { name: "Styled Components" },
    { name: "Emotion" },
    { name: "Material UI" },
    { name: "Chakra UI" },
    { name: "Ant Design" },
    { name: "shadcn/ui" },
    { name: "Radix UI" },
    { name: "Headless UI" },
    { name: "Bootstrap" },

    // State Management
    { name: "Redux" },
    { name: "Redux Toolkit" },
    { name: "Zustand" },
    { name: "Recoil" },
    { name: "Jotai" },
    { name: "MobX" },
    { name: "Pinia" },
    { name: "Vuex" },
    { name: "TanStack Query" },
    { name: "SWR" },
    { name: "Apollo Client" },

    // Backend Frameworks
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "NestJS" },
    { name: "Fastify" },
    { name: "Django" },
    { name: "Flask" },
    { name: "FastAPI" },
    { name: "Spring Boot" },
    { name: "ASP.NET Core" },
    { name: "Laravel" },
    { name: "Ruby on Rails" },
    { name: "Phoenix" },
    { name: "Actix" },
    { name: "Rocket" },

    // API Technologies
    { name: "GraphQL" },
    { name: "REST API" },
    { name: "tRPC" },
    { name: "WebSockets" },
    { name: "Socket.io" },
    { name: "gRPC" },

    // Databases & ORMs
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "SQLite" },
    { name: "Redis" },
    { name: "Prisma" },
    { name: "Drizzle" },
    { name: "TypeORM" },
    { name: "Sequelize" },
    { name: "Mongoose" },
    { name: "Knex.js" },

    // Authentication Libraries
    { name: "Auth0" },
    { name: "NextAuth.js" },
    { name: "Clerk" },
    { name: "Supabase Auth" },
    { name: "Firebase Auth" },
    { name: "JWT" },
    { name: "Passport.js" },
    { name: "bcrypt" },

    // Testing Libraries
    { name: "Jest" },
    { name: "Vitest" },
    { name: "Cypress" },
    { name: "Playwright" },
    { name: "Testing Library" },
    { name: "Storybook" },

    // Form Libraries
    { name: "React Hook Form" },
    { name: "Formik" },
    { name: "Zod" },
    { name: "Yup" },
    { name: "TanStack Form" },

    // Animation Libraries
    { name: "Framer Motion" },
    { name: "GSAP" },
    { name: "Lottie" },
    { name: "AutoAnimate" },

    // Chart Libraries
    { name: "D3.js" },
    { name: "Chart.js" },
    { name: "Recharts" },
    { name: "Victory" },
    { name: "Visx" },
    { name: "ECharts" },
    { name: "Highcharts" },

    // 3D & Visualization
    { name: "Three.js" },
    { name: "Babylon.js" },

    // Internationalization
    { name: "i18next" },
    { name: "react-i18next" },
    { name: "next-i18next" },
    { name: "FormatJS" },

    // CMS Libraries
    { name: "Sanity" },
    { name: "Contentful" },
    { name: "Strapi" },
    { name: "Payload CMS" },
    { name: "Directus" },

    // AI/ML Libraries
    { name: "OpenAI" },
    { name: "LangChain" },
    { name: "Hugging Face" },
    { name: "TensorFlow.js" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-4">
              <HiOutlineSparkles className="text-green-600" /> UI/UX Excellence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Industrial Power. <br />
              <span className="text-green-600">Consumer Simplicity.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mb-6">
              We build high-performance mobile and web applications that
              transform complex IIoT data into intuitive, actionable
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                Start a Project <HiOutlineArrowRight />
              </button>
              <div className="flex items-center gap-3 px-4 border-l border-gray-200">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center">
                    <IoLogoApple className="text-gray-600" size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center">
                    <IoLogoAndroid className="text-gray-600" size={14} />
                  </div>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Cross-Platform
                </p>
              </div>
            </div>
          </div>

          {/* Image Composition Area */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square flex items-center justify-center group">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-blue-50 rounded-3xl -rotate-3 scale-95 opacity-50"></div>

              {/* Web App Image */}
              <div className="relative w-[85%] aspect-video bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transform -translate-y-8 -translate-x-4 group-hover:-translate-y-10 transition-all">
                <div className="h-5 bg-gray-100 border-b border-gray-200 flex items-center gap-1 px-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <img
                  src="services/all-services/web-development.webp"
                  alt="Web Dashboard"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Mobile App Image */}
              <div className="absolute bottom-8 right-4 w-[30%] aspect-[9/19] bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-all">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-b-lg z-20"></div>
                <img
                  src="services/all-services/mobile-development.webp"
                  alt="Mobile App"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 left-8 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-gray-200 shadow-lg">
                <IoPulseOutline className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK SECTION - PILL STYLE WITH HASHTAGS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Languages, Frameworks & Libraries
            </h2>
            <p className="text-gray-600">
              Modern tech stack for enterprise-grade mobile and web applications
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="flex flex-wrap gap-2 justify-center">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all cursor-default"
              >
                <span className="text-green-600 mr-1">#</span>
                {tech.name}
              </span>
            ))}
          </div>

          {/* Tech Count */}
          <div className="text-center mt-6">
            <span className="text-xs text-gray-500">
              {techStack.length}+ languages, frameworks & libraries
            </span>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Enterprise Mobility Platforms
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Scalable, secure, and lightning-fast applications designed for the
            specific rigors of industrial environments.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {/* Mobile Development Card */}
          <div className="md:col-span-7 bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                  <IoPhonePortraitOutline size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Native Experience</h3>
                <p className="text-gray-400 text-sm mb-4">
                  iOS and Android applications with offline-first capabilities
                  for remote factory floors.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Flutter", "Swift", "Kotlin"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white/10 border border-white/10 rounded-full text-xs text-green-400"
                    >
                      #{t.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-800 aspect-[4/5] rounded-xl border border-gray-700 p-1 overflow-hidden">
                  <img
                    src="services/all-services/mobile-development.webp"
                    alt="Mobile App"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Web Platforms Card */}
          <div className="md:col-span-5 bg-green-600 rounded-2xl p-6 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <IoLayersOutline size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web Platforms</h3>
            <p className="text-green-50 text-sm mb-4">
              Responsive dashboards handling millions of data points with zero
              lag.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "Next.js", "TypeScript", "Node.js"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/20 rounded-full text-xs text-white"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Card */}
          <div className="md:col-span-12 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-green-600 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                <IoLayersOutline size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Plant360 Command Center
                </h4>
                <p className="text-sm text-gray-600">
                  Built with React, TypeScript, and Node.js • Reduced executive
                  response time by 40%
                </p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              View Project
            </button>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">
            Your Industrial Edge. <br />
            <span className="text-green-600">Just One Tap Away.</span>
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
            Book a UI Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default MobileWebDevelopment;
