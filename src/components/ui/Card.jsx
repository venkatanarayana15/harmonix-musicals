import { motion } from "framer-motion";

const Card = ({
    children,
    className = '',
    hoverEffect = true,
    glass = true,
    ...props
}) => {
    return (
        <motion.div
            initial={hoverEffect ? { y: 0 } : undefined}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            className={`
                relative overflow-hidden rounded-2xl
                ${glass ? 'glass' : 'bg-white border border-gray-100 shadow-sm'}
                ${hoverEffect ? 'hover:shadow-md transition-all duration-300' : ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
