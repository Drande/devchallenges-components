import { FunctionComponent, useState } from "react";
import Button from "../shared/components/button/Button";

interface ButtonsPageProps {
    
}

const ButtonsPage: FunctionComponent<ButtonsPageProps> = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const resetCount = () => {
        setCount(0);
    }
    return (
        <div className="column g-2 p-4">
            <h1>Buttons</h1>
            <h5>Colors</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'variant="default" color="default"'}</span>
                    <Button variant="default" color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="default" color="primary"'}</span>
                    <Button variant="default" color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="default" color="secondary"'}</span>
                    <Button variant="default" color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="default" color="danger"'}</span>
                    <Button variant="default" color="danger">Danger</Button>
                </div>
            </div>
            <h5>Outlined</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'variant="outlined" color="default"'}</span>
                    <Button variant="outlined" color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="outlined" color="primary"'}</span>
                    <Button variant="outlined" color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="outlined" color="secondary"'}</span>
                    <Button variant="outlined" color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="outlined" color="danger"'}</span>
                    <Button variant="outlined" color="danger">Danger</Button>
                </div>
            </div>

            <h5>Text</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'variant="text" color="default"'}</span>
                    <Button variant="text" color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="text" color="primary"'}</span>
                    <Button variant="text" color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="text" color="secondary"'}</span>
                    <Button variant="text" color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="text" color="danger"'}</span>
                    <Button variant="text" color="danger">Danger</Button>
                </div>
            </div>
            
            <h5>Shadowless</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'disableShadow color="default"'}</span>
                    <Button disableShadow color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disableShadow color="primary"'}</span>
                    <Button disableShadow color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disableShadow color="secondary"'}</span>
                    <Button disableShadow color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disableShadow color="danger"'}</span>
                    <Button disableShadow color="danger">Danger</Button>
                </div>
            </div>

            <h5>Disabled</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'disabled color="default"'}</span>
                    <Button disabled color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled color="primary"'}</span>
                    <Button disabled color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled color="secondary"'}</span>
                    <Button disabled color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled color="danger"'}</span>
                    <Button disabled color="danger">Danger</Button>
                </div>
            </div>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'disabled variant="text" color="default"'}</span>
                    <Button disabled variant="text" color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled variant="text" color="primary"'}</span>
                    <Button disabled variant="text" color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled variant="text" color="secondary"'}</span>
                    <Button disabled variant="text" color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled variant="text" color="danger"'}</span>
                    <Button disabled variant="text" color="danger">Danger</Button>
                </div>
            </div>
            
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'disabled variant="outlined" color="default"'}</span>
                    <Button disabled variant="outlined" color="default">Default</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled variant="outlined" color="primary"'}</span>
                    <Button disabled variant="outlined" color="primary">Primary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled variant="outlined" color="secondary"'}</span>
                    <Button disabled variant="outlined" color="secondary">Secondary</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'disabled variant="outlined" color="danger"'}</span>
                    <Button disabled variant="outlined" color="danger">Danger</Button>
                </div>
            </div>
            <h5> Icons</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'startIcon="cloud"'}</span>
                    <Button startIcon="cloud">Start icon</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'endIcon="cloud"'}</span>
                    <Button endIcon="cloud">End icon</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="outlined" startIcon="cloud"'}</span>
                    <Button variant="outlined" startIcon="cloud">Start icon</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="outlined" endIcon="cloud"'}</span>
                    <Button variant="outlined" endIcon="cloud">End icon</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="text" startIcon="cloud"'}</span>
                    <Button variant="text" startIcon="cloud">Start icon</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'variant="text" endIcon="cloud"'}</span>
                    <Button variant="text" endIcon="cloud">End icon</Button>
                </div>
            </div>
            <h5>Icons variants</h5>
            <div className="row g-2 flex-wrap section">
                <div className="column g-1">
                    <span className="code">{'color="primary" startIcon="cloud"'}</span>
                    <Button color="primary" startIcon="cloud">Cloud</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" startIcon="search"'}</span>
                    <Button color="primary" startIcon="search">Search</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" startIcon="home"'}</span>
                    <Button color="primary" startIcon="home">Home</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" startIcon="settings"'}</span>
                    <Button color="primary" startIcon="settings">Settings</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" startIcon="favorite"'}</span>
                    <Button color="primary" startIcon="favorite">Favorite</Button>
                </div>
            </div>
            <h5>Sizes</h5>
            <div className="row g-2 flex-wrap section align-items-end">
                <div className="column g-1">
                    <span className="code">{'color="primary" size="sm"'}</span>
                    <Button color="primary" size="sm">Small</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" size="md"'}</span>
                    <Button color="primary" size="md">Medium</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" size="lg"'}</span>
                    <Button color="primary" size="lg">Large</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" size="sm"'}</span>
                    <Button color="primary" size="sm" startIcon="settings">Small</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" size="md"'}</span>
                    <Button color="primary" size="md" startIcon="settings" endIcon="cloud">Medium</Button>
                </div>
                <div className="column g-1">
                    <span className="code">{'color="primary" size="lg"'}</span>
                    <Button color="primary" size="lg" endIcon="cloud">Large</Button>
                </div>
            </div>

            <h5>Actions (default attributes still available)</h5>
            <div className="row g-2 flex-wrap section align-items-center">
                <div className="column g-1">
                    <Button onClick={increment} color="primary">Click</Button>
                </div>
                <div className="column g-1">
                    <Button onMouseEnter={increment} color="primary">Mouse enter</Button>
                </div>
                <div className="column g-1">
                    <Button onMouseLeave={increment} color="primary">Mouse leave</Button>
                </div>
                <div className="column g-1">
                    <Button onClick={resetCount} color="primary">Reset</Button>
                </div>
                {<span>You have done {count} actions</span>}
            </div>
        </div>
    );
}
 
export default ButtonsPage;