import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

const Navbar = () => {
    return(
        <nav className="flex h-full">
            <div className="flex-none">
                <Link href="/">
                    <Image src={Logo} alt="The Dragon's Flagon" className="h-full w-auto" />
                </Link>
            </div>
            <div className="flex-auto">

            </div>
        </nav>
    );
};

export default Navbar;