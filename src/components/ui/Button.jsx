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
    const baseStyles = "relative inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

    const variants = {
        primary: "bg-linear-to-r from-violet-600 to-pink-600 hover:opacity-90 text-white shadow-lg shadow-violet-500/20",
        secondary: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 focus:ring-white/30",
        ghost: "text-slate-300 hover:text-white hover:bg-white/5 focus:ring-white/20",
        outline: "border-2 border-violet-500 text-violet-400 hover:bg-violet-500/10 focus:ring-violet-500"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {/* Shine effect for primary button */}
            {variant === 'primary' && (
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            )}

            {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : Icon && (
                <Icon className={`mr-2 ${size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />
            )}
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export default Button;
