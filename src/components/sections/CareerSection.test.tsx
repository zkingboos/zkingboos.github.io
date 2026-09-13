import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import CareerSection from "./CareerSection";

describe("CareerSection", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("renders career title and milestones", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <CareerSection />
      </I18nextProvider>
    );
    expect(screen.getByText(/Where I've Worked/)).toBeTruthy();
    expect(screen.getByText("BarberGrid")).toBeTruthy();
    expect(screen.getByText("FutureMC")).toBeTruthy();
  });
});