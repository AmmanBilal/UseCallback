import React, { memo, useCallback, useState } from 'react'
import Counter from './Counter'
import FormVali from './FormVali'
import MemoList from './MemoList'

const Logger = memo((props) => {
  props.log()
  return null
})

export default function App() {
  const [count, setCount] = useState(0)
   const count5 = count % 5;

const memoizedFunction = useCallback(() => {
    console.log('useCallback');

  }, [count5]);

  const normalFunction = () => {
    console.log('normal')
  }

  if (count5 !== 0) {
    console.log('not match');
  } else {
    console.log('match');
  }

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment {count}
      </button>
      <Logger log={memoizedFunction} />
      <Logger log={normalFunction} />
        <Counter/>
        <FormVali/>
        <MemoList/>
    </>
  )
}