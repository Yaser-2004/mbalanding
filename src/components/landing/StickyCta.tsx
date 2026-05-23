import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-40 lg:right-8"
        >
          <div className="flex gap-2 rounded-2xl glass-light shadow-elegant p-2 sm:p-2.5 border">
            <a
              href="#apply"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-navy-deep px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold text-white"
            >
              <Download className="size-4" /> Brochure
            </a>
            <a
              href="#apply"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold text-navy-deep shadow-gold"
            >
              Apply <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
