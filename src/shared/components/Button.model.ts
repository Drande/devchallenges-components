export interface ButtonProps {
    variant?: ButtonVariant;
    disableShadow?: boolean;
    disabled?: boolean;
    startIcon?: Icon;
    endIcon?: Icon;
    size?: Sizes;
    color?: ThemeColor;
}

type ButtonVariant = "default" | "text" | "outlined";
type Sizes = "sm" | "md" | "lg";
type ThemeColor = "default" | "primary" | "secondary" | "danger";

type Icon = keyof IMaterialIcons;

interface IMaterialIcons {
    cloud: string;
    home: string;
    search: string;
    settings: string;
    favorite: string;
}