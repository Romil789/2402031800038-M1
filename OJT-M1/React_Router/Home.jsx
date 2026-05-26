import { useNavigate } from 'react-router'

export default function Home(){

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/About')
    }
    return (
        <div>
            <h2>Welcome to Home page</h2>
            <button onClick={goToAbout}>Click To About</button>
        </div>
    )
}
