import { Link } from 'react-router-dom';

export const Home = () => {
    return <div> Hello World
    <div class="p-2 g-col-6"></div>
        <Link to="/Myname"> <button type="button" class="btn btn-outline-info btn-lg">My Name</button>
        </Link>
    </div>   
}