import { GameController, Barricade } from "@phosphor-icons/react";
import './projetos.css'

function Projetos() {
    return (
      <section className='projetos'>
        <h2>
          <GameController size={32} />
          {' '}
          Projetos
          {' '}
          <GameController size={32} />
        </h2>
        <div>
          <h3>
            Básico
            <br></br>
            <Barricade size={32} />
          </h3>
          <h3>
            Intermediário
            <br></br>
            <Barricade size={32} />
          </h3>
          <h3>
            Avançado
            <br></br>
            <Barricade size={32} />
          </h3>
        </div>
      </section>
    )
}

export default Projetos;