import { FaGithub, FaGoogle } from "react-icons/fa";
const LoginWIth = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Login With</h2>
            <div className="flex flex-col gap-3">
            <button className="btn border-2 border-[#34A583] bg-white w-full hover:bg-[#34A583] hover:text-white"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="btn border-2 border-[#21262d] hover:bg-[#21262d] hover:text-white bg-white w-full "><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default LoginWIth;