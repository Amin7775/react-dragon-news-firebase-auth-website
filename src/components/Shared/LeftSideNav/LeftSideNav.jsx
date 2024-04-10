import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    console.log(category.length)
    return (
        <div>
            <div>
                <h1 className="font-semibold text-2xl mb-2">All Categories</h1>
                <div className="grid grid-cols-1 gap-1">
                    {
                        category?.map((item) => <Link key={item.id} to={`/${item.name}`}>
                            <p className="text-lg font-medium text-[#9F9F9F]">

                        {item.name}
                            </p>
                        </Link> )
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;