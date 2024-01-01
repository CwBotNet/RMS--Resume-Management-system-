"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavLinks = [
    { name: 'Jobs', href: '/Jobs' },
    { name: 'Company', href: '/Company' },
    { name: 'Candidate', href: '/Candidates' },
]

export function Navigation() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size={"icon"}><FontAwesomeIcon icon={faBars} /></Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle className="text-center">RSM by Dev Raj </SheetTitle>
                        <SheetDescription className="text-center">
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                        <hr className="py-[0.3px] bg-purple-300 " />
                    </SheetHeader>
                    <div className="grid gap-8 py-12 text-center">
                        {NavLinks.map((NavLink, i) => (
                            <a href={NavLink.href} key={i}>
                                {NavLink.name}
                            </a>
                        ))}
                        <div className="grid grid-cols-4 items-center gap-4">
                        </div>
                    </div>
                    <SheetFooter>

                        <SheetClose asChild>
                            {/* <Button type="submit">Save changes</Button> */}
                        </SheetClose>
                        <div className="absolute bottom-0 right-0 m-4">
                            <ModeToggle />
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}
