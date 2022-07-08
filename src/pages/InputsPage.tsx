import { FunctionComponent } from "react";
import Input from "../shared/components/input/Input";

interface InputsPageProps {
    
}
 
const InputsPage: FunctionComponent<InputsPageProps> = () => {
    return (
        <div className="column g-2 p-4">
            <h1>Inputs</h1>
            <h5>Colors</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">default</span>
                    <Input helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">color="primary"</span>
                    <Input color="primary" helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">color="secondary"</span>
                    <Input color="secondary" helperText="Some interesting text"></Input>
                </div>
            </div>
            <h5>Error</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">error</span>
                    <Input error helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">color="primary" error</span>
                    <Input color="primary" error helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">color="secondary" error</span>
                    <Input color="secondary" error helperText="Some interesting text"></Input>
                </div>
            </div>
            <h5>disabled</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">disabled</span>
                    <Input disabled helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">color="primary" disabled</span>
                    <Input color="primary" disabled helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">color="secondary" disabled</span>
                    <Input color="secondary" disabled helperText="Some interesting text"></Input>
                </div>
            </div>
            <h5>Helper text</h5>
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
            <h5>Icons</h5>
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
            <h5>Sizes</h5>
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

            <h5>Full width</h5>
            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1 w-full">
                    <span className="code">color="primary" fullWidth</span>
                    <Input color="primary" fullWidth></Input>
                </div>
            </div>

            <h5>Multiline</h5>
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
                <div className="column g-1">
                    <span className="code">multiline error helperText="Some interesting text"</span>
                    <Input multiline error helperText="Some interesting text"></Input>
                </div>
                <div className="column g-1">
                    <span className="code">multiline disabled helperText="Some interesting text"</span>
                    <Input multiline disabled helperText="Some interesting text"></Input>
                </div>
            </div>
            
            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1 w-full">
                    <span className="code">color="primary" multiline fullWidth</span>
                    <Input color="primary" multiline fullWidth></Input>
                </div>
            </div>
        </div>
    );
}
 
export default InputsPage;