import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins">
            this is root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;