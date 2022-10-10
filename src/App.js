import "./styles.css";
import {useSelector, useDispatch} from 'react-redux';
import {upNum, downNum} from './action/index'

export default function App() {
  const myVal = useSelector((state) => state.changeTheNumber);
  const dispatch =useDispatch();
  return (
    <div className="App">
      <h1>Value : {myVal}</h1>
      <button onClick={()=>dispatch(upNum())}>+</button>
      <button onClick={()=>dispatch(downNum())}>-</button>
    </div>
  );
}
