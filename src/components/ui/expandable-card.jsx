import React, { useState, useRef, useEffect, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ExpandableCard({
  title,
  src,
  description,
  icon,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0, left: 0,
              zIndex: 100,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0, left: 0,
              zIndex: 101,
              display: 'grid',
              placeItems: 'center',
              pointerEvents: 'none',
              padding: '20px'
            }}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '700px',
                height: '100%',
                maxHeight: '85vh',
                overflow: 'auto',
                backgroundColor: 'var(--bg-main, #fff)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderRadius: 'var(--radius-xl, 32px)',
                pointerEvents: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                margin: 0
              }}
              {...props}
            >
              <style>{`
                .expandable-card-no-scroll::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <motion.div layoutId={`image-${title}-${id}`} style={{ position: 'relative', height: '320px', flexShrink: 0 }}>
                <img
                  src={src}
                  alt={title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 'var(--radius-xl, 32px)', borderTopRightRadius: 'var(--radius-xl, 32px)' }}
                />
              </motion.div>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: 'var(--bg-main, #fff)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '32px 32px 16px', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {icon && (
                        <motion.div layoutId={`icon-${title}-${id}`} className="service-icon-wrap" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                            {icon}
                        </motion.div>
                    )}
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.5 }}
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      style={{ margin: 0, fontSize: '2rem', fontWeight: 600, color: 'var(--text-title)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    onClick={() => setActive(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, width: '40px', height: '40px',
                      borderRadius: '50%', border: '1px solid #e5ebe3',
                      backgroundColor: '#f9faf9', color: '#141a12',
                      cursor: 'pointer', transition: 'all 0.3s ease',
                      outline: 'none', position: 'relative', zIndex: 10
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#e5ebe3';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9faf9';
                    }}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div style={{ position: 'relative', padding: '0 32px 32px 32px' }}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      display: 'flex', flexDirection: 'column', gap: '16px',
                      color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6
                    }}
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={`service-card ${className || ''}`}
        style={{ cursor: 'pointer', margin: 0, height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <motion.div layoutId={`image-${title}-${id}`} className="service-image" style={{ margin: 0, flexShrink: 0 }}>
          <img
            src={src}
            alt={title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        
        <div className="service-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            {icon && (
                <motion.div layoutId={`icon-${title}-${id}`} className="service-icon-wrap" style={{ alignSelf: 'flex-start' }}>
                    {icon}
                </motion.div>
            )}
            <motion.h3 layoutId={`title-${title}-${id}`} style={{ margin: 0 }}>
                {title}
            </motion.h3>
            <motion.p layoutId={`description-${description}-${id}`} style={{ margin: 0 }}>
                {description}
            </motion.p>
        </div>
      </motion.div>
    </>
  );
}
