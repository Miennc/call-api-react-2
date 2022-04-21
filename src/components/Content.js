import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeServices } from '../services/homeServices'
const Content = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const handSubmit = async (e) => {
        e.preventDefault();
        // homeServices.getArticles(search).then((res) => {
        //     setData(res.data.articles);  
        //     setSearch('')    
        // })
        const res = await homeServices.getArticles(search);
        setData(res.data.articles);
    }
    return (
        <div className="container mx-auto mt-7">

            <div className="w-auto font-bold text-3xl text-black mx-24 flex justify-start">GGI BY TONIC</div>
            <div className="w-auto font-bold text-md mt-2 text-gray-500 mx-24 flex justify-start">lorem ipsum dolor lorem ipsum dolor sit amet, consectet</div>
            <div className="w-auto  font-bold text-3xl h-1 bg-gray-500 mt-3 text-black mx-24 flex justify-start">   </div>
            <div className="w-auto mx-24 flex">
                <div className=" mt-2 font-bold tex-xxl mx-3" >AAA</div>
                <div className=" mt-2 font-bold tex-xxl mx-3" >BBB</div>
                <div className=" mt-2 font-bold tex-xxl mx-3" >CCC</div>
            </div>
            <div className="text-center ">
                <form onSubmit={handSubmit}>
                    <input type="text" placeholder="search" className="border-2 border-red-400 p-3 w-96" onChange={(e) => setSearch(e.target.value)} value={search} />
                </form>
            </div>
            <div className="md:mx-24 w-auto mt-10  grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
                {
                    data.map((item, index) => {
                        return (
                            <div className="w-full p-3 shadow-2xl rounded">
                                <img className="w-full md:h-96 h-64 object-cover" src={item.urlToImage} alt="" />
                                <h6 className="text-3xl mt-4">{item.author}</h6>
                                <div className="w-full mt-3 border-t border-black-500">
                                    <p className="mt-3">{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Content;
