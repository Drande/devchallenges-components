import { FunctionComponent } from "react";
import Button from "../shared/components/Button";

interface ButtonsPageProps {
    
}

const ButtonsPage: FunctionComponent<ButtonsPageProps> = () => {
    return (
        <div className="column g-4 p-4">
            <Button>Default</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button disableShadow>Shadowless</Button>
        </div>
    );
}
 
export default ButtonsPage;