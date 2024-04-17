import * as yup from 'yup'
import { Formik } from 'formik'
import * as Styles from './styles'
import SubmitButton from '../../components/Buttons/SubmitButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SCHEMA = yup.object().shape({
    email: yup
            .string()
            .email('É necessario um email')
            .required("Campo necessario"),
    password: yup
            .string()
            .required('Campo necessário')
            .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas precisam ser iguais'),
    role: yup.object({
        label: yup.string(),
        value: yup.string()
    })

})


const Register = () => {
    const [selectedRole, setSelectedRole] = useState()
    const navigate = useNavigate()

    
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
                <Styles.FormCaption>Registre-se agora</Styles.FormCaption>
            </Styles.HeaderContainer>
            <Formik
                initialValues={{name: '', email:'', password:'', confirmPassword: '', role:{label:'', value:''}}}
                validationSchema={SCHEMA}
                onSubmit={async(values) => {
                    await axios.post('http://10.10.10.15:8080/register',{
                        nome: values.name,
                        login: values.email,
                        password: values.password,
                        role: selectedRole
                    }).then(() => {
                        navigate('/login')
                    })
                }}
            >
                {() => (
                    <Styles.FormStyled>
                        <Styles.ContainerSessao>
                            <Styles.LabelStyled>Nome:</Styles.LabelStyled>
                            <Styles.InputStyled type="text" name="name" id="name" placeholder="Ex: Daniel" />
                            <Styles.ErrorStyled name='name' />
                        </Styles.ContainerSessao>
                        <Styles.ContainerSessao>
                            <Styles.LabelStyled>Email:</Styles.LabelStyled>
                            <Styles.InputStyled type="email" name="email" id="email" placeholder="Ex: freela@email.com" />
                            <Styles.ErrorStyled name='email' />
                        </Styles.ContainerSessao>
                        <Styles.ContainerSessao>
                            <Styles.LabelStyled>Senha:</Styles.LabelStyled>
                            <Styles.InputStyled type="password" name="password" id="password" placeholder="Digite sua senha..." />
                            <Styles.ErrorStyled name='password' />
                        </Styles.ContainerSessao>
                        <Styles.ContainerSessao>
                            <Styles.LabelStyled>Confirme sua senha:</Styles.LabelStyled>
                            <Styles.InputStyled type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha..." />
                            <Styles.ErrorStyled name='confirmPassword' />
                        </Styles.ContainerSessao>
                        <Styles.ContainerSessao>
                        <Styles.LabelStyled>Cargo:</Styles.LabelStyled>
                                <Styles.StyledSelected name='role' id='role' 
                                onChange={(evt) => {
                                    setSelectedRole(evt.target.value),
                                    console.log(selectedRole)
                                }}
                            >
                                <Styles.StyledOption value="ADMIN">Programador</Styles.StyledOption>
                                <Styles.StyledOption value="USER">Cliente</Styles.StyledOption>
                            </Styles.StyledSelected>
                            <Styles.ErrorStyled name='role' />

                        </Styles.ContainerSessao>
                        <SubmitButton margin={{top: 36}}>
                            Login
                        </SubmitButton>
                    </Styles.FormStyled>
                )}
            </Formik>
        </Styles.FormContainer>
    </Styles.LoginStyled>
  )
}

export default Register