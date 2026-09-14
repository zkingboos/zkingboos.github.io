import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AffiliateTopologyModal from "./AffiliateTopologyModal";

describe("AffiliateTopologyModal", () => {
  it("renders when open", () => {
    render(<AffiliateTopologyModal open onClose={() => {}} />);
    expect(screen.getByText("Topology Affiliate Project")).toBeTruthy();
    expect(screen.getByText(/svc-ml-inference/)).toBeTruthy();
    expect(screen.getByText(/Discord Command Bot/)).toBeTruthy();
  });

  it("renders nothing when closed", () => {
    const { container } = render(
      <AffiliateTopologyModal open={false} onClose={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });
});