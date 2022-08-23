

const SectionTitle = ({children}:React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h2 className="text-5xl py-4 font-extrabold bg-section-title text-transparent bg-clip-text w-max">
            {children}
        </h2>
    );
}
export default SectionTitle