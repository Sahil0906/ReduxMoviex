import React, { Component } from 'react';
import { View, Text , FlatList} from 'react-native';
import { connect } from 'react-redux';
import MovieRow from '../Components/MovieRow';



class Home extends Component {

    constructor(props) {
        super (props);

       
    } 

    async componentDidMount() {
        const { addMovies } = this.props
        const response = await fetch('http://www.omdbapi.com/?apikey=31d0f505&s=Batman');
        const data = await response.json()
        addMovies(data.Search)
        
    }

    render () {
        const { movies } = this.props;

        return (
            <View style={{flex:1}}>
                <FlatList 
                    data={movies}
                    keyExtractor={(movie) => movie.imdbID}
                    renderItem={({item}) => <MovieRow movie={item}/>}
                />
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        movies: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        addMovies: (movies) => dispatch({
            type:'ADD_MOVIES',
            payload:{ movies }
        })
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)