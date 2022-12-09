const React = require('react')


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Index extends React.Component {
    render() {
        const { allPokemon } = this.props
        
        return (
            <>
               <h1 style ={myStyle}> See All The Pokemon </h1>
                <ul>
                 {allPokemon.map((pokemon, i)=> { 
                 return ( 
                 <li>
                    <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</a>
                </li>
                 )
                 })}
                </ul>
                <a href="/pokemon/new"> Create New Pokemon</a>
            </>
        )
    }
}


 module.exports = Index



