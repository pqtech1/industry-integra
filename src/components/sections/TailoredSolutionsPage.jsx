import React from "react";
import {
  FaIndustry,
  FaOilCan,
  FaPills,
  FaBoxes,
  FaTruck,
  FaBolt,
  FaCar,
  FaCogs,
  FaWarehouse,
  FaFire,
  FaHardHat,
  FaRobot,
  FaWater,
  FaPlane,
  FaShip,
  FaMicrochip,
  FaWrench,
  FaCapsules,
  FaLeaf,
  FaBuilding,
  FaVial,
  FaGlassMartini,
  FaTshirt,
  FaHome,
} from "react-icons/fa";
import {
  MdComputer,
  MdAgriculture,
  MdFactory,
  MdLocalShipping,
  MdPrecisionManufacturing,
  MdConstruction,
  MdElectricBolt,
  MdScience,
} from "react-icons/md";
import { GiChemicalDrop, GiMineTruck, GiProcessor } from "react-icons/gi";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  // Core Manufacturing
  {
    title: "Automotive",
    icon: <FaCar className="h-6 w-6" />,
    color: "bg-gradient-to-br from-red-500 to-red-700",
    border: "border-red-100",
    hover: "hover:border-red-300",
  },
  {
    title: "Pharmaceuticals",
    icon: <FaCapsules className="h-6 w-6" />,
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    border: "border-purple-100",
    hover: "hover:border-purple-300",
  },
  {
    title: "FMCG",
    icon: <FaBoxes className="h-6 w-6" />,
    color: "bg-gradient-to-br from-pink-500 to-pink-700",
    border: "border-pink-100",
    hover: "hover:border-pink-300",
  },
  {
    title: "Electronics",
    icon: <MdComputer className="h-6 w-6" />,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    border: "border-blue-100",
    hover: "hover:border-blue-300",
  },

  // Heavy Industry
  {
    title: "Steel & Metals",
    icon: <FaIndustry className="h-6 w-6" />,
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    border: "border-gray-100",
    hover: "hover:border-gray-300",
  },
  {
    title: "Oil & Gas",
    icon: <FaOilCan className="h-6 w-6" />,
    color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    border: "border-yellow-100",
    hover: "hover:border-yellow-300",
  },
  {
    title: "Chemicals",
    icon: <GiChemicalDrop className="h-6 w-6" />,
    color: "bg-gradient-to-br from-green-600 to-green-800",
    border: "border-green-100",
    hover: "hover:border-green-300",
  },
  {
    title: "Mining",
    icon: <GiMineTruck className="h-6 w-6" />,
    color: "bg-gradient-to-br from-amber-700 to-amber-900",
    border: "border-amber-100",
    hover: "hover:border-amber-300",
  },

  // Energy & Utilities
  {
    title: "Power Generation",
    icon: <FaBolt className="h-6 w-6" />,
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    border: "border-orange-100",
    hover: "hover:border-orange-300",
  },
  {
    title: "Renewable Energy",
    icon: <FaLeaf className="h-6 w-6" />,
    color: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300",
  },
  {
    title: "Water Treatment",
    icon: <FaWater className="h-6 w-6" />,
    color: "bg-gradient-to-br from-cyan-500 to-cyan-700",
    border: "border-cyan-100",
    hover: "hover:border-cyan-300",
  },

  {
    title: "Shipbuilding",
    icon: <FaShip className="h-6 w-6" />,
    color: "bg-gradient-to-br from-sky-500 to-sky-700",
    border: "border-sky-100",
    hover: "hover:border-sky-300",
  },
  {
    title: "Semiconductors",
    icon: <FaMicrochip className="h-6 w-6" />,
    color: "bg-gradient-to-br from-violet-500 to-violet-700",
    border: "border-violet-100",
    hover: "hover:border-violet-300",
  },
  {
    title: "Robotics",
    icon: <FaRobot className="h-6 w-6" />,
    color: "bg-gradient-to-br from-rose-500 to-rose-700",
    border: "border-rose-100",
    hover: "hover:border-rose-300",
  },

  // Consumer Goods
  {
    title: "Food & Beverage",
    icon: <FaGlassMartini className="h-6 w-6" />,
    color: "bg-gradient-to-br from-amber-500 to-amber-700",
    border: "border-amber-100",
    hover: "hover:border-amber-300",
  },
  {
    title: "Textiles",
    icon: <FaTshirt className="h-6 w-6" />,
    color: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-700",
    border: "border-fuchsia-100",
    hover: "hover:border-fuchsia-300",
  },
  {
    title: "Construction",
    icon: <FaHardHat className="h-6 w-6" />,
    color: "bg-gradient-to-br from-stone-600 to-stone-800",
    border: "border-stone-100",
    hover: "hover:border-stone-300",
  },
  {
    title: "Medical Devices",
    icon: <FaVial className="h-6 w-6" />,
    color: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    border: "border-cyan-100",
    hover: "hover:border-cyan-300",
  },
];

export default function TailoredSolutionsPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
            <FaIndustry className="h-4 w-4" />
            Industry 4.0 Solutions
          </div>

          <h2 className="">
            Tailored Solutions for Every Industry
          </h2>
          <p className="">
            INTEGRA 360 delivers custom manufacturing intelligence solutions
            across all sectors.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Core Manufacturing",
              "Heavy Industry",
              "Energy & Utilities",
              "Specialized",
              "Consumer Goods",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Industries Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className={`relative group cursor-pointer border ${industry.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white`}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  {/* Icon Container with Gradient */}
                  <div
                    className={`${industry.color} p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{industry.icon}</div>
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {industry.title}
                  </h3>

                  {/* Hover Indicator */}
                  <div className="h-0.5 w-8 bg-gray-200 group-hover:w-12 group-hover:bg-green-500 transition-all duration-300 mt-1"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
