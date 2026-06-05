import {useNavigate } from 'react-router'

export default function About(){
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/Contact')
}

    return (
        <div>
            <h2>About Us page</h2>
            <button onClick={goToContact}>Go To Contact</button>
        </div>
    )
}
