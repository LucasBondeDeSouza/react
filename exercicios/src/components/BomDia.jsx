import React from 'react'

export default props => [
    <h1 key="h1">Bom dia {props.nome}! Você tem {props.idade} anos</h1>,
    <h2 key="h2">Até Breve!</h2>
]

// OU

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}! Você tem {props.idade} anos</h1>
//         <h2>Até Breve!</h2>
//     </React.Fragment>

// OU

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}! Você tem {props.idade} anos</h1>
//         <h2>Até Breve!</h2>
//     </div>