import React from "react";
import CardComp from '../components/Card';
import product from '../components/ProductList';

const MainLayout = () => {
    return (
        <div className="flex flex-col bg-black gap-2 p-2 min-h-screen">
            <div className="text-3xl text-white border-b-2 border-gray-400 p-3 font-custom">Prod<span className="text-gray-500">ucts</span></div>
            <div className=" mx-5 md:mx-[30px] lg:mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                    {product.map(product => (
                        <CardComp
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainLayout;