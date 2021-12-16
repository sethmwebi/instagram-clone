import React from 'react'
import { signOut, useSession } from "next-auth/react"

const MiniProfile = () => {
	const { data: session } = useSession()
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img src={session?.user?.image} className="rounded-full border w-16 h-16 object-cover object-top" alt=""/>
			<div className="flex-1 mx-4">
				<h2 className="font-bold">{session?.user?.username}</h2>
				<h3 className="text-sm text-gray-400">Welcome to instagram</h3>
			</div>
			<button onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign Out</button>
		</div>
	)
}

export default MiniProfile