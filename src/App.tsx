import Buttons from './components/Button'
import Inputs from './components/Input'
import { ContainerApp, HR, InputsContainer, ImageContainer, LineContainer } from './style-app'
import astronauta from './assets/astronauta.jpeg'

function App() {
  return (
    <ContainerApp>
      <LineContainer>
        <HR />
      </LineContainer>
      <ImageContainer>
        <img width="290" src={astronauta} alt="astronauta" />
      </ImageContainer>

      <InputsContainer>
        <Inputs type="text" placeholder="Name" />

        <Inputs type="email" placeholder="email" />

        <Inputs type="password" placeholder="Password" />
      </InputsContainer>

      <Buttons>Botao</Buttons>
    </ContainerApp>
  )
}

export default App
