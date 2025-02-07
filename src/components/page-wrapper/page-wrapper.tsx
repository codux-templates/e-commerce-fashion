import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from '@remix-run/react';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    return (
        <AnimatePresence initial={true}>
            <motion.div
                key={location.key + 1}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.4,
                    ease: 'easeIn',
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
