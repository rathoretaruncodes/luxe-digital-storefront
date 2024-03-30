"use client"

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const NavbarActions = () => {
    //no. of items in cart is to be stored in local storage
    //It will cause hydration error, to prevent that,
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center gap-x-4">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    0
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions;