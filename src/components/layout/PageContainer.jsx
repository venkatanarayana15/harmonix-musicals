const PageContainer = ({ children, className = '' }) => {
    return (
        <div className={`pt-8 pb-8 md:pt-12 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default PageContainer;
