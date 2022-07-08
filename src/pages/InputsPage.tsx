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
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">startIcon="home"</span>
                    <Input startIcon="home"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">endIcon="home"</span>
                    <Input endIcon="home"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">startIcon="home" error</span>
                    <Input startIcon="home" error></Input>
                </div>
                <div className="column g-1">
                    <span className="code">endIcon="home" disabled</span>
                    <Input endIcon="home" disabled></Input>
                </div>
            </div>

            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1">
                    <span className="code">size="sm"</span>
                    <Input size="sm"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">size="md"</span>
                    <Input size="md"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">size="lg"</span>
                    <Input size="lg"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">size="sm" startIcon="cloud"</span>
                    <Input size="sm" startIcon="cloud"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">size="md" endIcon="cloud"</span>
                    <Input size="md" endIcon="cloud"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">size="lg" startIcon="cloud" endIcon="cloud"</span>
                    <Input size="lg" startIcon="cloud" endIcon="cloud"></Input>
                </div>
            </div>

            
            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1 w-full">
                    <span className="code">fullWidth</span>
                    <Input fullWidth></Input>
                </div>
            </div>

            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1">
                    <span className="code">multiline size="sm"</span>
                    <Input multiline size="sm"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">multiline size="md"</span>
                    <Input multiline size="md"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">multiline size="lg"</span>
                    <Input multiline size="lg"></Input>
                </div>
            </div>
            
            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1 w-full">
                    <span className="code">multiline fullWidth</span>
                    <Input multiline fullWidth></Input>
                </div>
            </div>
        </div>
    );
}
 
export default InputsPage;