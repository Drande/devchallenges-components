import { FunctionComponent } from "react";
import Input from "../shared/components/input/Input";

interface InputsPageProps {
    
}
 
const InputsPage: FunctionComponent<InputsPageProps> = () => {
    return (
        <div className="column g-2 p-4">
            <h1>Inputs</h1>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">default</span>
                    <Input></Input>
                </div>
            </div>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">error</span>
                    <Input error></Input>
                </div>
            </div>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">disabled</span>
                    <Input disabled></Input>
                </div>
            </div>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">helperText="Some interesting text"</span>
                    <Input helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">helperText="Some interesting text" error</span>
                    <Input helperText="Some interesting text" error></Input>
                </div>
                <div className="column g-1">
                    <span className="code">helperText="Some interesting text" disabled</span>
                    <Input helperText="Some interesting text" disabled></Input>
                </div>
            </div>
        </div>
    );
}
 
export default InputsPage;