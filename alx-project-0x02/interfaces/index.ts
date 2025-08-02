// Basic interface for a generic card component
export interface CardProps {
    title: string;
    content: string;
}

// Interface for a button component
export interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}