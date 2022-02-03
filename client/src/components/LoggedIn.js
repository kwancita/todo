import NavBar from "./NavBar"
import TodoPage from "./TodoPage"

function LoggedIn({currentUser, setCurrentUser}) {
    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <TodoPage currentUser={currentUser}/>
        </div>
    )
}

export default LoggedIn
