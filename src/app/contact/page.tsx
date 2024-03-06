import React from 'react'
import Navigation from '../_components/Navigation'

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-start gap-12 p-4 ">
                <div className="navigation w-full flex justify-end">
                    <Navigation />
                </div>
            </div>
        </main>
    )
}

export default page