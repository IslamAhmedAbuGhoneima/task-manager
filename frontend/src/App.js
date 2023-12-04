
import Button from 'react-bootstrap/Button';
import { FilterComponent } from './components/FilterComponent';
import { useState } from 'react';
import { FormComponent } from './components/FormComponent';
import Footer from './components/Footer';
export const App = () => {
  let [complete, setComplete] = useState('')
  return (
    <main className="App">
      <h1 className='pt-4 pb-4 text-center text-light'>Task Manger</h1>
      <div className="App-header pt-4 pb-4 m-auto">
        <div className="box w-50 h-50 p-5 mt-2 m-auto bg-light  ">
          <FormComponent />
          <div className='d-flex mt-3 pb-5 border-bottom'>
            <Button variant="success" className='me-3'
              onClick={(e) => {
                setComplete(e.target.innerHTML)
              }}
            >Completed</Button>
            <Button variant="secondary"
              onClick={(e) => {
                setComplete(e.target.innerHTML)
              }}>InCompleted</Button>
          </div>
          <div className="tasks">
            <FilterComponent complete={complete} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
