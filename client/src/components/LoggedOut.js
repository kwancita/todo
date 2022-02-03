import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoggedOut({setCurrentUser}) {

    useEffect(() => {
        <Navigate to="/login" />
    }, [])

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LoginForm setCurrentUser={setCurrentUser} />} />
                <Route exact path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} />} />
            </Routes>
        </div>
    )
}

export default LoggedOut
