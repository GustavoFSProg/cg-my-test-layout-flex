import { InputContainer, Input } from './style'

type PropsTypes  ={
  type: String
  placeholder: string
}

function Inputs({type, placeholder} : PropsTypes) {
  return (
    <InputContainer >
      <Input type={`${type}`} placeholder= { placeholder}/>
    </InputContainer>
  )
}

export default Inputs

