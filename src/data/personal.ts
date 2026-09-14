import type { LocalizedText } from "@/lib/lang";

export const personalInfo = {
  name: "José Gabriel",
  role: "Software Engineer" as LocalizedText | string,
  email: "josegmelo.dev@gmail.com",
  github: "https://github.com/zkingboos",
  githubHandle: "zkingboos",
  linkedin: "https://www.linkedin.com/in/josegabrielma/",
  linkedinHandle: "josegabrielma",
  profilePhoto: "https://avatars.githubusercontent.com/u/42500187?v=4",
};

export const languages: LocalizedText[] = [
  { en: "Portuguese — Fluent", pt: "Português — Fluente" },
  { en: "English — B1/B2 (Upper Intermediate)", pt: "Inglês — B1/B2 (Upper Intermediate)" },
];

export const skillGroups: { title: LocalizedText; items: string[] }[] = [
  { title: { en: "Languages", pt: "Linguagens" }, items: ["Go", "Rust", "Java", "Kotlin", "TypeScript", "JavaScript", "Python", "C", "Lua", "SQL"] },
  { title: { en: "Infrastructure", pt: "Infraestrutura" }, items: ["Docker", "Kubernetes", "Proxmox VE", "Ceph", "Terraform", "Tailscale", "Linux"] },
  { title: { en: "Messaging & Data", pt: "Mensageria & Dados" }, items: ["Apache Kafka", "RabbitMQ", "Redis", "PostgreSQL", "MySQL", "ClickHouse"] },
  { title: { en: "Observability", pt: "Observabilidade" }, items: ["Grafana", "Prometheus", "Sentry", "OpenTelemetry"] },
];