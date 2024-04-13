import * as yup from 'yup'
import { Formik } from 'formik'
import * as Styles from './styles'
import SubmitButton from '../../components/Buttons/SubmitButton'
import { privateAPi } from '../../services/privateApi'
import { Link } from 'react-router-dom'

const SCHEMA = yup.object().shape({
    email: yup
            .string()
            .email('É necessario um email')
            .required("Campo necessario"),
    password: yup
            .string()
            .required('Campo necessário')
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .max(20, 'A senha não deve exceder 20 caracteres')
})

const Login = () => {
  return (
    <Styles.LoginStyled>
        <Styles.ImageContainer>
            <Styles.ImageContent>
                <Styles.ImageTitle>Seu site na palma da mão.</Styles.ImageTitle>
                <Styles.ImageCaption>Seu site dos sonhos você acha só aqui</Styles.ImageCaption>
            </Styles.ImageContent>
        </Styles.ImageContainer>
        <Styles.FormContainer>
            <Styles.HeaderContainer>
                <Styles.FormTitle>Find Freela</Styles.FormTitle>
                <Styles.FormCaption>Logue com sua conta</Styles.FormCaption>
            </Styles.HeaderContainer>
            <Formik
                initialValues={{email:'', password:''}}
                validationSchema={SCHEMA}
                onSubmit={async(values) => {
                    await privateAPi
                        .post('/auth/login',{
                            login: values.email,
                            password: values.password
                        })
                        .then((res) => {
                            localStorage.setItem('authToken', res.data.token)
                        })
                    
                }}
            >
                {() => (
                    <Styles.FormStyled>
                        <Styles.ContainerSessao>
                            <Styles.LabelStyled>Email:</Styles.LabelStyled>
                            <Styles.InputStyled type="email" name="email" id="email" placeholder="Ex: freela@email.com" />
                            <Styles.ErrorStyled name='email' />
                        </Styles.ContainerSessao>
                        <Styles.ContainerSessao>
                            <Styles.LabelStyled>Passsword:</Styles.LabelStyled>
                            <Styles.InputStyled type="password" name="password" id="password" placeholder="Digite sua senha..." />
                            <Styles.ErrorStyled name='password' />
                        </Styles.ContainerSessao>
                        <SubmitButton margin={{top: 36}}>
                            Login
                        </SubmitButton>
                    </Styles.FormStyled>
                )}
            </Formik>
        <Styles.RegisterContainer>
            <span>Não tem uma conta?</span><Link to={'/'}>Criar uma conta</Link>
        </Styles.RegisterContainer>
        </Styles.FormContainer>
    </Styles.LoginStyled>
  )
}

export default Login