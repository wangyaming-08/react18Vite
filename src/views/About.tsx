import { useEffect } from 'react'
import { useSearchParams, useResolvedPath, useParams, useLocation } from 'react-router-dom'

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams() // 获取地址栏参数
    const path = useResolvedPath('') // 获取当前页面路径
    const params = useParams() /// about/100?name=wym' 动态参数100
    const location = useLocation() // 可以获取state参数
    useEffect(() => {
        // console.log(searchParams.get('name'))
        // console.log(path)
        // console.log(params)
        console.log(location)
    }, [])
    return (
        <div>
            About
            <button onClick={() => setSearchParams({ name: '张三' })}>设置参数</button>
        </div>
    )
}
export default About
