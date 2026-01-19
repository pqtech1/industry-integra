export type ModuleType = 'process' | 'energy' | 'building' | 'factory';

export interface License {
  licenseNumber: string;
  password: string;
  companyName: string;
  modules: ModuleType[];
  expiryDate: string;
}

export const LICENSES: License[] = [
  // Single module licenses
  {
    licenseNumber: "PM-PROC-001",
    password: "process123",
    companyName: "TechFlow Industries",
    modules: ["process"],
    expiryDate: "2026-12-31",
  },
  {
    licenseNumber: "PM-ENRG-001",
    password: "energy123",
    companyName: "GreenPower Corp",
    modules: ["energy"],
    expiryDate: "2026-12-31",
  },
  {
    licenseNumber: "PM-BLDG-001",
    password: "building123",
    companyName: "SmartSpace Solutions",
    modules: ["building"],
    expiryDate: "2026-12-31",
  },
  {
    licenseNumber: "PM-FACT-001",
    password: "factory123",
    companyName: "AutoMake Manufacturing",
    modules: ["factory"],
    expiryDate: "2026-12-31",
  },
  // Multi-module licenses
  {
    licenseNumber: "PM-DUAL-001",
    password: "dual123",
    companyName: "DualTech Systems",
    modules: ["process", "energy"],
    expiryDate: "2026-12-31",
  },
  {
    licenseNumber: "PM-TRIPLE-001",
    password: "triple123",
    companyName: "TriForce Industries",
    modules: ["energy", "building", "factory"],
    expiryDate: "2026-12-31",
  },
  {
    licenseNumber: "PM-FULL-001",
    password: "master123",
    companyName: "PlantMaster Demo",
    modules: ["process", "energy", "building", "factory"],
    expiryDate: "2026-12-31",
  },
];

export const MODULE_INFO: Record<ModuleType, {
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}> = {
  process: {
    name: "Process Automation",
    description: "Workflow logic, state transitions, and rule execution",
    icon: "GitBranch",
    color: "process",
    gradient: "gradient-process",
  },
  energy: {
    name: "Energy Automation",
    description: "Measurement, optimization, and energy alerts",
    icon: "Zap",
    color: "energy",
    gradient: "gradient-energy",
  },
  building: {
    name: "Building Automation",
    description: "Spaces, environmental control, and scheduling",
    icon: "Building2",
    color: "building",
    gradient: "gradient-building",
  },
  factory: {
    name: "Factory Automation",
    description: "Equipment, production, and control signals",
    icon: "Factory",
    color: "factory",
    gradient: "gradient-factory",
  },
};

export function validateLicense(licenseNumber: string, password: string): License | null {
  const license = LICENSES.find(
    (l) => l.licenseNumber.toLowerCase() === licenseNumber.toLowerCase() && l.password === password
  );
  return license || null;
}
