import Header from "../../components/Shared/Header/Header";
import LeftSideNav from "../../components/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../components/Shared/Navbar/Navbar";
import RightSideNav from "../../components/Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            this is home

            {/* container */}
            <div className="grid grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    news coming soon
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;