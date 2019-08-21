import React from 'react';
import { NCMain, NCCard, NCTitle } from 'nuclear';
import { LoginForm } from '../components/LoginForm';

function SignIn({ signInService }) {
    return (
        <NCMain>
            <NCCard style={{ margin: '50px auto', width: 500, padding: "20px 50px 50px 50px" }}>
                <NCTitle>登录</NCTitle>
                <LoginForm
                    onSubmit={signInService.onSignIn.emit}
                    onTest={
                        () => alert(1)
                    }
                ></LoginForm>
            </NCCard>
        </NCMain>
    );
}

export default SignIn;