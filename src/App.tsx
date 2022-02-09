import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="layout-container" >
      <div className='layout-header layout-item'>
        <div>
          <h1>Quiz Maker</h1>
        </div>
      </div>
      <div className='layout-content layout-item'>
        <div className='quizes-content'>
          <div className='quizes-header'>
            <h3>Quizes</h3>
          </div>
          <div className='quiz-row'>
            <div className='quiz-description'>This is the first quiz description</div>
            <div className='quiz-actions'>
              <div className='quiz-take'>
                <button>Take</button>
              </div>
              <div className='quiz-edit'>
                <button>Edit</button>
              </div>
              <div className='quiz-delete'>
                <button>Delete</button>
              </div>
            </div>
          </div>
          <div className='quiz-row'>
            <div className='quiz-description'>This is the second quiz description</div>
            <div className='quiz-actions'>
              <div className='quiz-take'>
                <button>Take</button>
              </div>
              <div className='quiz-edit'>
                <button>Edit</button>
              </div>
              <div className='quiz-delete'>
                <button>Delete</button>
              </div>
            </div>
          </div>
          <div className='quiz-row'>
            <div className='quiz-description'>This is the third quiz description</div>
            <div className='quiz-actions'>
              <div className='quiz-take'>
                <button>Take</button>
              </div>
              <div className='quiz-edit'>
                <button>Edit</button>
              </div>
              <div className='quiz-delete'>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
