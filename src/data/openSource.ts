import type { LocalizedText } from "@/lib/lang";

export interface OpenSourceRepo {
  name: string;
  lang: string;
  url: string;
  desc: LocalizedText;
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: "spigot-mcp",
    lang: "Kotlin",
    url: "https://github.com/zkingboos/spigot-mcp",
    desc: {
      en: "An MCP server for Spigot Minecraft servers with FastAsyncWorldEdit (FAWE) integration, enabling LLM-driven programmatic world editing.",
      pt: "Servidor MCP para edição de mundos Minecraft via LLMs com FastAsyncWorldEdit (FAWE).",
    },
  },
  {
    name: "UniversalWrapper",
    lang: "Java",
    url: "https://github.com/zkingboos/UniversalWrapper",
    desc: {
      en: "A universal JDBC wrapper with functional interfaces and built-in HikariCP connection pooling.",
      pt: "Wrapper JDBC universal com interfaces funcionais e pool HikariCP.",
    },
  },
  {
    name: "king-core",
    lang: "Java",
    url: "https://github.com/zkingboos/king-core",
    desc: {
      en: "A modular dependency-injection framework and service bus for Spigot/Bukkit engines.",
      pt: "Framework DI modular e barramento de serviços para engines Spigot/Bukkit.",
    },
  },
  {
    name: "portainer-action",
    lang: "JS",
    url: "https://github.com/zkingboos/portainer-action",
    desc: {
      en: "A GitHub Action for automating Portainer stack deployments in CI/CD pipelines.",
      pt: "GitHub Action para automação de stacks Portainer em pipelines CI/CD.",
    },
  },
  {
    name: "dontasktoask",
    lang: "Markdown",
    url: "https://github.com/zkingboos/dontasktoask",
    desc: {
      en: "A pedagogical guide on efficient communication between developers.",
      pt: "Guia pedagógico sobre comunicação eficiente entre desenvolvedores.",
    },
  },
];

export interface StackBar {
  code: string;
  label: string;
  desc: LocalizedText;
  width: string;
}

export const stackBars: StackBar[] = [
  { code: "GO", label: "(Golang)", desc: { en: "high-concurrency APIs", pt: "APIs de alta concorrência" }, width: "98%" },
  { code: "JV", label: "(Java & Kotlin)", desc: { en: "low-level & legacy systems", pt: "sistemas low-level & legado" }, width: "100%" },
  { code: "RS", label: "(Rust & C++)", desc: { en: "memory-safe / raw buffers", pt: "memory-safe / raw buffers" }, width: "85%" },
  { code: "PY", label: "(Python & TS)", desc: { en: "ML ingestion & microservices", pt: "ML ingestion & microservices" }, width: "92%" },
];