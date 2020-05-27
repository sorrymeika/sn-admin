import React from 'react';
import { NCMain, NCCard, NCTitle } from 'nuclear';
import { LoginForm } from '../components/LoginForm';
import { inject, autowired } from 'snowball/app';

function SignIn({ onSignIn }) {
    return (
        <NCMain>
            <NCCard style={{ margin: '50px auto', width: 500, padding: "20px 50px 50px 50px" }}>
                <NCTitle>登录</NCTitle>
                <LoginForm
                    onSubmit={onSignIn}
                ></LoginForm>
            </NCCard>
        </NCMain>
    );
}

export default inject(() => {
    const signInViewModel = autowired('signInViewModel');
    return {
        onSignIn: signInViewModel.onSignIn
    };
})(SignIn);