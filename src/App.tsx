import { useRoutes, NavLink, Link } from 'react-router-dom'
import routes from './router'
function App() {
    console.log(routes)
    const Outlet = useRoutes(routes)
    return (
        <div className='App'>
            <NavLink to=''>首页</NavLink>
            <NavLink to='home'>Home</NavLink>
            <Link to='about'>About</Link>
            {Outlet}
        </div>
    )
}

export default App
