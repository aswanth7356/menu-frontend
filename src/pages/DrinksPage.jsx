import React from 'react'
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { getFieldApi } from "../services/allApi";
import { Link } from "react-router-dom";


function DrinksPage() {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await getFieldApi()
        // console.log(res)
        if (res.status == 200) {
            // console.log(res.data)
            setData(res.data)
            getData()
        }
        else {
            console.log(res)
        }
    }

    const drinksMenu = [
        {
            name: 'CINNAMON TOAST CRUNCH',
            price: '$16',
            description: 'Skrewball peanut butter whiskey, vanilla extract, Ameratto, Baileys, egg white, cinnamon',
        },
        {
            name: 'MOET SPRITZ',
            price: '$20',
            description: 'Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper',
        },
        {
            name: 'BAR 42 MARY',
            price: '$14',
            description: 'Titos, Tomato Juice, worcetershire, calery salt, black pepper tobasco, fully loaded',
        },
    ];



    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Menu</h1>
            <div className="flex justify-center items-center my-8">
                <Modal />
                <div className="flex justify-center items-center ms-5">
                    <Link
                        to={'/'}
                        className="rounded-md bg-green-600 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800"
                        type="button"
                    >
                        Home
                    </Link>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {drinksMenu.map((drink, index) => (
                    <div
                        key={index}
                        className="border border-gray-700 rounded-lg p-4 flex flex-col items-start"
                    >
                        <div className="flex justify-between w-full">
                            <h2 className="text-xl font-semibold">{drink.name}</h2>
                            <span>{drink.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">{drink.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                    {data.map((drink, index) => (
                        <div
                            key={index}
                            className="border border-gray-700 rounded-lg p-4 flex flex-col items-start"
                        >
                            <div className="flex justify-between w-full">
                                <h2 className="text-xl font-semibold">{drink.name}</h2>
                                <span>${drink.price}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">{drink.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DrinksPage
