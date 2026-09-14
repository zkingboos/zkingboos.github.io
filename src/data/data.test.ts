import { describe, it, expect } from "vitest";
import { personalInfo, languages, skillGroups } from "./personal";
import { career } from "./career";
import { projectGroups } from "./projects";
import { openSourceRepos } from "./openSource";

describe("dados compartilhados (fonte única site + CV)", () => {
  it("possui os campos obrigatórios de contato", () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.email).toBeTruthy();
    expect(personalInfo.profilePhoto).toBeTruthy();
    expect(personalInfo.github).toBeTruthy();
    expect(personalInfo.linkedin).toBeTruthy();
  });

  it("possui experiência, projetos, skills, idiomas e open source", () => {
    expect(career.length).toBeGreaterThan(0);
    expect(projectGroups.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThan(0);
    expect(languages.length).toBeGreaterThan(0);
    expect(openSourceRepos.length).toBeGreaterThan(0);
  });

  it("todos os itens de experiência têm nome, período e descrição pt/en", () => {
    career.forEach((i) => {
      expect(i.name).toBeTruthy();
      expect(i.period).toBeTruthy();
      if (i.desc) {
        expect(i.desc.en).toBeTruthy();
        expect(i.desc.pt).toBeTruthy();
      }
      i.roles?.forEach((r) => {
        expect(r.role).toBeTruthy();
        expect(r.desc.en).toBeTruthy();
        expect(r.desc.pt).toBeTruthy();
      });
    });
  });

  it("todos os projetos têm nome e descrição pt/en", () => {
    projectGroups.forEach((g) => {
      g.projects.forEach((p) => {
        expect(p.name).toBeTruthy();
        expect(p.desc.en).toBeTruthy();
        expect(p.desc.pt).toBeTruthy();
      });
    });
  });

  it("todos os repos open source têm descrição pt/en", () => {
    openSourceRepos.forEach((r) => {
      expect(r.name).toBeTruthy();
      expect(r.desc.en).toBeTruthy();
      expect(r.desc.pt).toBeTruthy();
    });
  });
});