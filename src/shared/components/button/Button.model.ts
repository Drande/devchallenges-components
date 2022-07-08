import { Icon } from "../../styles/models/icon";
import { Sizes } from "../../styles/models/size";
import { AuxColors, ThemeColor } from "../../styles/models/theme";

export interface ButtonProps extends Partial<React.HTMLAttributes<HTMLButtonElement>>  {
    variant?: ButtonVariant;
    disableShadow?: boolean;
    disabled?: boolean;
    startIcon?: Icon;
    endIcon?: Icon;
    size?: Sizes;
    color?: ThemeColor | AuxColors;
}

type ButtonVariant = "default" | "text" | "outlined";
