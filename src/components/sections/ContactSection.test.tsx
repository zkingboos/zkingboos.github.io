import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("renders contact banner and footer", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactSection />
      </I18nextProvider>
    );
    expect(screen.getByText(/Let's build something solid/)).toBeTruthy();
    expect(screen.getByText("josegmelo.dev@gmail.com")).toBeTruthy();
    expect(screen.getByText("GitHub @zkingboos")).toBeTruthy();
  });
});