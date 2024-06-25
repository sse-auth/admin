import { Link } from "react-router-dom"

const Main = () => {
    return (
        <>
            <Link to="/login">Login</Link><br />
            <Link to="/register">register</Link><br/>
            <Link to="/settings">settings</Link><br/>
            <Link to="/profile">profile</Link>
        </>
    )
}

export default Main