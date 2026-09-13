export interface OpenSourceRepo {
  name: string;
  lang: string;
  url: string;
  desc: string;
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: "spigot-mcp",
    lang: "Kotlin",
    url: "https://github.com/zkingboos/spigot-mcp",
    desc: "Servidor MCP para edição de mundos Minecraft via LLMs com FastAsyncWorldEdit (FAWE).",
  },
  {
    name: "UniversalWrapper",
    lang: "Java",
    url: "https://github.com/zkingboos/UniversalWrapper",
    desc: "Wrapper JDBC universal com interfaces funcionais e pool HikariCP.",
  },
  {
    name: "king-core",
    lang: "Java",
    url: "https://github.com/zkingboos/king-core",
    desc: "Framework DI modular e barramento de serviços para engines Spigot/Bukkit.",
  },
  {
    name: "portainer-action",
    lang: "JS",
    url: "https://github.com/zkingboos/portainer-action",
    desc: "GitHub Action para automação de stacks Portainer em pipelines CI/CD.",
  },
  {
    name: "dontasktoask",
    lang: "Markdown",
    url: "https://github.com/zkingboos/dontasktoask",
    desc: "Guia pedagógico sobre comunicação eficiente entre desenvolvedores.",
  },
];

export interface StackBar {
  code: string;
  label: string;
  desc: string;
  width: string;
}

export const stackBars: StackBar[] = [
  { code: "GO", label: "(Golang)", desc: "APIs de alta concorrência", width: "98%" },
  { code: "JV", label: "(Java & Kotlin)", desc: "sistemas low-level & legado", width: "100%" },
  { code: "RS", label: "(Rust & C++)", desc: "memory-safe / raw buffers", width: "85%" },
  { code: "PY", label: "(Python & TS)", desc: "ML ingestion & microservices", width: "92%" },
];