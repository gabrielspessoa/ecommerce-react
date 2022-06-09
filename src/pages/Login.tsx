import { Button, Input, StyledContainer } from '../components/Utils';
import { StyledForm } from './../components/LoginForm/style';

export default function Login() {
  return (
    <StyledContainer justify='center'>
      <StyledForm action='' method='post'>
        <div className='form-group'>
          <label htmlFor='email'>E-mail</label>
          <Input type='text' name='email' id='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Senha</label>
          <Input type='password' name='password' id='password' />
        </div>
        <Button type='submit'>Entrar</Button>
      </StyledForm>
    </StyledContainer>
  );
}
