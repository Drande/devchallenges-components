export interface InputProps extends Partial<React.HTMLAttributes<HTMLInputElement>>  {
    type?: string;
    label?: string;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
}