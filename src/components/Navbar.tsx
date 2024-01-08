import { FC } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import nailspng from '../assets/nailspng.png';
import { privateItems, publicItems } from '../constants/MenuItems';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
  const history = useNavigate();
  const { isAuth, user } = useTypedSelector(state => state.authReducer)
  const { logout } = useActions()

  const onMenu: MenuProps['onClick'] = (e) => {
    history(e.key)
  };

  const onLogin = () => {
    history('/login')
  }

  return (
    <Layout>
      <Header className='header'>
        <div className='logo'>
          <img src={nailspng} alt="Logo" />
        </div>
        {isAuth
          ?
          <>
            <Menu
              className='top-menu'
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={privateItems}
              onClick={onMenu}
            />
            <div className="username-box" >
              <div className='username'>
                {user.username}
              </div>
              <div onClick={logout} className="logout">
                logout
              </div>
            </div>
          </>
          :
          <>
            <Menu
              className='top-menu'
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={publicItems}
              onClick={onMenu}
            />
            <div
              className='login'
              onClick={onLogin}>
              login
            </div>
          </>
        }
      </Header>
    </Layout>
  );
};

export default Navbar;