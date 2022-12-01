import { ButtonContainer , Button } from './style'

type PropsTypes  ={
  type: String
}

function Buttons({children}: any) {
  return (
    <ButtonContainer >
      <Button  >
        {children}
      </Button>
    </ButtonContainer>
  )
}

export default Buttons

