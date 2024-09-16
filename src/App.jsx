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
            <a href="#projeto">Projetos</a>
            <a href="#contato">Contato</a>
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
      
      <section className={style.projetos} id='projeto' >
        <h1>Projetos</h1>

        <div className={style.unicoProjeto}>
          <div>
            <h3>Moviefy Tickets</h3>
            <p>Um sistema de venda de ingressos para vários cinemas de várias franquias. Comm funcionalidade para administrador e usuário.</p>
          </div>

          <div>
            <img src="../public/imgs/termo.png" alt="TERMO" />

            <a className={style.buttongit} href='https://github.com/ingridcriistine/Moviefy_Tickets'>
              <img className={style.gitImg} src="../public/imgs/github.png" alt="GitHub" />
              <p className={style.git} >GitHub</p>
            </a>
          </div>
        </div>

        <div className={style.unicoProjeto}>
          <div>
            <h3>MEIGuia</h3>
            <p>Um sistema desenvolvido em apenas 4 horas para um evento de Marketing Digital. APENAS PARA MOBILE.</p>
          </div>

          <div>
            <img className={style.imgProjeto} src="../public/imgs/animei.png" alt="TERMO" />

            <div>
              <a className={style.buttongit} href='https://github.com/Helengendary/TERMO'>
                <img className={style.gitImg} src="../public/imgs/github.png" alt="GitHub" />
                <p className={style.git} >GitHub</p>
              </a>

              <a className={style.buttongit} href='https://ani-3tr8zd90o-helena-picinin-de-limas-projects.vercel.app/'>
                <p className={style.git} >Vercel</p>
              </a>
            </div>
          </div>
        </div>

        <div className={style.unicoProjeto}>
          <div>
            <h3>TERMO</h3>
            <p>Um jogo desenvolvido em equipe como projeto final da matéria de Lógica de Programação no Senai.</p>
          </div>

          <div>
            <img src="../public/imgs/termo.png" alt="TERMO" />

            
            <a className={style.buttongit} href='https://github.com/Helengendary/Ani.MEI'>
              <img className={style.gitImg} src="../public/imgs/github.png" alt="GitHub" />
              <p className={style.git} >GitHub</p>
            </a>
          </div>
        </div>
      </section>

      <section id='contato'>
        <h1>Contatos</h1>
        
        <a href="">
          <img src="" alt="Whatsapp" />
          <p>WhatsApp</p>
        </a>

        <a href="">
          <img src="" alt="Instagram" />
          <p>Instagram</p>
        </a>

        <a href="">
          <img src="" alt="Pinterest" />
          <p>Pinterest</p>
        </a>

        <a href="">
          <img src="" alt="Gmail" />
          <p>Gmail</p>
        </a>
      </section>
    </>
  )
}

export default App
