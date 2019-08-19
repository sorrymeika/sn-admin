import React from 'react';
import { LoginForm } from '../components/LoginForm';

function SignIn({ signInService }) {
    return (
        <LoginForm
            onSubmit={signInService.onSignIn.emit}
            onTest={
                () => alert(1)
            }
        ></LoginForm>
    );
}

export default SignIn;