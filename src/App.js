import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import ListPosts from './Section/ListPosts';
import SinglePost from './Section/SinglePost';
import LeftSideBar from './Components/LeftSideBar';

function App() {
  return (
    <div className='bg-body-secondary vh-100'>
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-3 py-3'>
            <LeftSideBar></LeftSideBar>
          </div>
          <div className='col-9 py-3'>
            <Routes>
              <Route path='/' element={<ListPosts />} />
              <Route path='/:postsId' element={<SinglePost />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
