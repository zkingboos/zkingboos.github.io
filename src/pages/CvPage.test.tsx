import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import CvPage from "./CvPage";

describe("CvPage", () => {
  beforeEach(() => i18n.changeLanguage("en"));

  it("renders name, contact and section headings", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <CvPage />
      </I18nextProvider>
    );
    expect(screen.getByText("José Gabriel")).toBeTruthy();
    expect(screen.getByText(/josegmelo.dev@gmail.com/)).toBeTruthy();
    expect(screen.getByText("Experience")).toBeTruthy();
  });

  it("renders experience and projects content", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <CvPage />
      </I18nextProvider>
    );
    expect(screen.getByText("Hive-media")).toBeTruthy();
    expect(screen.getByText("BarberGrid SaaS")).toBeTruthy();
  });

  it("renders download button", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <CvPage />
      </I18nextProvider>
    );
    expect(screen.getByText("Download PDF")).toBeTruthy();
  });
});