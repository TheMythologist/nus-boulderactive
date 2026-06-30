/* shared.jsx - reusable primitives (exported to window) */
const { useState, useEffect, useRef } = React;

/* Route-marker chip */
function Marker({ children, solid, square, className = "" }) {
  return (
    <span className={`marker ${solid ? "solid" : ""} ${square ? "square" : ""} ${className}`}>
      {!solid && <span className="dot" />}
      {children}
    </span>
  );
}

/* Button (renders <a> if href, else <button>) */
function Btn({ children, href, onClick, variant = "", size = "", target, arrow = true }) {
  const cls = `btn ${variant} ${size}`.trim();
  const inner = <>{children}{arrow && <span className="arrow">→</span>}</>;
  if (href) return <a className={cls} href={href} onClick={onClick} target={target} rel={target ? "noopener" : undefined}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

/* Duotone image block */
function DuoImage({ src, alt, className = "", hoverzoom = true, grain = false }) {
  return (
    <div className={`duo ${hoverzoom ? "hoverzoom" : ""} ${grain ? "grain" : ""} ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

/* Scroll reveal wrapper */
function Reveal({ children, delay = 0, as = "div", className = "", style = {}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>{children}</Tag>;
}

/* Section eyebrow label */
function Eyebrow({ children }) { return <span className="eyebrow">{children}</span>; }

/* Animated count/marquee strip of repeated word */
function Marquee({ items, className = "" }) {
  const group = (key) => (
    <span key={key} style={{ display: "inline-flex" }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>{it}</span>
      ))}
    </span>
  );
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">{group("a")}{group("b")}</div>
    </div>
  );
}

Object.assign(window, { Marker, Btn, DuoImage, Reveal, Eyebrow, Marquee });
