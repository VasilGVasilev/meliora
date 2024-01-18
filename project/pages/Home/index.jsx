import { Contacts } from '../../components/Contacts'
import { Description } from '../../components/Description'
import { Gallery } from '../../components/Gallery'
import { Landing } from '../../components/Landing'

const Home = () => {

    return (
        <>
            <Landing></Landing>
            <Description></Description>
            <Gallery></Gallery>
            <Contacts></Contacts>
        </>
    )
}

export default Home
