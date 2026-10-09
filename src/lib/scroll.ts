import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
  let raf = 0;
  const loop = (time: number) => {
    lenis?.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { offset: -84, duration: 1.35 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
