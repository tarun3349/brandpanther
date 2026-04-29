import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919788030301"
    target="_blank" rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-primary grid place-items-center shadow-glow group"
    aria-label="Chat on WhatsApp">
    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
    <MessageCircle className="relative h-6 w-6 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
