// Basic interface for a generic card component
export interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
}

// Interface for a button component
export interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
