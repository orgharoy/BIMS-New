"use client"
 
import * as React from "react"
import Link from "next/link"    
import { Moon, Sun, Computer, CircleUser, User, Pen, LogOutIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Logo } from "@/public/svg-images"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const Navigation = () => {
    const { setTheme } = useTheme()
    return (
        <nav className="container mx-auto h-16 flex items-center justify-between shadow-md dark:shadow-none">
            <Link href='/' className="h-8 cursor-pointer flex items-center gap-2">
              <Logo />
              <h1 className="font-bold text-2xl">StratX</h1>
            </Link>
            
            <div className="flex items-center">

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className={cn('outline-none border-none focus:outline-none focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:invisible')}>
                      <CircleUser className="h-[1.3rem] w-[1.3rem] transition-all" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem> 
                      <User className="h-[1.2rem] w-[1.2rem] mr-2"/>  View Profile 
                    </DropdownMenuItem>
                    <DropdownMenuItem className={cn('')}> 
                      <Pen className="h-[1rem] w-[1rem] mr-2"/>  Change Password 
                    </DropdownMenuItem>
                    <DropdownMenuItem className={cn('text-red-600 hover:!text-white hover:!bg-red-500')}> 
                      <LogOutIcon className="h-[1.1rem] w-[1.1rem] mr-2"/>  Logout 
                    </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>


              {/* <Link href='/login'>Login</Link> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className={cn('outline-none border-none focus:outline-none focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:invisible')}>
                    <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      <Sun className="h-[1.2rem] w-[1.2rem] mr-2"/> Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      <Moon className="h-[1.1rem] w-[1.1rem] mr-2"/> Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      <Computer className="h-[1.1rem] w-[1.1rem] mr-2"/>System
                    </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
        </nav>
    )
}

export default Navigation