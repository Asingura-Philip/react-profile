import { Outlet,Link } from "react-router-dom";


function LayoutTwo(){
    return(<>
    <h1>my app</h1>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/results">results</Link></li>
        <li><Link to="/Hobbies">hobbies</Link></li>
    </ul>
    <Outlet></Outlet>
    </>
    )

}

export default LayoutTwo