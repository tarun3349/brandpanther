import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_E164 } from "@/lib/whatsapp";
import { INSTAGRAM_URL } from "@/lib/social";

const FloatingContactButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.35, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="h-14 w-14 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#833ab4] grid place-items-center shadow-glow text-white ring-2 ring-white/20"
      aria-label="Brand Panther on Instagram"
    >
      <Instagram className="h-7 w-7 stroke-[1.75]" />
    </motion.a>
    <motion.a
      href={`https://wa.me/${WHATSAPP_E164}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.55, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative h-14 w-14 rounded-full bg-gradient-primary grid place-items-center shadow-glow group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
      <MessageCircle className="relative h-6 w-6 text-primary-foreground" />
    </motion.a>
  </div>
);

export default FloatingContactButtons;
