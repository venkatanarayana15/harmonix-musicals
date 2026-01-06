import { motion } from "framer-motion";

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    isLoading = false,
    ...props
}) => {
    // Premium styling variants
    const variants = {
        primary: "bg-gray-900 text-white border border-transparent shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:bg-black",
        secondary: "bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300",
        ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50",
        outline: "bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs font-semibold rounded-lg",
        md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
        lg: "px-7 py-3.5 text-base font-bold rounded-2xl"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`
                relative inline-flex items-center justify-center 
                font-display transition-all duration-300 
                disabled:opacity-50 disabled:cursor-not-allowed 
                overflow-hidden group
                ${variants[variant]} ${sizes[size]} ${className}
            `}
            disabled={isLoading}
            {...props}
        >
            {/* Shimmer Effect for Primary Buttons */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
            )}

            {isLoading ? (
                <div className="mr-2 animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
            ) : Icon ? (
                <Icon className={`mr-2 ${size === 'lg' ? 'text-lg' : 'text-base'}`} />
            ) : null}

            <span className="relative z-20 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default Button;
