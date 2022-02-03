import { useState } from "react";
import { Link } from "react-router-dom"

function LoginForm({setCurrentUser}) {

    const [formData, setFromData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);
    console.log(errors)
    
    function handleChange(e){
        setFromData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        const userData = {...formData};
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                    setFromData({
                        username: "",
                        password: "",
                    });
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
        <div className="flex justify-center">
            <form className="w-96 bg-red-200 my-16 rounded-md" onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold py-2">Please Log In</h2>
                <div className="mb-2">
                    <input 
                        className="rounded-sm pl-2"
                        id="usernname-login"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <input 
                        className="rounded-sm pl-2"
                        id="password-login"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-red-600 text-sm pb-2">
                    <span>{errors}</span>
                </div>
                <div >
                    <button className="text-md font-semibold bg-yellow-200 py-0.5 px-2 rounded-sm" type="submit">Login</button>
                </div> 
                <div className="text-sm italic p-2">
                    <Link to="/signup" replace>Don't have an account? Sign Up!</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
