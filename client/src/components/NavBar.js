import { useNavigate } from "react-router-dom";

function NavBar({setCurrentUser}) {

    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        navigate('/')
        console.log("Logged out")
        setCurrentUser(null)
    }

    return (
        <div className="bg-red-200 sticky top-0 z-50 py-6 text-lg font-semibold p-2 flow-root">
            <div className="float-left">
                <h1 >DoMe</h1>
            </div>
            <div className="float-right">
                <svg  onClick={handleLogout} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </div>
            
        </div>
        
    )
}

export default NavBar
