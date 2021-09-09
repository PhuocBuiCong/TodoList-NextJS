import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div>
            <h1>My Home Page by BP</h1>    
            <p><Link href="/users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}
