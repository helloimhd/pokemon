var React = require('react');
var Layout = require('./layout')

class NewPokemon extends React.Component {

    render () {

        return (<Layout>
            <div class="new-header">
                <h1>New Pokemon!</h1>
{/*                <img src="https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" />*/}
            </div>

            <div class="newForm-container">
         {/*       <div class="col-6">*/}
                    <form method="POST" action="/newPokemon">
                        <div class="form-row">
                            <div class="col">
                                <label for="pokemonId">ID</label>
                                <input type="number" class="form-control form-control-lg" value={this.props.lastId} name="id" readonly="readonly"/>
                            </div>

                            <div class="col">
                                <label for="pokemonNum">Num</label>
                                <input type="text" class="form-control form-control-lg" value={this.props.lastNum} name="num" readonly="readonly"/>
                            </div>
                        </div>  {/* end of form row*/}

                        <br/>

                        <div class="form-row">
                            <div class="col">
                                <label for="pokemonName">Name</label>
                                <input type="text" class="form-control form-control-lg" name="name" />
                            </div>

                            <div class="col">
                                <label for="pokemonImage">Image</label>
                                <input type="text" class="form-control form-control-lg" name="img" />
                            </div>
                        </div>

                        <br/>

                        <div class="form-row">
                            <div class="col">
                                <label for="pokemonHeight">Height</label>
                                <input type="text" class="form-control form-control-lg" name="height" />
                            </div>

                            <div class="col">
                                <label for="pokemonImage">Weight</label>
                                <input type="text" class="form-control form-control-lg" name="weight" />
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
          {/*      </div>*/}
            </div>
        </Layout>);  // end of return

    }  // end of render
} // end of class home


module.exports = NewPokemon;