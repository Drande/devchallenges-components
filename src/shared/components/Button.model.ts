export interface ButtonProps {
    variant?: ButtonVariant;
    disableShadow?: boolean;
    disabled?: boolean;
}

type ButtonVariant = "default" | "text" | "outlined";