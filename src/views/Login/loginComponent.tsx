import React, { useCallback, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import styles from './login.module.scss'
import Captcha from 'react-captcha-code'

type FieldType = {
    username?: string
    password?: string
    remember?: string
}

const Login: React.FC = () => {
    const [form] = Form.useForm()
    const [code, setCode] = useState<string>('')

    const handleClickCode = useCallback(captcha => {
        setCode(captcha)
    }, [])
    const handleUserLogin = () => {
        form.validateFields().then(values => {
            console.log(values)
        })
    }
    const handleVerificationCode = (_rule: any, value: string) => {
        return new Promise((resolve, reject) => {
            if (value === void 0) {
                reject(new Error('请输入验证码'))
                return
            }
            if (value === code) {
                resolve('')
                return
            }
            reject(new Error('验证码错误'))
        })
    }
    return (
        <Form
            form={form}
            autoComplete='off'
            className={styles.loginForm}
            initialValues={{ remember: false }}>
            <Form.Item<FieldType>
                name='username'
                rules={[{ required: true, message: '请输入用户名' }]}>
                <Input placeholder='用户名' />
            </Form.Item>

            <Form.Item<FieldType>
                name='password'
                rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password placeholder='密码' />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
                <Form.Item
                    name='code'
                    rules={[{ required: true, validator: handleVerificationCode }]}
                    style={{ display: 'inline-block', width: 'calc(65% - 8px)' }}>
                    <Input placeholder='验证码' />
                </Form.Item>
                <Form.Item
                    style={{
                        display: 'inline-block',
                        width: 'calc(35% - 8px)',
                        margin: '0 0 0 8px',
                    }}>
                    <Captcha charNum={4} onChange={handleClickCode} className={styles.captcha} />
                </Form.Item>
            </Form.Item>
            <Form.Item<FieldType> name='remember' valuePropName='checked'>
                <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={handleUserLogin} className={styles.submit_btn}>
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login
