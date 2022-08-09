import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


interface ButtonProps  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

}
// export const ButtonBack = styled.div`
//   width: ${({ alt }) => alt ? '150px' : '262px'};
//   height: ${({ alt }) => alt ? '52px' : '64px'};
//   border-radius: 50px;
//   font-size: ${({ alt }) => alt ? '20px' : '24px'};
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
//   color: #fff;
//   background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
//   cursor: pointer;
//   transition: 0.5s ease;
//   position: relative;
//   overflow: hidden;
//   opacity: ${({ disabled }) => disabled ? '.5' : '1'};

//   @media ${(props) => props.theme.breakpoints.md} {
//     width: ${({ alt }) => alt ? '150px' : '184px'};
//     height: ${({ alt }) => alt ? '52px' : '48px'};
//     font-size: ${({ alt }) => alt ? '20px' : '16px'};
//     margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
//   }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 100%;
//     height: 32px;
//     font-size: 14px;
//     margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
//   }
// `

// export const ButtonFront = styled.button`
//   border: none;
//   border-radius: 50px;
//   color: #fff;
//   display: flex;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
//   opacity: ${({ disabled }) => disabled ? '.5' : '1'};
//   transition: .4s ease;
//   font-size: ${({ alt }) => alt ? '20px' : '24px'};
//   font-weight: 600;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

//   &:hover {
//     opacity: 0;
//   }
//   &:focus {
//     outline: none;
//   }
//   &:active {
//     opacity: 1;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }

//   &:disabled{
//     background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
//     opacity: 0.5;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }

//   @media ${(props) => props.theme.breakpoints.md} {
//     font-size: ${({ alt }) => alt ? '20px' : '16px'};
//   }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     font-size: 14px;
//   }
// `

const Button = ({...props}:ButtonProps) => {
    return (
        <div className="w-full h-10 mb-8 rounded-full bg-button-back ease-in-out cursor-pointer flex justify-center items-center relative sm:w-40" >
            About me
            <button {...props} className="w-full h-10 mb-8 rounded-full bg-button-front ease-in-out cursor-pointer flex justify-center items-center sm:w-40  hover:opacity-0 absolute top-0 left-0 transition-all duration-500">{props.children}</button>
        </div>
    );
}
export default Button