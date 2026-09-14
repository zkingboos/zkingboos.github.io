import { RefObject, useRef } from "react";

export function useDragPan<T extends HTMLElement>(
  innerRef: RefObject<T | null>,
  viewportRef: RefObject<T | null>
) {
  const posRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest("a"))
      return;
    draggingRef.current = true;
    viewportRef.current?.classList.remove("cursor-grab");
    viewportRef.current?.classList.add("cursor-grabbing");
    startRef.current = {
      x: e.clientX - posRef.current.x,
      y: e.clientY - posRef.current.y,
    };
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!draggingRef.current) return;
    const x = e.clientX - startRef.current.x;
    const y = e.clientY - startRef.current.y;
    posRef.current.x = Math.max(-350, Math.min(350, x));
    posRef.current.y = Math.max(-180, Math.min(180, y));
    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }
  };

  const onMouseUp = () => {
    if (draggingRef.current) {
      draggingRef.current = false;
      viewportRef.current?.classList.remove("cursor-grabbing");
      viewportRef.current?.classList.add("cursor-grab");
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest("a"))
      return;
    if (e.touches.length === 1) {
      draggingRef.current = true;
      startRef.current = {
        x: e.touches[0].clientX - posRef.current.x,
        y: e.touches[0].clientY - posRef.current.y,
      };
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!draggingRef.current || e.touches.length !== 1) return;
    const x = e.touches[0].clientX - startRef.current.x;
    const y = e.touches[0].clientY - startRef.current.y;
    posRef.current.x = Math.max(-350, Math.min(350, x));
    posRef.current.y = Math.max(-180, Math.min(180, y));
    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }
  };

  const onTouchEnd = () => {
    draggingRef.current = false;
  };

  const reset = () => {
    posRef.current = { x: 0, y: 0 };
    if (innerRef.current) {
      innerRef.current.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      innerRef.current.style.transform = "translate3d(0, 0, 0)";
      setTimeout(() => {
        if (innerRef.current) innerRef.current.style.transition = "";
      }, 400);
    }
  };

  return { onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchMove, onTouchEnd, reset };
}