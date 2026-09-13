import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import TestimonialsSection from "./TestimonialsSection";

describe("TestimonialsSection", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("renders title and testimonials", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <TestimonialsSection />
      </I18nextProvider>
    );
    expect(screen.getByText(/Who Worked With Me/)).toBeTruthy();
    expect(screen.getByText("Gustavo Arantes")).toBeTruthy();
    expect(screen.getByText("Thiago Marinho")).toBeTruthy();
  });
});