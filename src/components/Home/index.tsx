import { Ghost } from "@phosphor-icons/react";
import './home.css'

function Home() {
    return (
        <div className='home'>
            <h2>
                Projetos Pessoais
                {' '}
                <Ghost size={35} />
            </h2>
        </div>
    )
}

export default Home;