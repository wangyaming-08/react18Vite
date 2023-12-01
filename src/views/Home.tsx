import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const goToAbout = () => {
        navigate('/about/100?name=wym', {
            replace: false,
            state: {
                id: 123,
            },
        })
    }
    return (
        <div>
            Home
            <Button type='primary' onClick={goToAbout}>
                前往About
            </Button>
        </div>
    )
}
export default Home
