import logo from './logo.svg';
import './App.css';
import UserForm from './Components/userform';

function App() {
  return (
    <div className="App">
      <UserForm  firstname = 'firstname' 
                lastname = 'lastname' 
                email = 'email' 
                password = 'password'
                />

      
    </div>
  );
}

export default App;
