import { ReactNode, SyntheticEvent } from "react";

interface Props {
    children: ReactNode | JSX.Element | string;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (e: SyntheticEvent) => void;
    disabled?: boolean;
}

const Button = ({
    children,
    className,
    type = 'button',
    onClick,
    disabled
}: Props) => {
    return (
        <button 
            className={`${className} text-xxs py-2 rounded-lg`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;