import { useRoutes } from 'react-router-dom'
import routes from './router'
function App() {
    const Outlet = useRoutes(routes)
    return <div className='App'>{Outlet}</div>
}

export default App
