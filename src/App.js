import { useState } from 'react';
import './App.css';

function App() {

  const [Sum, setSum] = useState(0);

  const HandelSubmit = (event) => {


      const element = event.target;
      const numberOne = parseFloat(element.numberOne.value);
      const numberTwo = parseFloat(element.numberTwo.value);






      const valideNumberOne = !isNaN(numberOne);
      const valideNumberTwo = !isNaN(numberTwo);
      if (valideNumberOne && valideNumberTwo) {

          const sum = parseFloat(numberOne / numberTwo);
          setSum(sum);



      }
      else {
          alert('Please Input the Valide Number')
      }

      element.reset();


      event.preventDefault();




  }

  return (
    <div className="App">
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Divided Number..!</h1>
    </div>
    <form onSubmit={HandelSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">1st Number</span>
          </label>
          <input type="text" name='numberOne' placeholder="Insert Number" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">2nd Number</span>
          </label>
          <input type="text" name='numberTwo' placeholder="Insert Number" className="input input-bordered" />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Divide</button>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Result</span>
          </label>
          <input type="text" value={Sum} placeholder="Result " className="input input-bordered" />
          <label className="label">
          </label>
        </div>
      </div>
    </form>
  </div>
</div>
    </div>
  );
}

export default App;
