import { useEffect, useRef } from 'react';

/**
 * Magnetic-button hook — element softly follows the cursor when it gets near.
 * Pure CSS transform, no re-renders.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.35,
  radius = 80,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let active = false;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      if (active || Math.abs(cx - tx) > 0.05 || Math.abs(cy - ty) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      // rect already reflects the current cx/cy translate. Subtract it back
      // so we measure the cursor delta from the element's *rest* center —
      // otherwise the magnetic pull moves the rect, which moves the target,
      // creating drift (the button "floats" on slow cursor motion).
      const restX = rect.left + rect.width / 2 - cx;
      const restY = rect.top + rect.height / 2 - cy;
      const ex = e.clientX - restX;
      const ey = e.clientY - restY;
      const dist = Math.hypot(ex, ey);
      const r = Math.max(rect.width, rect.height) / 2 + radius;
      if (dist < r) {
        active = true;
        tx = ex * strength;
        ty = ey * strength;
        if (!raf) raf = requestAnimationFrame(tick);
      } else if (active) {
        active = false;
        tx = 0;
        ty = 0;
        if (!raf) raf = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      active = false;
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return ref;
}
