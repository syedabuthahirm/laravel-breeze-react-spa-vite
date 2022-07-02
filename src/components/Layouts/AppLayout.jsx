import Navigation from '@/components/Layouts/Navigation'
import { Outlet } from 'react-router-dom'

const AppLayout = ({ user }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                </div>
            </header>

            {/* Page Content */}
            <main><Outlet user={user} /></main>
        </div>
    )
}

export default AppLayout
