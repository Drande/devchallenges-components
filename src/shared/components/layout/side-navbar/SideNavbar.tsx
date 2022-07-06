import { SideNavbarProps } from "./SideNavbar.model";
import './SideNavbar.scss';

 
const SideNavbar = ({ children }: React.PropsWithChildren<SideNavbarProps>) => {
    return (
        <nav>
            {children}
        </nav>
    );
}
 
export default SideNavbar;