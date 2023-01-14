import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../../utils/api-calls'
import { FormLabel, LoginContainer, LoginErrorContainer, LoginFormInput, LoginForms,
     LoginSubConBtn, LoginSubConBtnHold, LoginSubContainer, LoginSubHeader } from './Login.styles'
import { toast } from 'react-toastify';


const Login = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    const from = location?.state?.from || '/'
    
    const {mutate, isLoading, isError, error} = useMutation((userData)=>loginUser(userData), {
        onSuccess:  (data, context) => {
            toast.success(`Welcome ${data?.user_type}`, {progressClassName:"toastProgress",icon:false})
            localStorage.setItem("shortName", JSON.stringify(context.shortName))
            localStorage.setItem("user", JSON.stringify(data))
            queryClient.setQueryData("user", data)
            navigate(from)
        },
    })

    const onSubmit = (userCredentials) => {
        mutate(userCredentials)
    }

    const user = queryClient.getQueryData("user")

    if(user) {
        return <Navigate to="/"/>
    }
    return (
        <>
            <LoginContainer>
                <LoginSubContainer>
                    <LoginSubHeader>Login</LoginSubHeader>
                    {isError ? <LoginErrorContainer>{error.message}</LoginErrorContainer> : null}
                        <LoginForms onSubmit={handleSubmit(onSubmit)}>
                            <FormLabel>
                                Organisation Name
                                <LoginFormInput type={"text"} {...register("shortName",{required: true})} required/>
                            </FormLabel>
                            <FormLabel>
                                Email
                                <LoginFormInput type={"email"} {...register("email",{required:true})} required/>
                            </FormLabel>
                            <FormLabel>
                                Password
                                <LoginFormInput type={"password"} {...register("password",{required:true})} required/>
                            </FormLabel>

                            <LoginSubConBtnHold>
                                <LoginSubConBtn type={"submit"} value="Login" typex="filled" loading={isLoading ? "loading":"" } disabled={isLoading}/>
                            </LoginSubConBtnHold>
                        </LoginForms>
                </LoginSubContainer>
            </LoginContainer>
        </>
    )
}

export default Login