import React from 'react'

const AddProduct = () => {
    return (
        <div>
            <div className=" mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Product Form</h2>
                <form onSubmit={"handleSubmit"} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="productName">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter category"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="imgUrl">
                            Image URL
                        </label>
                        <input
                            type="url"
                            id="imgUrl"
                            name="imgUrl"
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className='flex space-x-5 ' >
                        {/* Price */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Updated Date */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="updatedDate">
                                Updated Date
                            </label>
                            <input
                                type="date"
                                id="updatedDate"
                                name="updatedDate"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
