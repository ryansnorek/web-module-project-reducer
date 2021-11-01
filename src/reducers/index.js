// import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY } from './../actions';
import * as actions from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(actions.ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(actions.APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(actions.CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(actions.CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });
        case(actions.SAVE_MEMORY):
            return ({
                ...state,
                memory: state.total
            });
        case(actions.APPLY_MEMORY):
            const { total, memory, operation } = state;
            return ({
                ...state,
                total: calculateResult(total, memory, operation)
            });
        case(actions.CLEAR_MEMORY):
            return ({
                ...state,
                memory: 0
            });
            
        default:
            return state;
    }
}

export default reducer;