
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import ForwardingComponent from './components/ForwardingComponent'
import HeaderComponent from './components/HeaderComponent'
import HomeComponent from './components/HomeComponent'
import { ListEmployeeComponent } from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import VehicleComponent from './components/VehicleComponent'
import ListVehicleComponent from './components/ListVehicleComponent'
import ListShipComponent from './components/ListShipComponent'
import ShipComponent from './components/ShipComponent'
import ListCompanyComponent from './components/ListCompanyComponent'
import CompanyComponent from './components/CompanyComponent'



function App() {


  return (
    <>
    
    <BrowserRouter>                   {/* react-router-dom kütüphanesi tarafından geldi */}
      <HeaderComponent/>
        <Routes>
                                      {/* // http://localhost:3000   bu root istek geldiğinde ana sayfa olan ListEmployeeComponent açılıcak*/ }     
            <Route path='/'element = {<HomeComponent/>}></Route>
                                      {/* // http://localhost:3000/employees bu root istek geldiğinde employee gözükücek */}
            <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
            {/* // http://localhost:3000/add-employee bu root istek EmployeeComponent sayfası görünücek */}
            <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>

            

            <Route path='/vehicle' element = {<ListVehicleComponent/>}></Route>

            <Route path='/add-vehicle' element = {<VehicleComponent/>}></Route>

            <Route path='/edit-vehicle/:id' element = {<VehicleComponent/>}></Route>


            <Route path='/ship' element = {<ListShipComponent/>}></Route>

            <Route path='/add-ship' element = {<ShipComponent/>}></Route>

            <Route path='/edit-ship/:id' element = {<ShipComponent/>}></Route>

            
            <Route path='/company' element = {<ListCompanyComponent/>}></Route>

            <Route path='/add-company' element = {<CompanyComponent/>}></Route>

            <Route path='/edit-company/:id' element = {<CompanyComponent/>}></Route>










            <Route path='/forward' element = {<ForwardingComponent/>}></Route> {/* //   bu root istek geldiğinde sevkiyat oluştur kısmı*/ }
            


        </Routes>  
      <FooterComponent/>
      </BrowserRouter>        
    </>
  )
}

export default App
