import { Icon } from "../../styles/models/icon";
import { ThemeColor } from "../../styles/models/theme";

export interface ButtonProps extends Partial<React.HTMLAttributes<HTMLButtonElement>>  {
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
