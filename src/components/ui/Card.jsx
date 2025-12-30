import { motion } from "framer-motion";

const Card = ({
    children,
    className = '',
    hoverEffect = true,
    ...props
}) => {
    return (
        <motion.div
            initial={hoverEffect ? { y: 0 } : undefined}
            whileHover={hoverEffect ? { y: -8, transition: { duration: 0.3 } } : undefined}
            className={`
        glass rounded-2xl p-6 relative overflow-hidden group
        ${hoverEffect ? 'hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)] hover:border-white/20' : ''}
        transition-all duration-300
        ${className}
      `}
            {...props}
        >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-600/20 rounded-full blur-[50px] group-hover:bg-violet-600/30 transition-colors duration-500" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-600/20 rounded-full blur-[50px] group-hover:bg-pink-600/30 transition-colors duration-500" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
