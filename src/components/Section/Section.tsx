
import React from 'react';

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{

}

const Section = ({children}:SectionProps) => {
    return (
        <section className='max-w-3xl px-6 lg:px-0 flex-col mx-auto mb-8'>
            {children}
        </section>
    );
}
export default Section