// Basic interface for a generic card component
export interface CardProps {
    title: string;
    content: string;
}

// Interface for a button component
export interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
