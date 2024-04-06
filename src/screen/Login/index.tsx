import * as yup from 'yup'
import { Formik } from 'formik'
import * as Styles from './styles'
import SubmitButton from '../../components/Buttons/SubmitButton'

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
        <Formik
            initialValues={{email:'', password:''}}
            validationSchema={SCHEMA}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {({handleSubmit}) => (
                <Styles.FormStyled>
                    <Styles.ContainerSessao>
                        <Styles.LabelStyled>Email:</Styles.LabelStyled>
                        <Styles.InputStyled type="email" name="email" id="email" placeholder="Ex: freela@email.com" />
                        <Styles.ErrorStyled name='email' />
                    </Styles.ContainerSessao>
                    <Styles.ContainerSessao>
                        <Styles.LabelStyled>Passsword:</Styles.LabelStyled>
                        <Styles.InputStyled type="password" name="password" id="passoword" placeholder="Digite sua senha..." />
                        <Styles.ErrorStyled name='password' />
                    </Styles.ContainerSessao>
                    <SubmitButton>
                        <span>Entrar</span>
                    </SubmitButton>
                </Styles.FormStyled>
            )}
        </Formik>
    </Styles.LoginStyled>
  )
}

export default Login