import style from './App.module.css'

function App() {
  return (
    <>
      <header>
        <div className={style.menu}>
          <h2>HELENA</h2>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#habilidade">Habilidades</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
          </nav>
        </div>
      </header>

      
      <section className={style.sobre} id='sobre'>
        <img className={style.imgPrincipal} src="https://i.pinimg.com/564x/e0/81/90/e0819011a26647eaad0509a3f911f74f.jpg" alt="Helena" />
        <div className={style.textAbout}>
          <p>Olá, meu nome é Helena Picinin de Lima! Tenho 18 anos sou natural de Curitiba. Sou Desenvolvedora de sistemassdfdsfsdfsdfsadf</p>
          <div className={style.xp}>
            <h1>Experiência</h1>
            <ul>
              <li>⭐ Aprendiz em Soluções Digitais na Bosch (fev 2024 - dez 2025)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={style.habilidades} id='habilidade'>
        <h4>Python</h4>
        <h4>Linguagem C</h4>
        <h4>Java</h4>
        <h4>HTML</h4>
        <h4>CSS</h4>
        <h4>MySQL</h4>
        <h4>SQL Server</h4>
        <h4>Excel</h4>
        <h4>IoT</h4>
        <h4>Inglês Iniciante</h4>
      </section>
      
      <section className={style.projetos} >
        <h1>Projetos</h1>

        <div className={style.unicoProjeto}>
          <h3>Moviefy Tickets</h3>
          <p>Um sistema de venda de ingressos para vários cinemas de várias franquias. Comm funcionalidade para administrador e usuário.</p>
          <a className={style.buttongit} href='https://github.com/ingridcriistine/Moviefy_Tickets'>
            <img className={style.gitImg} src="../public/imgs/github.png" alt="GitHub" />
            <p className={style.git} >GitHub</p>
          </a>
        </div>

        <div className={style.unicoProjeto}>
          <h3>MEIGuia</h3>
          <p>Um sistema desenvolvido em apenas 4 horas para um evento de Marketing Digital.</p>
          <a className={style.buttongit} href='https://github.com/Helengendary/Ani.MEI'>
            <img className={style.gitImg} src="../public/imgs/github.png" alt="GitHub" />
            <p className={style.git} >GitHub</p>
          </a>
        </div>

        <div className={style.unicoProjeto}>
          <h3>TERMO</h3>
          <p>Um jogo desenvolvido em equipe como projeto final da matéria de Lógica de Programação no Senai.</p>
          <a className={style.buttongit} href='https://github.com/Helengendary/TERMO'>
            <img className={style.gitImg} src="../public/imgs/github.png" alt="GitHub" />
            <p className={style.git} >GitHub</p>
          </a>
        </div>

      </section>
    </>
  )
}

export default App
