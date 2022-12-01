import Buttons from './components/Button'
import Inputs from './components/Input'
import { ContainerApp } from './style-app'
import astronauta from './assets/astronauta.jpeg'

function App() {
  return (
    <ContainerApp>
      <div style={{ display:'flex',
 width:'100vw',
 }}>
        
      <hr style={{
        width: '100%', maxWidth: '100%',
        border: '7px solid darkgreen', margin: '0'
      }} ></hr>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          position: 'relative',
         
        }}
      >
        <img width="290" src={astronauta} alt="astronauta" />
      </div>
      

        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'column',
          marginTop: '40px',
        }}
        >

   
        <Inputs type="text" placeholder="Name" />

        <Inputs type="email" placeholder="email" />

        <Inputs type="password" placeholder="Password" />
        </div>
        

      <Buttons>Botao</Buttons>
    </ContainerApp>
  )
}

export default App
