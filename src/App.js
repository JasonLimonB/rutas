import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

//import de componentes para Router
import Home from './components/Home'
import Contacto from './components/Contacto'
import Settings from './components/Settings'
import Navigate from './components/navigate'

class App extends Component{
    render(){
        return(
            <BrowserRouter >
                <div className="contenido">
                    <Navigate />
                    <Route path='/home' component={Home} />
                    <Route path='/contacto' component={Contacto} />
                    <Route path='/settings' component={Settings} />
                </div>

            </BrowserRouter>
        )
    }
}

export default App;