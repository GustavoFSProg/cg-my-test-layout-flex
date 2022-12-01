import Buttons from './components/Button'
import Inputs from './components/Input'
import { ContainerApp, HR, InputsContainer, ImageContainer, LineContainer } from './style-app'
import astronauta from './assets/astronauta.jpeg'
import { Input } from './components/Input/style'

function App() {
  return (
    <ContainerApp>
      <LineContainer>
        <HR />
      </LineContainer>
      <ImageContainer>
        <img width="290" src={astronauta} alt="astronauta" />
        <div style={{
          display: 'flex', marginLeft: '180px',
          justifyContent: 'center', width: '400px',
          marginTop: '10px'
        }}>
          
        <button style={{
          width: '115px',
          height: '39px',
          color: 'white', background: '#9999ff',
          marginRight: '15px',
          marginTop: '10px',
          fontSize: '14px'
        }}>Login</button>

           <button style={{
          width: '115px',
          height: '39px',
          color: '#9999ff', background: 'white',
          marginRight: '210px',
          marginTop: '10px',
            fontSize: '14px',
          border: '1px solid #9999ff'
          }}>Register</button>
      </div>
          

      </ImageContainer>

      <InputsContainer>
        <Inputs type="text" placeholder="Name" />

        <Inputs type="email" placeholder="email" />

        <Inputs type="password" placeholder="Password" />

        <div style={{
          display: 'flex', flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '18px',
          marginTop: '15px',
          // width: '300px'

        }}>

          <input  style={{ width: '50px', height: '18px', marginRight: '3px' }}
            type="checkbox" placeholder="Check" /> 
        <span>
        I Agree to the contracts aready
        </span>
        </div>

      </InputsContainer>

      <Buttons>Botao</Buttons>

      <div style={{
        display: 'flex',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
          marginTop: '35px'

      }}>
          <div style={{
        display: 'flex',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
          
        <hr style={{
              width: '40%',
          border: '1px solid #b3b3b3',
          // marginLeft: '820px',
            marginTop: '20px',
          

        }} />
        <span style={{
          // marginLeft: '-720px',
            marginTop: '10px',
            color: '#b3b3b3',
            fontSize: '15px',
            marginLeft: '6px',
            marginRight: '6px'

          

        }}>
          OU
        </span>

         <hr style={{
              width: '40%',
            border: '1px solid #b3b3b3',
          color: '#bfbfbf',
          // marginLeft: '-820px',
          marginTop: '20px'

        }} />
        
      </div>

      </div>

    </ContainerApp>
  )
}

export default App
