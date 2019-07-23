import React from 'react';
import { inject } from 'snowball/app';
import { LoginForm } from '../components/LoginForm';

function SignIn({ signInService }) {
    return (
        <LoginForm
            onSubmit={
                (data) => signInService.signIn(data)
            }
        ></LoginForm>
    );
}

export default inject('signInService')(SignIn);