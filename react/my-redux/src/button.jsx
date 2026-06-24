import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './store'


export default function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addMoney(1000))}>
        Add addMoney
      </button>
      <button onClick={() => dispatch(removeMoney(500))}>
        Remove removeMoney
      </button>
    </div>
  )
}
