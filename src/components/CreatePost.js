import React from 'react';

const CreatePost = () => {
    return (
      <form>
        <input type='text' placeholder='Post title' required/>
        <input type='text' placeholder='Post text' required/>
        <select required>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </select>
        <button type='submit'>
          Add new post
        </button>
      </form>
    )
}

export default CreatePost;