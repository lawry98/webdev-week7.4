
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { atomFly } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}){
  const todo = useRecoilValue(atomFly(id));
  return(
    <div>
      {todo.title}
    </div>
  )
}

export default App
