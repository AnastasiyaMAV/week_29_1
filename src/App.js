import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Comment from './components/Comment';

function App() {
  const [comment, setComment] = useState([]);

  const myRef = React.createRef();

  let onAddBtnComment = () => {
    let commentRef = myRef.current.value;
    let comments = [...comment];
    comments.unshift(commentRef); //добавление в начало массива
    setComment(comments);
    myRef.current.value = '';
  };

  return (
    <div  className="App" >
      {comment.map((item, index) => (
        <Comment key={index.toString()} message={item} type={index === 0 ? 'success' : 'info'}/>
        )
      )}

      <div>
        <textarea className='textareaStyle' ref={myRef} />
      </div>
      
      <button onClick={onAddBtnComment}>Добавить</button>
    </div>
  );
}

export default App;
