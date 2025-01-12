import React from 'react'

const ProductCart = ({ productData }) => {
    const { productName, category, imgUrl, price, updatedDate } = productData;
    return (
        <div>
            <div className="card    shadow-xl">
                <figure className="px-10 border ">
                    <img
                        src={imgUrl}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-start px-10 lg:my-4 ">
                    <h2 className="card-title font-bold  ">Category Name : {category} </h2>
                    <h2 className="card-title font-bold lg:text-xl ">Product Name : {productName} </h2>
                    <h2 className="card-title font-bold lg:text-lg ">Product Price : {price}$ </h2>
                    <div className="card-actions w-full ">
                        <button className="btn bg-blue-700 w-full my-3 py-2 text-white font-bold rounded-xl shadow-xl ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart
