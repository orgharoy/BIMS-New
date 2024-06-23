import React from 'react'
import {Home, PencilIcon, FileBarChart} from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-orange-500 dark:bg-slate-950 px-8 py-10">
        <Link href="/dashboard" className="flex items-center gap-2 mb-2">
          < Home className="w-[1.3rem] h-[1.3rem]"/> Home
        </Link>

        <Link href="/business/create" className="flex items-center gap-2 mb-2">
          < PencilIcon className="w-[1.3rem] h-[1.3rem]"/> Create Business Initiative
        </Link>

        <Link href="/business/view" className="flex items-center gap-2 mb-2">
          < FileBarChart className="w-[1.3rem] h-[1.3rem]"/> View Business Initiative
        </Link>

        Sidebar
    </div>
  )
}

export default Sidebar