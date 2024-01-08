import { FC } from 'react';
import '../App.css';

const Randomizer: FC = () => {
  const onClick = () => {
    console.log('click!');
  }
  const colors = [
    { "color": "red", "key": "red"},
    { "color": "pink", "key": "pink"},
    { "color": "yellow", "key": "yellow"},
    { "color": "black", "key": "black" }
  ]
  return (
    <div className='h100 center randomizer'>
      <h1 >
        Viberi manik
      </h1>
      <div className='colors-picker'>
        {
          colors.map((color) =>
            <div
              className='color-box'
              key={color.key}
              onClick={onClick}
              style={{ backgroundColor: `${color.color}` }}
            >
            </div>)
        }
      </div>
    </div>
  );
};

export default Randomizer;