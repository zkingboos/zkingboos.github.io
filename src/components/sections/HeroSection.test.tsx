import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("renders hero identity and CTA", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HeroSection />
      </I18nextProvider>
    );
    expect(screen.getByText("José Gabriel")).toBeTruthy();
    expect(screen.getByText(/Software Engineer/)).toBeTruthy();
    expect(screen.getByText("Get in Touch")).toBeTruthy();
  });
});