import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Portal-based tooltip that positions itself relative to an anchor element.
 * Renders into document.body to avoid being clipped by overflow: hidden parents.
 */
const PortalTooltip = ({ anchorRef, open, gap = 8, children }) => {
  const [position, setPosition] = React.useState({ left: 0, top: 0 });

  const updatePosition = React.useCallback(() => {
    const anchorElement = anchorRef?.current;
    if (!anchorElement) return;
    const rect = anchorElement.getBoundingClientRect();
    setPosition({
      left: rect.left + rect.width / 2,
      top: rect.top,
    });
  }, [anchorRef]);

  React.useEffect(() => {
    if (!open) return;
    updatePosition();
    const handle = () => updatePosition();
    window.addEventListener("scroll", handle, true);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle, true);
      window.removeEventListener("resize", handle);
    };
  }, [open, updatePosition]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          style={{
            position: "fixed",
            left: position.left,
            top: position.top,
            transform: `translate(-50%, calc(-100% - ${gap}px))`,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default PortalTooltip;
