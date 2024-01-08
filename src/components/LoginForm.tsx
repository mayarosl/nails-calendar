import { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector(state => state.authReducer)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useActions()

  const onSubmit = () => {
    login(username, password)
  };

  return (
    <Form
      onFinish={onSubmit}
    >
      {error &&
        <div style={{ color: 'red' }}>{error}</div>
      }
      <Form.Item
        label=""
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите имя пользователя',
          },
        ]}
      >
        <Input
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="NAME"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль',
          },
        ]}
      >
        <Input.Password
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="PASSWORD"
          autoComplete="on"
        />
      </Form.Item>
      <Form.Item className='button-container'
      >
        <Button
          className='button'
          type="primary"
          htmlType="submit"
          loading={isLoading}>
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;