import { useState } from "react"
import { Link } from "react-router-dom"

function SignupForm({setCurrentUser}) {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        const userData = {...formData}
        fetch("/signup",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                    setFormData({
                        username: "",
                        email: "",
                        password: "",
                    });
            })
        } else{
          r.json().then((err) => setErrors(err.errors));  
        }
      });
    }

    return (
        <div className="flex justify-center">
            <form className="w-96 bg-red-200 my-16 rounded-md" onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold py-2">Signup Here!</h2>
                <div className="mb-2">
                    <input 
                        className="rounded-sm pl-2"
                        id = "username-signup"
                        type = "text"
                        placeholder="Username"
                        name = "username"
                        value = {formData.username}
                        onChange = {handleChange}
                    />
                </div>
                <div className="mb-2">
                    <input 
                        className="rounded-sm pl-2"
                        id = "email-signup"
                        type = "text"
                        placeholder="Email"
                        name = "email"
                        value = {formData.email}
                        onChange = {handleChange}
                    />
                </div>
                <div className="mb-2">
                    <input 
                        className="rounded-sm pl-2"
                        id = "password-signup"
                        type = "password"
                        placeholder="Password"
                        name = "password"
                        value = {formData.password}
                        onChange = {handleChange}
                    />
                </div>
                <div className="text-red-600 text-sm pb-2">
                    {errors.map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </div>
                <div>
                    <button className="text-md font-semibold bg-yellow-200 py-0.5 px-2 rounded-sm" type="submit">Submit</button>
                </div>
                <div className="text-sm italic p-2">
                    <Link to="/" replace >Have an account already? Log in!</Link>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
