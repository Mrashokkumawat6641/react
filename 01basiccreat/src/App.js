import logo from './logo.svg';
import './App.css';
import React from './react';
function App() {
  return (
    <>
    <React/>
    <h1>my first react project</h1>
    

    </>
  )
} 
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXovdoSs.jpg',
  imageSize: 90,
};
export default function Profile() {
  return (
    <>
    <h1>{user.name}</h1>
    <img
    className='avator'
    src='{user.imageUrl'}
    alt={'photo of ' + user.name}
    style= {{
      width:user.imageSize,
      height: user.imageSize
    }}
    </>
  )
}


export default App;
