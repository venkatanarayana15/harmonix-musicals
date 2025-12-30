import { motion } from "framer-motion";

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-slate-300 ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                <input
                    className={`
            w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 
            text-white placeholder:text-slate-500
            focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50
            transition-all duration-300 group-hover:bg-white/10
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:ring-red-500/50' : ''}
          `}
                    {...props}
                />
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {error && (
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-400 ml-1"
                >
                    {error}
                </motion.span>
            )}
        </div>
    );
};

export default Input;
