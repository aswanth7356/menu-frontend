import React from 'react'
import { useState } from "react";
import { addFieldApi } from '../services/allApi';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Modal() {

    const [fieldData, setFieldData] = useState({
        name: '', price: '', description: ''
    })

    const navigate = useNavigate()

    const handelSubmit = async () => {
        // console.log(fieldData)

        const { name, price, description } = fieldData
        if (!name || !price || !description) {
            toast.warning("Enter Valid Data")
        } else {
            const result = await addFieldApi(fieldData)
            console.log(result)
            if (result.status == 200) {
                toast.success("Successfully Added!!")
                setFieldData({
                    name: '', price: '', description: ''
                })
                handleCloseModal()
                navigate('/drink')
            } else {
                toast.dark("Error")
            }
        }


    }




    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="">
            {/* Button to open modal */}
            <button
                className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
                onClick={handleOpenModal}
            >
                ADD MORE ITEMS
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Add Item</h2>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Name"
                            onChange={(e) => { setFieldData({ ...fieldData, name: e.target.value }) }} value={fieldData.name}
                        />
                        <input
                            type="number"
                            className="w-full px-4 py-2 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Price"
                            onChange={(e) => { setFieldData({ ...fieldData, price: e.target.value }) }} value={fieldData.price}
                        />
                        <input
                            type="text"
                            className="w-full px-4 py-2 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Description"
                            onChange={(e) => { setFieldData({ ...fieldData, description: e.target.value }) }} value={fieldData.description}
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-md text-sm text-black mr-2 hover:bg-gray-400"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button className="bg-blue-600 px-4 py-2 rounded-md text-sm text-white hover:bg-red-700" onClick={handelSubmit}>
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
