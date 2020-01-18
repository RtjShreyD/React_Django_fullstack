import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

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
            <Articles data={listData}/>
        )
    }
}

export default ArticleList;