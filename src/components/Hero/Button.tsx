import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


interface ButtonProps  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

}

const Button = ({...props}:ButtonProps) => {
    return (
        <div className="w-full h-10 rounded-full bg-button-back ease-in-out cursor-pointer flex justify-center items-center relative sm:w-40 transition-all duration-500" >
            About me
            <button {...props} className="w-full h-10 mb-8 rounded-full bg-button-front ease-in-out cursor-pointer flex justify-center items-center sm:w-40  hover:opacity-0 absolute top-0 left-0 transition-all duration-500">{props.children}</button>
        </div>
    );
}
export default Button