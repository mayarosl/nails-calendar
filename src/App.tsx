import { useEffect } from 'react';
import { Layout } from 'antd';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
import './App.css';

const App = () => {

  const {setUser, setIsAuth} = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      // в реальности тут отправляется на проверку токен
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
