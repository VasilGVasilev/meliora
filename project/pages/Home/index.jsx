import { Contacts } from '../../components/Contacts'
import { Description } from '../../components/Description'
import { Gallery } from '../../components/Gallery'
import { Landing } from '../../components/Landing'
import { Plan } from '../../components/Plan'

const Home = () => {

    return (
        <>
            <Landing></Landing>
            <Description></Description>
            <Plan></Plan>
            <Gallery></Gallery>
            <Contacts></Contacts>
        </>
    )
}

export default Home
