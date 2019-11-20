import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                message.error('请正确填写用户名和密码');
                return;
            }
            this.props.onSubmit(values);
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="ac_login_form">
                <Form.Item>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <div className="mt_m">
                    <Button type="primary" htmlType="submit" className="ac_login_form_btn">登录</Button>
                </div>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export { WrappedLoginForm as LoginForm };