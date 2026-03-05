import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  ShieldCheck,
  Database,
  BarChart3,
  Bot,
  MoveRight,
  Cloud,
  Server,
  HardDrive,
  Network,
  Layers,
  Zap,
  RefreshCw,
  Filter,
  Link2,
  FileJson,
  Grid3x3,
  Clock,
  TrendingUp,
  PieChart,
  Workflow,
  GitMerge,
  Cpu,
  Box,
  Code,
  GitBranch,
  Container,
  Activity,
  Settings,
  FileText,
  LineChart,
  Eye,
  Binary,
  Rocket,
} from "lucide-react";

const DataIntegrationPage = () => {
  const benefits = [
    {
      title: "No data silos",
      description:
        "Our data integration support breaks down barriers between departments, enabling consistent and integrated data access across your organization. We help you implement and maintain integration solutions that reduce errors and improve decision-making.",
    },
    {
      title: "Quick access to data",
      description:
        "We provide expert support for data integration platforms, helping you efficiently manage data flows, extract and process datasets without manual intervention. This eliminates inefficiencies, reduces costs, and minimizes human error.",
    },
    {
      title: "Better system integration",
      description:
        "Our experts help you consolidate data in one place ensuring better information quality for both people and systems. We support smooth data migration and ensure business continuity throughout the integration process.",
    },
    {
      title: "Higher quality data",
      description:
        "We help you maintain consistent data formats, eliminate duplicates, and ensure data accuracy leading to greater precision in work. This enables using data to streamline business processes, such as personalizing customer experiences.",
    },
    {
      title: "Faster and more accurate insights",
      description:
        "Our support for integrating relevant data sources and formats accelerates analysis and increases insight precision. We help identify threats and opportunities, and highlight areas for improvement.",
    },
    {
      title: "Shorter time-to-market",
      description:
        "With our expertise in data integration platforms and automated processes, businesses can speed up access to insights and accelerate their ETL pipelines. This allows companies to deliver products and services before the competition.",
    },
  ];

  const services = [
    {
      title: "AI/ML & Gen AI Support",
      description:
        "Expert support for AI/ML and Generative AI implementations, helping you leverage these technologies to tackle your unique challenges and unlock new opportunities for growth.",
      gradient: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      icon: (
        <BrainCircuit className="w-20 h-20 opacity-20 absolute right-4 top-4 text-white" />
      ),
    },
    {
      title: "Data Governance Support",
      description:
        "Comprehensive support for data governance frameworks, ensuring data integrity, compliance, and strategic utilization across your organization with industry best practices.",
      gradient: "from-green-600 to-teal-600",
      bgColor: "bg-teal-50",
      icon: (
        <ShieldCheck className="w-20 h-20 opacity-20 absolute right-4 top-4 text-white" />
      ),
    },
    {
      title: "Data Integration Support",
      description:
        "Expert assistance in implementing and maintaining data integration solutions, helping you turn complex data landscapes into coherent, actionable intelligence for strategic decision-making.",
      gradient: "from-green-600 to-cyan-600",
      bgColor: "bg-cyan-50",
      icon: (
        <Database className="w-20 h-20 opacity-20 absolute right-4 top-4 text-white" />
      ),
    },
    {
      title: "Data Analytics Support",
      description:
        "Professional support for data analytics platforms and tools, helping you elevate your analytics capabilities and derive meaningful insights from your data assets.",
      gradient: "from-green-600 to-blue-600",
      bgColor: "bg-blue-50",
      icon: (
        <BarChart3 className="w-20 h-20 opacity-20 absolute right-4 top-4 text-white" />
      ),
    },
    {
      title: "RPA Support",
      description:
        "Expert assistance in implementing and managing Robotic Process Automation solutions, helping you streamline processes and liberate your team from repetitive tasks.",
      gradient: "from-green-600 to-indigo-600",
      bgColor: "bg-indigo-50",
      icon: (
        <Bot className="w-20 h-20 opacity-20 absolute right-4 top-4 text-white" />
      ),
    },
    {
      title: "Migration Support",
      description:
        "Comprehensive support for data and application migration projects, ensuring your workflows transition smoothly and efficiently with minimal disruption.",
      gradient: "from-green-600 to-lime-600",
      bgColor: "bg-lime-50",
      icon: (
        <MoveRight className="w-20 h-20 opacity-20 absolute right-4 top-4 text-white" />
      ),
    },
  ];

  const techStackData = {
    "DATA LAKES AND LAKEHOUSES": [
      {
        title: "Google Cloud Storage",
        desc: "Expert support for implementing and managing data storage in Google Cloud, enabling flexible management of large datasets and supporting advanced analytics.",
      },
      {
        title: "Azure Data Lake Storage",
        desc: "Professional support for Microsoft's scalable data lake solution, helping you store and analyze structured and unstructured data efficiently.",
      },
      {
        title: "Amazon S3",
        desc: "Comprehensive support for Amazon's cloud storage service, ensuring secure data storage with virtually unlimited scalability.",
      },
      {
        title: "Databricks",
        desc: "Expert assistance in implementing Databricks for unified data analytics, combining data engineering, analytics, and machine learning.",
      },
      {
        title: "Microsoft Fabric",
        desc: "Support for Microsoft's integrated analytics environment, combining Power BI, Data Factory, and Synapse for the full data lifecycle.",
      },
      {
        title: "Google BigLake",
        desc: "Professional support for BigLake implementations, combining data warehouse and data lake capabilities for seamless data processing.",
      },
    ],
    "ETL/ELT PIPELINES AND DATA STREAMING": [
      {
        title: "Apache Kafka",
        desc: "Expert support for Kafka implementations, helping you build real-time data pipelines and streaming applications.",
      },
      {
        title: "Apache Spark",
        desc: "Professional assistance with Spark for large-scale data processing, streaming, and machine learning workloads.",
      },
      {
        title: "Apache Flink",
        desc: "Support for stateful computations over data streams, enabling real-time analytics and event-driven applications.",
      },
      {
        title: "Confluent Platform",
        desc: "Expert guidance on Confluent's enterprise Kafka platform for event streaming and data integration.",
      },
      {
        title: "Debezium",
        desc: "Support for change data capture (CDC) implementations, enabling real-time database change tracking.",
      },
      {
        title: "Apache Pulsar",
        desc: "Professional assistance with Pulsar for multi-tenant, high-performance messaging and streaming.",
      },
    ],
    "SERVERLESS SERVICES": [
      {
        title: "AWS Lambda",
        desc: "Expert support for serverless function implementations, helping you build event-driven architectures.",
      },
      {
        title: "Azure Functions",
        desc: "Professional assistance with Azure's serverless compute service for running event-triggered code.",
      },
      {
        title: "Google Cloud Functions",
        desc: "Support for Google's serverless execution environment, enabling lightweight compute solutions.",
      },
      {
        title: "AWS Fargate",
        desc: "Expert guidance on serverless container management for running containers without managing infrastructure.",
      },
      {
        title: "Azure Container Instances",
        desc: "Professional support for running containers on Azure without managing virtual machines.",
      },
      {
        title: "Google Cloud Run",
        desc: "Support for fully managed serverless container platform that automatically scales.",
      },
    ],
    "CLOUD DATA WAREHOUSING": [
      {
        title: "Snowflake",
        desc: "Comprehensive support for Snowflake implementations, including architecture design and performance optimization.",
      },
      {
        title: "Google BigQuery",
        desc: "Expert assistance with BigQuery for serverless data warehousing and analytics at scale.",
      },
      {
        title: "Amazon Redshift",
        desc: "Professional support for Redshift data warehouse implementations and performance tuning.",
      },
      {
        title: "Azure Synapse Analytics",
        desc: "Support for Azure's integrated analytics service, combining data warehousing and big data analytics.",
      },
      {
        title: "Firebolt",
        desc: "Expert guidance on Firebolt implementations for sub-second analytics on large datasets.",
      },
      {
        title: "ClickHouse",
        desc: "Professional support for ClickHouse, the column-oriented DBMS for real-time analytics.",
      },
    ],
    "DATA TRANSFORMATION TOOLS": [
      {
        title: "dbt",
        desc: "Expert support for dbt implementations, helping you transform data in your warehouse more effectively.",
      },
      {
        title: "Talend",
        desc: "Professional assistance with Talend for data integration, transformation, and data quality management.",
      },
      {
        title: "Informatica",
        desc: "Comprehensive support for Informatica PowerCenter and Cloud Data Integration solutions.",
      },
      {
        title: "Fivetran",
        desc: "Expert guidance on automated data movement, ensuring reliable and secure data replication.",
      },
      {
        title: "Stitch",
        desc: "Support for Stitch implementations for simple, reliable data pipelines from various sources.",
      },
      {
        title: "Apache Beam",
        desc: "Professional assistance with Beam for unified batch and streaming data processing pipelines.",
      },
    ],
    "BUSINESS INTELLIGENCE": [
      {
        title: "Tableau",
        desc: "Expert support for Tableau implementations, helping you create impactful visualizations and dashboards.",
      },
      {
        title: "Power BI",
        desc: "Professional assistance with Microsoft Power BI for enterprise business intelligence and reporting.",
      },
      {
        title: "Looker",
        desc: "Support for Looker implementations, enabling data exploration and embedded analytics.",
      },
      {
        title: "Qlik",
        desc: "Expert guidance on Qlik for associative data indexing and interactive analytics.",
      },
      {
        title: "MicroStrategy",
        desc: "Professional support for enterprise analytics and mobility solutions.",
      },
      {
        title: "Apache Superset",
        desc: "Support for open-source data exploration and visualization platform implementations.",
      },
    ],
    "DATA AUTOMATION AND ORCHESTRATION": [
      {
        title: "Apache Airflow",
        desc: "Expert support for Airflow implementations, helping you orchestrate complex data workflows.",
      },
      {
        title: "Jenkins",
        desc: "Professional assistance with Jenkins for CI/CD pipelines in data engineering projects.",
      },
      {
        title: "Git",
        desc: "Support for version control best practices in data projects, including GitFlow and branching strategies.",
      },
      {
        title: "Docker",
        desc: "Expert guidance on containerizing data applications for consistent development and deployment.",
      },
      {
        title: "Kubernetes",
        desc: "Professional support for orchestrating data workloads on Kubernetes.",
      },
      {
        title: "Terraform",
        desc: "Support for infrastructure as code implementations for data platform resources.",
      },
    ],
    "ML & AI": [
      {
        title: "TensorFlow",
        desc: "Expert support for TensorFlow implementations, helping you build and deploy machine learning models.",
      },
      {
        title: "PyTorch",
        desc: "Professional assistance with PyTorch for deep learning research and production deployments.",
      },
      {
        title: "Scikit-learn",
        desc: "Support for traditional machine learning implementations using Python's premier ML library.",
      },
      {
        title: "Jupyter",
        desc: "Expert guidance on Jupyter notebooks for interactive data science and model development.",
      },
      {
        title: "MLflow",
        desc: "Professional support for ML lifecycle management, including experiment tracking and model registry.",
      },
      {
        title: "Kubeflow",
        desc: "Support for deploying and managing ML workflows on Kubernetes.",
      },
    ],
  };

  const categories = Object.keys(techStackData);
  const [active, setActive] = useState(categories[0]);

  // Simple generic icons - just 4 basic ones used everywhere
  const getGenericIcon = (index) => {
    const icons = [
      <Database className="w-5 h-5" />,
      <Cloud className="w-5 h-5" />,
      <Server className="w-5 h-5" />,
      <Zap className="w-5 h-5" />,
    ];
    return icons[index % 4];
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
                Professional Data <br />
                <span className="text-green-600">Integration Support</span>{" "}
                <br />
                for Modern Businesses
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                We provide expert support for data integration platforms and
                tools — not our own infrastructure. Helping you implement,
                optimize, and maintain the best solutions for your unique needs.
              </p>

              <div className="flex items-center gap-4">
                <Button className="rounded-full px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition-all shadow-lg shadow-green-600/20">
                  Get Expert Support
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-600 font-medium group"
                >
                  View Services{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute -inset-4 bg-green-50 rounded-[40px] rotate-6 -z-10" />
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl shadow-gray-200">
                <img
                  src="services/di/di-banner.webp"
                  alt="Data integration experts at work"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl rotate-12 -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-50 to-transparent -z-20" />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-24 h-1 bg-gray-200 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-gray-900">
              Benefits of Professional Data Integration Support
            </h2>
            <p className="text-gray-600 text-lg">
              With expert support for data integration platforms, your data is
              unified into a centralized system, enhancing flexibility and
              responsiveness to business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-gray-100 pt-12">
            <p className="text-xl font-extrabold text-gray-900">
              Get expert support for all your data integration needs
            </p>
            <Button className="rounded-full px-10 py-6 bg-green-600 hover:bg-green-700 text-white font-bold transition-all">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-green-600 font-semibold tracking-widest text-sm uppercase">
              Industry INTEGRA 360
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              <span className="text-green-600">
                Comprehensive Support Services
              </span>{" "}
              for Your Data Journey
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We offer expert support across AI/ML, RPA, Data Analytics, and
              Data Integration platforms, helping you implement and optimize the
              best solutions for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${service.gradient} p-8 flex items-end overflow-hidden`}
                >
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white relative z-10 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900">
              Technologies We Support
            </h2>
            <div className="w-full h-[2px] bg-gray-200 my-6"></div>
            <p className="text-lg text-gray-600">
              We provide expert support across the leading data integration
              platforms and tools — helping you implement, optimize, and
              maintain the best solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-12 mt-16">
            <div className="col-span-12 lg:col-span-4 space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`w-full text-sm font-semibold rounded-full border px-6 py-4 transition text-left
                    ${
                      active === cat
                        ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {techStackData[active]?.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="text-green-600 text-2xl mt-1 flex-shrink-0">
                      {getGenericIcon(i)}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 block mb-1">
                        {item.title}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Data Integration?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Let's discuss how our expert support can help you implement and
            maintain the best data integration solutions for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="px-8 py-6 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-lg">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Button>
            <Button className="px-8 py-6 border-2 border-white text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg">
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default DataIntegrationPage;
