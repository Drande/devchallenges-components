export interface InputProps extends Partial<React.HTMLAttributes<HTMLInputElement>>  {
    label?: string;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
}