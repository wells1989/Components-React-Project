import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';
import { SlRefresh } from 'react-icons/sl'

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const DECREMENT_COUNT = 'decrement';
const SUBMIT_VALUE_TO_ADD = 'submit_value_to_add';
const RESET = 'reset';

const reducer = (state, action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }

        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }

        case SUBMIT_VALUE_TO_ADD:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }

        case RESET:
            return {
                ...state,
                count: 0
            }

        default: 
            return state;
    }
}

function CounterPage({ initialCount }) {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        }) 
    }

    const handleReset = () => {
        dispatch({
            type: RESET
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: SUBMIT_VALUE_TO_ADD
        })
    }

    return <Panel className="m-3">
        <div className="flex flex-row justify-center items-center">
            <SlRefresh onClick={handleReset} className="cursor-pointer hover:bg-blue-200" />
            <h1 className="text-lg text-center m-3">Count is {state.count}</h1>
        </div>
    
        <div className="flex flex-row justify-center m-3">
            <Button primary rounded outline onClick={increment}>Increment</Button>
            <Button danger outline rounded onClick={decrement}>Decrement</Button>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-center items-center m-3">
            <label>Add a specific quantity:</label>
            <input className="ml-5 bg-gray-200 border border-gray-300" 
            type="number" 
            placeholder="quantity..."
            value={state.valueToAdd || ""}
            onChange={handleChange}
            />

            <Button success outline rounded className="m-3">Add it</Button>
        </form>
        </Panel>
}

export default CounterPage;
