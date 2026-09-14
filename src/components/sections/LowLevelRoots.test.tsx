import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import LowLevelRoots from "./LowLevelRoots";

describe("LowLevelRoots", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("renders title, about card and stacks", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LowLevelRoots />
      </I18nextProvider>
    );
    expect(screen.getByText("Low-Level Roots")).toBeTruthy();
    expect(screen.getByText("José Gabriel")).toBeTruthy();
    expect(screen.getByText("Portuguese")).toBeTruthy();
    expect(screen.getByText("English")).toBeTruthy();
  });
});