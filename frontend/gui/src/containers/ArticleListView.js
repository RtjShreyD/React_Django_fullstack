import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    //DidMount method does--> when articles component is 
    //being rendered it will get the data and update the state
    componentDidMount() { 
        axios.get('http://127.0.0.1:8000/api/') //this returns a promise, so we use then()
            .then(res => { //tells what to do with the response
                this.setState({
                    articles: res.data
                });
                console.log(res.data)
            })
    }

    render() {
        return (
            <Articles data={this.state.articles}/>
        )
    }
}

export default ArticleList;