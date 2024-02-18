"use client"

import React, { useState } from "react";
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
import {useRouter} from "next/navigation";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

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

    const menuItemsRef = [
        "/representations/StreamGraph",
        "/representations/ChordDiagram",
        "/representations/ParallelCoordinatePlot",
        "/representations/LineGraph",
        "/representations/HeatMap",
        "/representations/SpiralGraph",
        "/representations/ScatterPlot",
        "/representations/RidgelinePlot",
        "/representations/BeViCiGroupInfo"
    ];

    return (
        <NextUINavbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className=""
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="center">
                <NavbarBrand className="hover:cursor-pointer" onClick={() => router.push("/")}>
                    <p className="font-semibold text-sm text-zinc-800 inline-block text-transparent bg-clip-text">HCI Project</p>
                    <Image src="/fondazione.png" height={80} width={80} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-5" justify="center">
                <NavbarBrand className="hover:cursor-pointer" onClick={() => router.push("/")}>
                    <Image src="/fondazione.png" height={80} width={80} />
                    <p className="font-semibold text-sm text-zinc-800 inline-block text-transparent bg-clip-text">HCI Project</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Group Info
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Dropdown className="bg-blue-50">
                        <DropdownTrigger>
                            <Button variant="light" color="primary" className="text-gray">
                                Representations
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            itemClasses={{
                                base: [
                                    "rounded-md",
                                    "text-default-500",
                                    "transition-opacity",
                                    "data-[hover=true]:text-foreground",
                                    "data-[hover=true]:bg-blue-100",
                                    "dark:data-[hover=true]:bg-default-50",
                                    "data-[selectable=true]:focus:bg-default-50",
                                    "data-[pressed=true]:opacity-70",
                                    "data-[focus-visible=true]:ring-default-500",
                                ],
                            }}>
                            {menuItems.map((item, index) => (
                                <DropdownItem
                                    key={`${item}-${index}`}
                                    href={`${menuItemsRef[index]}`}
                                >
                                    {item}
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