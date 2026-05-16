import type { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
    children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <div className="grid grid-cols-4 gap-6">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="ml-10 w-40 h-40 bg-blue-500 text-white flex items-center justify-center skew-y-[-5deg]"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Button;