import style from './App.module.css'

function App() {
  return (
    <>
      <div className={style.menu}>
        <h2>HELENA</h2>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#sobre">Habilidades</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </>
  )
}

export default App
