export default function Section({ children, className }) {
    return (
        <div className={`max-w-[1920px] mx-auto w-full h-full ${className}`}>
            {children}
        </div>
    );
}
