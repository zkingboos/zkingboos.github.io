import Lenis from "lenis";

let lenis: Lenis | null = null;

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function initLenis(): Lenis {
  if (lenis) return lenis;
  lenis = new Lenis({
    duration: 1.35,
    easing,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time: number) {
    lenis!.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.addEventListener("click", function (e) {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (anchor) {
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl && lenis) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: -85,
            duration: 1.5,
            easing,
          });
          try {
            history.pushState(null, null, targetId);
          } catch {
            /* noop */
          }
        }
      }
    }
  });

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function stopLenis() {
  lenis?.stop();
}

export function startLenis() {
  lenis?.start();
}