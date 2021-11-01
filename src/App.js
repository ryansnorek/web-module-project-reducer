import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import './App.css';
import * as actions from './actions';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { text } from 'body-parser';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = e => {
    const { textContent } = e.target;
    dispatch(
      actions.applyNumber(
        parseInt(textContent)
        )
      );
  };
  const handleOperationClick = e => {
    const { textContent } = e.target;
    dispatch(
      actions.changeOperation(textContent)
      );
  };
  const handleClearClick = () => {
    dispatch(
      actions.clearDisplay()
    );
  };
  const handleSaveMemoryClick = () => {
    dispatch(
      actions.saveMemory()
    );
  };
  const handleApplyMemoryClick = () => {
    dispatch(
      actions.applyMemory()
    )
  };
  const handleClearMemoryClick = () => {
    dispatch(
      actions.clearMemory()
    )
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleSaveMemoryClick} value={"M+"}/>
              <CalcButton onClick={handleApplyMemoryClick} value={"MR"}/>
              <CalcButton onClick={handleClearMemoryClick} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={1}/>
              <CalcButton onClick={handleNumberClick} value={2}/>
              <CalcButton onClick={handleNumberClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={4}/>
              <CalcButton onClick={handleNumberClick} value={5}/>
              <CalcButton onClick={handleNumberClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={7}/>
              <CalcButton onClick={handleNumberClick} value={8}/>
              <CalcButton onClick={handleNumberClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleOperationClick} value={"+"}/>
              <CalcButton onClick={handleOperationClick} value={"*"}/>
              <CalcButton onClick={handleOperationClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearClick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
