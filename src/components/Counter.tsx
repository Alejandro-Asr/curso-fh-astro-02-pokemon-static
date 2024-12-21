import { createSignal, type Component } from 'solid-js'
import type { JSX } from 'solid-js/h/jsx-runtime';

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);


  return (
    <>
      {props.children}
      <h3 class="text-xl">Value: {counter()}</h3>
      <button onClick={() => setCounter((prev) => ++prev)} class="bg-blue-500 p-2 mr-2 rounded">+1</button>
      <button onClick={() => setCounter((prev) => --prev)} class="bg-blue-500 p-2 mr-2 rounded">-1</button>
    </>
  )
}