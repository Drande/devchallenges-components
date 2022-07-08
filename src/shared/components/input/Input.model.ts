import { Icon } from "../../styles/models/icon";
import { Sizes } from "../../styles/models/size";

export interface InputProps extends Partial<React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>  {
    type?: string;
    label?: string;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
    helperText?: string;
    startIcon?: Icon;
    endIcon?: Icon;
    size?: Sizes;
    fullWidth?: boolean;
    multiline?: boolean;
    rows?: number;
}