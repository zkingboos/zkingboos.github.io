import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductionArtifacts from "./ProductionArtifacts";

describe("ProductionArtifacts", () => {
  it("renders shipped systems and groups", () => {
    render(<ProductionArtifacts />);
    expect(screen.getByText(/Shipped Systems & Technical Blueprints/)).toBeTruthy();
    expect(screen.getByText("BarberGrid SaaS")).toBeTruthy();
    expect(screen.getByText("Affiliate")).toBeTruthy();
  });

  it("renders View Topology button for Affiliate", () => {
    render(<ProductionArtifacts onOpenTopology={() => {}} />);
    expect(screen.getByText(/View Topology/)).toBeTruthy();
  });
});