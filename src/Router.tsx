import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Entrega } from './pages/page-delivery'
import { Form } from './pages/page-form'

export function Router() {
    return(
      <Routes>    
        <Route path="/" element={<Home />} />    
        <Route path="/form" element={<Form />} />
        <Route path="/entrega" element={<Entrega />} />
      </Routes>  
    ) 
}