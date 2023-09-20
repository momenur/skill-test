
import {NavLink , Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div className="container">
            <div className="mt-5 row justify-content-center">
                <div className="col-8">
                    <ul className="mb-3 nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <NavLink to='/problem-1' className={({isActive}) => `nav-link + ${(isActive ? " active" : "")}` }>Problem - 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/problem-2' className={({isActive}) => `nav-link + ${(isActive ? " active" : "")}`}>Problem - 2</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Menu;