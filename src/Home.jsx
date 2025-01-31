import React from 'react'
import './App.css'
import './index.css'
import classNames from 'classnames';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {

    const navigation = [
        { name: 'HOME', href: '#', current: false },
        { name: 'MENU', href: '#', current: true },
        { name: 'MAKE A RESERVATION', href: '#', current: false },
        { name: 'CONTACT US', href: '#', current: false },
    ];



  return (
    <>
      <div>
                <Disclosure as="nav" className="bg-black">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">

                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ml-auto">
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                                </DisclosureButton>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="https://www.deepnetsoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdns-blue-white.edf98572.png&w=3840&q=75"
                                        className="h-6 sm:h-8 w-auto mt-5"
                                    />
                                </div>
                            </div>

                            <div className="hidden sm:ml-auto sm:block">
                                <div className="flex space-x-4 pr-8 mt-5">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.name === 'HOME' || item.name === 'MAKE A RESERVATION' || item.name === 'CONTACT US'
                                                    ? 'text-white'
                                                    : item.name === 'MENU' && item.current
                                                        ? 'text-blue-500'
                                                        : item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-start">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>


            {/* Section for Menu */}
            <div
                className="h-72 flex items-center justify-center flex-col text-center bg-[url('/menu2.jpg')] bg-cover bg-center bg-black/50 bg-blend-overlay bg-top">
                <span className="menu text-white text-4xl sm:text-5xl font-semibold mt-18"
                    style={{ textShadow: "0px 0px 5px darkred, 0px 0px 2px darkred", fontFamily: "'Oswald', sans-serif", }}
                >
                    MENU
                </span>
                <p className="text-gray-400 text-lg sm:text-xl mt-4 max-w-3xl px-4">
                    Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order,
                    use the "Order Online" button located below the menu.
                </p>
            </div>

            {/* Menu category section */}
            <div className="bg-[url('/background2.png')] bg-contain bg-center h-full py-14 flex flex-col items-center justify-start text-center pt-12 bg-black/50 bg-blend-overlay">
                <div className="flex gap-4 mb-4">
                    <Link
                        to={'/drink'}
                        className="px-5 py-2 bg-black text-white border border-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
                        FOOD
                    </Link>
                    <Link
                        to={'/drink'}
                        className="px-5 py-2 bg-blue-800 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                    >
                        DRINKS
                    </Link>
                    <Link
                        to={'/drink'}
                        className="px-5 py-2 bg-black text-white border border-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
                        BRUNCH
                    </Link>
                </div>

                {/* Menu Items Table */}
                <div className="relative p-1">
                    <table className="table-auto w-full mt-20 h-auto border border-white border-collapse">
                        <div className="mt-15">
                            <h1
                                className="text-white text-3xl sm:text-5xl font-semibold"
                                style={{
                                    textShadow: "0px 0px 5px darkred, 0px 0px 2px darkred",
                                    fontFamily: "'Oswald', sans-serif",
                                }}
                            >
                                <span className="block sm:inline">-BRUNCH</span>{" "}
                                <span className="block sm:inline">COCKTAILS-</span>
                            </h1>
                        </div>



                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-12 p-4 mb-10 ms-9">
                            <div className="flex flex-col items-start justify-around">
                                <div className="flex flex-wrap justify-between items-center text-white text-lg sm:text-xl font-bold w-full">
                                    <span className="flex-shrink-0">
                                        CINNAMON TOAST CRUNCH
                                    </span>
                                    <span className="flex-shrink-0">...................$16</span>
                                </div>
                                <p className="text-gray-400 w-full text-left text-xs sm:text-sm">
                                    Skrewball peanut butter whiskey, vanilla extract,
                                    <br /> Ameratto, Baileys, egg white, cinnamon
                                </p>
                            </div>


                            <div className="flex flex-col items-start justify-around">
                                <div className="flex flex-wrap justify-between items-center text-white text-lg sm:text-xl font-bold w-full">
                                    <span className="flex-shrink-0">
                                        MOET SPRITZ
                                    </span>
                                    <span className="flex-shrink-0">............................................$20</span>
                                </div>
                                <p className="text-gray-400 w-full text-left text-xs sm:text-sm">
                                    Aperol, St Germain, botanical liquor, fresh lime juice, mini
                                    <br /> brut Moet topper
                                </p>
                            </div>


                            <div className="flex flex-col items-start justify-around">
                                <div className="flex flex-wrap justify-between items-center text-white text-lg sm:text-xl font-bold w-full">
                                    <span className="flex-shrink-0">
                                        BAR 42 MARY
                                    </span>
                                    <span className="flex-shrink-0">...............................................$14</span>
                                </div>
                                <p className="text-gray-400 w-full text-left text-xs sm:text-sm">
                                    Titos, Tomato Juice, worcetershire, calery salt, black
                                    <br /> pepper tobasco, fully loaded
                                </p>
                            </div>
                        </div>
                    </table>

                    <img
                        src="/juice1.png"
                        alt="Top Left Decoration"
                        className="absolute top-20 sm:top-0 left-0 sm:left-[-35px] w-16 sm:w-24 md:w-28 lg:w-36"
                    />

                    <img
                        src="/juice2.png"
                        alt="Bottom Right Decoration"
                        className="absolute bottom-0 right-0 w-16 sm:w-24 md:w-28 lg:w-36"
                    />
                </div>
            </div>

            {/* Footer section */}
            <div className='bg-black h-full flex justify-center items-center p-12'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center items-center">
                    <div className="border-2 border-white p-4 text-center w-64 rounded-lg">
                        <span style={{ color: '#0796EF', fontFamily: 'Oswald, sans-serif' }}>CONNECT WITH US</span><br />
                        <p style={{ color: 'grey', fontFamily: 'Oswald, sans-serif' }} className="flex justify-center items-center text-xs mt-3">
                            <Phone size={16} className="mr-1" /> +91 7845452112
                        </p>
                        <p style={{ color: 'grey' }} className="flex justify-center items-center text-sm mt-1">
                            <Mail size={16} className="mr-1" /> info@deepnetsoft.com
                        </p>
                    </div>

                    <div className="border-2 border-white p-4 text-center w-64 rounded-lg h-28 py-9">
                        <span style={{ color: '#0796EF', fontFamily: 'Oswald, sans-serif' }} className='text-2xl'>DEEP <span className='text-white'>NET</span> <span className='text-gray-500'>SOFT</span> </span><br />
                        <p style={{ color: 'grey' }} className="flex justify-center items-center mt-1">
                            <Facebook size={16} className="mr-2" />
                            <Twitter size={16} className="mr-2" />
                            <Youtube size={16} className="mr-2" />
                            <Instagram size={14} />
                        </p>
                    </div>

                    <div className="border-2 border-white p-4 text-center w-64 rounded-lg">
                        <span style={{ color: '#0796EF', fontFamily: 'Oswald, sans-serif' }}>FIND US</span><br />
                        <p style={{ color: 'grey' }} className="flex justify-center items-center text-sm mt-1">
                            <MapPin size={30} className='ms-8' /> First floor, Geo Infopark, Infopark EXPY, Kakkanad
                        </p>
                    </div>
                </div>
            </div>

            <footer className='h-full' style={{ backgroundColor: '#2a2928' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-gray-400 p-2 pt-5">
                    <div className="flex justify-center sm:justify-start items-center px-14">
                        <span className="text-xs sm:text-base text-center sm:text-left">
                            © 2024 Deepnetsoft Solutions. All rights reserved.
                        </span>
                    </div>
                    <div className="lg:col-span-2 flex justify-center sm:justify-end items-center space-x-6 sm:mr-16">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </footer>

    </>
  )
}

export default Home
