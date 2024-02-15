import LoginForm from '@/components/Login/login-form';
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import React from 'react'

export const metadata = {
	title: "Login",
	description: "You can get luxury electornic devices",
};


const LoginPage = () => {
  return (
    <div>
      <PageHeader title="Login"/>
      <Spacer height={50}></Spacer>
      <LoginForm></LoginForm>
      <Spacer></Spacer>
    </div>
  )
}

export default LoginPage