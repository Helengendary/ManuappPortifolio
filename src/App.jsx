import style from './App.module.css'
import Instagram from '../public/imgs/logotipo-do-instagram.png'
import Linkedin from '../public/imgs/logotipo-do-linkedin.png'
import Whatsapp from '../public/imgs/whatsapp.png'
import Git from '../public/imgs/github.png'
import Termo from '../public/imgs/termo.png'
import Mei from '../public/imgs/animei.png'
import { useState } from 'react'
import { Tilt } from 'react-tilt'

function App() {
  const defaultPhoneNumber = '5541984962006'
  const [message, setmessage] = useState('')

  const handleChange = (e) => {
    const {value} = e.target;
    setmessage(value);
  }

  const handleWhatsAppMessage = () => {
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Mensagem:%20${message}`;

    window.open(whatsappUrl, '_blank');
  }

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
          <p>Olá, meu nome é Helena Picinin de Lima! Tenho 18 anos sou natural de Curitiba.</p>
          <div className={style.xp}>
            <h1>Experiência</h1>
            <ul>
              <li>⭐ Aprendiz em Soluções Digitais na Bosch (fev 2024 - dez 2025)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={style.habilidades} id='habilidade'>
        <Tilt className={style.Tilt}>
          <h4>Python</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>Linguagem C</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>Java</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>HTML</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>CSS</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>MySQL</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>SQL Server</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>Excel</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>IoT</h4>
        </Tilt>
        <Tilt className={style.Tilt}>
          <h4>Inglês Iniciante</h4>
        </Tilt>
      </section>
      
      <section className={style.projetos} id='projeto' >
        <h1>Projetos</h1>

        <div className={style.unicoProjeto}>
          <div className={style.tituloProjeto}>
            <h3>Moviefy Tickets</h3>
            <p>Um sistema de venda de ingressos para vários cinemas de várias franquias. Comm funcionalidade para administrador e usuário.</p>

            <a className={style.buttongit} href='https://github.com/ingridcriistine/Moviefy_Tickets'>
              <img className={style.gitImg} src={Git} alt="GitHub" />
              <p className={style.git} >GitHub</p>
            </a>
          </div>


          <img className={style.imgProjeto} src="https://github.com/ingridcriistine/rep-imgs/blob/main/telaInicial.png?raw=true" alt="Moviefy Tickets" />

        </div>

        <div className={style.unicoProjeto}>
          <div className={style.tituloProjeto}>
            <h3>MEIGuia</h3>
            <p>Um sistema desenvolvido em apenas 4 horas para um evento de Marketing Digital. APENAS PARA MOBILE.</p>
            <a className={style.buttongit} href='https://github.com/Helengendary/TERMO'>
              <img className={style.gitImg} src={Git} alt="GitHub" />
              <p className={style.git} >GitHub</p>
            </a>

            <a className={style.buttongit} href='https://ani-3tr8zd90o-helena-picinin-de-limas-projects.vercel.app/'>
              <p className={style.git} >Vercel</p>
            </a>
          </div>

          <img className={style.imgProjeto} src={Mei} alt="ANIMEI" />

        </div>

        <div className={style.unicoProjeto}>
          <div className={style.tituloProjeto}>
            <h3>TERMO</h3>
            <p>Um jogo desenvolvido em equipe como projeto final da matéria de Lógica de Programação no Senai.</p>
            
            <a className={style.buttongit} href='https://github.com/Helengendary/Ani.MEI'>
              <img className={style.gitImg} src={Git} alt="GitHub" />
              <p className={style.git} >GitHub</p>
            </a>
          </div>

          <img  className={style.imgProjeto} src={Termo} alt="TERMO" />
        </div>
      </section>

      <section id='contato'>
        <h1>Contatos</h1>
        
        <div  className={style.contato}>
          <div className={style.elementContato}>
            <textarea id='message' name='message' value={message} onChange={handleChange} required style={{width:'100%'}} placeholder='Digite uma mensagem para Helena'></textarea>
            <button onClick={handleWhatsAppMessage}>
              <img src={Whatsapp} alt="Whatsapp" />
              <p>WhatsApp</p>
            </button>
          </div>

          <a className={style.elementContato} href="">
            <img src={Instagram} alt="Instagram" />
            <p>Instagram</p>
          </a>

          <a className={style.elementContato} href="https://www.linkedin.com/in/helena-picinin-de-lima-b85742227/">
            <img src={Linkedin} alt="Linkedin" />
            <p>Linkedin</p>
          </a>
        </div>
      </section>
    </>
  )
}

export default App
