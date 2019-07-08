var React = require('react');
var Layout = require('./layout')

class Home extends React.Component {

        render () {

        const pokemonArray = this.props.pokemon; // return the pokemon name array

        let allPokemon = pokemonArray.map(obj => {
            let indvPokemon = `/${obj.id}`
            console.log(indvPokemon)
            return <div class="image-container">
                <img src={obj.img} />
                <a href={indvPokemon}><h5>{obj.name}</h5></a>
            </div>
        });


        return (<Layout>
            <h1>Welcome to the online Pokedex!</h1>
            <div class="sort-container">
                <form class="form-inline" method="GET" action="/">
                    <div class="form-group mx-sm-3 mb-2">
                        <select class="form-control" name="sortby">
                            <option value="">Sort By</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-info mb-2">Sort</button>

                   {/* <a href="/pokemon/new" class="btn btn-success stretched-link mb-2" id="new-button">Create New Pokemon</a> */}

                </form>

            </div>

            <div class="displayImg-container">
                {allPokemon}
            </div>

        </Layout>);  // end of return

    }  // end of render
} // end of class home


module.exports = Home;