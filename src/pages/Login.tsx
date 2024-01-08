import { FC } from 'react';
import { Card, Layout, Row } from 'antd';
import LoginForm from '../components/LoginForm';
import '../App.css';

const Login: FC = () => {
  return (
    <Layout>
      <Row className='h100 center'>
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;