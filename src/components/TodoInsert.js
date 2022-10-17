import {React, useCallback, useState} from 'react'
import {MdAdd} from 'react-icons/md'
import '../styles/TodoInsert.scss'

function TodoInsert({onInsert}) {

    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
      setValue(e.target.value);
    },[])

    const onSubmit = useCallback(e =>{
      onInsert(value);
      setValue('');
      e.preventDefault();
    },[value]);

  return (
    <form className='TodoInsert' onSubmit={onSubmit} >
        <input value={value} onChange={onChange} placeholder='일정을 입력하세요.' />
        <button type='submit'> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert