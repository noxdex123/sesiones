import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import paolamenaImage from '../../../public/Images/paolamena.png';

const NavigationMenu = [
    {
        href: '/',
        label: "Inicio",
    },
    {
        href: "#Servicios",
        label: "Servicios",
    },

    {
        href: '/reservar-hora',
        label: "Reservar Hora",
    },
    {
        href: '/contacto',
        label: "Contacto",
    },
];

const Navbar = async () => {
    const session = await getServerSession(authOptions);

    return (
        <header className="py-7">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <a href="/">
                            <img src={paolamenaImage.src} alt="Paola Mena" width={60} height={30} />
                        </a>
                    </div>
                    {/* Navigation Menu */}
                    <div className='hidden lg:flex space-x-7'>
                        <ul className='flex space-x-7'>
                            {NavigationMenu.map((item, idx) => (
                                <li key={item.label}>
                                    <a href={item.href} style={{ marginLeft: '16px' }}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href='/protected/dashboard'>Dashboard</Link>

                    {session && session.user?.email ? (
                        <>
                            <Link href='/auth/signout'>Sign out</Link>
                            <p>
                                <b>Signed in as {session.user?.email}</b>
                            </p>
                        </>
                    ) : (
                        <>
                            <Link href='/auth/signin ' className="px-5 py-2 bg-primary text-black rounded-lg hidden lg:inline-block">Sign in</Link>
                        </>
                    )}
                </div >

            </div>
        </header>
    );
};

export default Navbar;