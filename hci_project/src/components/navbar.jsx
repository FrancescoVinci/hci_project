"use client"

import React, {useState} from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Image,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";



export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Stream Graph",
        "Chord Diagram",
        "Parallel Coordinate Plot",
        "Line Graph",
        "Heat map",
        "Spiral graph",
        "Scatter plot",
        "Ridgeline plot",
        "BeViCi Group Info"
    ];

    return (
        <NextUINavbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="center">
                <NavbarBrand>
                    <p className="font-semibold text-sm text-zinc-800 inline-block text-transparent bg-clip-text">HCI Project</p>
                    <Image src="/fondazione.png" height={80} width={80}/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-5" justify="center">
                <NavbarBrand>
                    <Image src="/fondazione.png" height={80} width={80}/>
                    <p className="font-semibold text-sm text-zinc-800 inline-block text-transparent bg-clip-text">HCI Project</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Group Info
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Dropdown className="bg-blue-100">
                        <DropdownTrigger>
                            <Button variant="light" >
                                Representations
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu  >
                            {menuItems.map((item, index) => (
                                <DropdownItem key={`${item}-${index}`}>
                                    <Link
                                        className="w-full"
                                        color={
                                            index === menuItems.length - 1 ? "primary" : "foreground"
                                        }
                                        href="#"
                                        size="lg"
                                    >
                                        {item}
                                    </Link>
                                </DropdownItem>
                            ))}

                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === menuItems.length - 1 ? "warning" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}