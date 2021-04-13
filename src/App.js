import React from 'react'
import NormalComponent from './Portal/NormalComponent'
import PortalComponent from './Portal/PortalComponent'

const App=()=>{
    return(
        <React.Fragment>
            <NormalComponent/>
            <PortalComponent/>
        </React.Fragment>
    )
}
export default App;