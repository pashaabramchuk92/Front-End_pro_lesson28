import React, { useState } from 'react';

const CreatePost = ({ handlerSubmit }) => {
  const [ inputTitleValue, setInputTitleValue ] = useState('');
  const [ inputTextValue, setInputTextValue ] = useState('');
  const [ selectValue, setSelectValue ] = useState('');

    return (
      <form
        onSubmit = {e => {
          e.preventDefault();
          
          const post = {
            title: inputTitleValue,
            text: inputTextValue,
            select: selectValue
          }

          handlerSubmit([post]);
          e.target.reset();
        }}
      >
        <input type='text' placeholder='Post title' required
          onInput = {e => {
            setInputTitleValue(e.target.value);
          }}
        />
        <input type='text' placeholder='Post text' required
          onInput = {e => {
            setInputTextValue(e.target.value);
          }}
        />
        <select name='tags' required
          onChange = {e => {
            setSelectValue(e.target.value);
          }}
        >
          <option value=''>none</option>
          <option value='option 1'>option 1</option>
          <option value='option 2'>option 2</option>
          <option value='option 3'>option 3</option>
        </select>
        <button 
          type='submit'
          disabled = {!Boolean(inputTitleValue.trim()) || !Boolean(inputTextValue.trim()) || !Boolean(selectValue)}
        >
          Add new post
        </button>
      </form>
    )
}

export default CreatePost;