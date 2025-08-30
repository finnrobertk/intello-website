import type React from "react";
import { SiKotlin, SiSpringboot, SiGooglecloud, SiKubernetes, SiApachekafka, SiTerraform, SiHelm } from "react-icons/si";
import { FaJava, FaReact, FaMicrosoft } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { Brain } from "lucide-react";

export type TechCategory = "backend" | "frontend" | "cloud" | "infra" | "ai" | "other";

export type TechItem = {
  label: string;
  category: TechCategory;
  icon?: React.ComponentType<{ className?: string }>;
};

export const techStack: TechItem[] = [
  { label: "Kotlin", category: "backend", icon: SiKotlin },
  { label: "Java", category: "backend", icon: FaJava },
  { label: "Spring Boot", category: "backend", icon: SiSpringboot },
  { label: "React", category: "frontend", icon: FaReact },
  { label: "Next.js", category: "frontend", icon: TbBrandNextjs },
  { label: "GCP", category: "cloud", icon: SiGooglecloud },
  { label: "Azure", category: "cloud", icon: FaMicrosoft },
  { label: "Kubernetes", category: "infra", icon: SiKubernetes },
  { label: "Kafka", category: "infra", icon: SiApachekafka },
  { label: "Terraform", category: "infra", icon: SiTerraform },
  { label: "Helm", category: "infra", icon: SiHelm },
  { label: "AI/ML", category: "ai", icon: Brain }
];
