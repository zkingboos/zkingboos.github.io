import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("renders nav links", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    expect(screen.getByText("Timeline")).toBeTruthy();
    expect(screen.getByText("Architecture")).toBeTruthy();
    expect(screen.getByText("Low-Level Roots")).toBeTruthy();
    expect(screen.getByText("Feedbacks")).toBeTruthy();
  });

  it("renders brand and CTA", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    expect(screen.getByText("José Gabriel")).toBeTruthy();
    expect(screen.getByText("Get in Touch")).toBeTruthy();
  });
});