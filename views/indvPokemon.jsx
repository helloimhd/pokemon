var React = require('react');
var Layout = require('./layout');


class IndvPokemon extends React.Component {
    render() {
        const indvPokemonObj = this.props.pokemon;

        return ( <Layout>
                    <h1>{indvPokemonObj.name} #{indvPokemonObj.num}</h1>
                    <img src={indvPokemonObj.img} />



        </Layout>);
    } // end of render
} // end of class


module.exports = IndvPokemon;