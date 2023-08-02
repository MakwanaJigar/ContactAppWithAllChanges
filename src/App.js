import './App.css';
import Responsive from './component/Responsive';
import CreateContact from './component/CreateContact';
import MyContacts from './component/MyContacts';
import EditContact from './component/EditContact';
import ViewContacts from './component/ViewContacts';
import {
  Route,
  Routes
} from "react-router-dom";
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
import Registration from './Login/Registration';
import Login1 from './Login/Login1';



function App() {


return (
    <div className="App">
     <ToastContainer></ToastContainer>
     
     <Responsive />
         {/* <Login1 />        */}
        <Routes>
        <Route path='/createuser' element={<Registration />}/>
          <Route path='/Mycontact' element={<MyContacts />}/>
          <Route path='/createcontacts' element={<CreateContact />}/>
          {/* <Route path='/' element={<Login />}/> */}
          <Route path='/EditContact/:contactId' element={<EditContact />}/>
          <Route path='/ViewContacts/:contactId' element={<ViewContacts/>}/>
        </Routes>
      

    </div>
  );
}

export default App;
