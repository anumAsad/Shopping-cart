import { Heart, SearchIcon, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <div className='container w-full flex items-center justify-around px-[1440] py-16 h-12 sm:py-20 min-h-20 border-b-gray-800'>
        <div className='text-lg font-bold'>Exclusive</div>
        <div>
            <ul className='flex justify-around gap-8'>
            
             <Link href={"/"}><li>Home</li></Link>
             <li><Link href={"/contact"}>Contact</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href="/sign-up">Signup</Link>
          
        </li>
            </ul>
        </div>
        <div className='flex items-center justify-around gap-2'>
        <div className="flex items-center max-w-md mx-auto bg-gray-100 border border-gray-300 px-4 py-2">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="flex-grow bg-transparent text-gray-700 placeholder-gray-500 outline-none"
      />
      <SearchIcon />
      </div>
      <button className='flex'>
        <Link href="/wishlist">
        <Heart className='hover:fill-red-500'/></Link></button>
        <button><Link href="/cart"><ShoppingCart /></Link></button>
        
        <DropdownMenu>
        <DropdownMenuTrigger><User className='rounded-full bg-red-500'/></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Manage My Account</DropdownMenuItem>
          <DropdownMenuItem>My Order</DropdownMenuItem>
          <DropdownMenuItem>My Cancellations</DropdownMenuItem>
          <DropdownMenuItem>My Reviews</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar