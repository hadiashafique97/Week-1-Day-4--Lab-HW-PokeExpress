const React = require('react')


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Index extends React.Component {
    render() {
        const { allPokemon } = this.props
        
        return (
            <div>
            <link rel="stylesheet" type="text/css" href="/css/styles.css"/>
               <h1> See All The Pokemon </h1>
               <div class= "mylist">
                <ul>
                 {allPokemon.map((pokemon, i)=> { 
                 return ( 
                 <li>
                    <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</a>
                    <a href={`/pokemon/${pokemon._id}/edit`}>  (Edit This Pokemon)</a>

                </li>
                 )
                 })}
                </ul>
                </div>
                <a href="/pokemon/new"> Create New Pokemon</a>
            </div>
        )
    }
}


 module.exports = Index



