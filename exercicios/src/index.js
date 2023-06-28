import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            {/* Como passo os componentes FIlhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))