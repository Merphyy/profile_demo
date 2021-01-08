import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState({});
  // useEffect(() => {}, []);
  const d = new Date('2015-03-25T12:00:00Z').toISOString().split('T')[0];

  return (
    <div>
      <div className='card' style={{ width: '18rem', alignContent: 'center' }}>
        <img
          class='card-img-top'
          src='https://media-exp1.licdn.com/dms/image/C4D03AQFw-2Ewps3iwg/profile-displayphoto-shrink_400_400/0/1563640488644?e=1615420800&v=beta&t=5U3_X81AkWpcIO4g0kg2d0-1zhdgFTO6IhSoh1Yc8Lc'
        />
        <div className='card-body'>
          <h5 className='card-title'>Dennis Li</h5>
          <p className='card-text'>CEO & Founder, Example</p>
          <p className='card-text'>date of birth:{d}</p>
          <a href='#' className='btn btn-primary'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
