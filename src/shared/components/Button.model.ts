export interface ButtonProps {
    variant?: ButtonVariant;
    disableShadow?: boolean;
}

type ButtonVariant = "default" | "text" | "outlined";