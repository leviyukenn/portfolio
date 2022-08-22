

import React from 'react';

interface SectionSubTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{

}

const SectionSubTitle = ({children}:SectionSubTitleProps) => {
    return (
        <p className="mb-4 md:font-light text-white/50">{children}</p>
    );
}
export default SectionSubTitle