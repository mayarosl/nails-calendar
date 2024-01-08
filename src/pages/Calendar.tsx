import { FC } from 'react';
import { Layout, Row } from 'antd';
import '../App.css';

const Calendar: FC = () => {
  return (
    <Layout>
      <Row className='h100 center'>
        <h1>
          Tut kalendar manika
        </h1>
      </Row>
    </Layout>
  );
};

export default Calendar;