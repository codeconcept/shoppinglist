import React from 'react';
import {connect} from 'react-redux';

import Form from './Form';
import Itemlist from './ItemList';

class App extends React.Component {
    // state = { 
    //     articles: []
    // }

    // addArticle = (article) => {
    //     let oldArticles = this.state.articles;
    //     article.id = this.state.articles.length + 1;
    //     let newArticles = [...oldArticles, article];
    //     this.setState({ articles: newArticles});        
    // }

    render() {
        return (
            <div>
                <h1>Liste de courses</h1>
                <div>
                    < Form formTitle="Ajouter des articles à acheter" addArticle={this.props.addArticle} />
                    <br />
                    <hr />
                    < Itemlist articles={this.props.articles} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
      articles: state.articles
  };
};


const addArticleActionCreator = (article) => {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article) => {
            dispatch(addArticleActionCreator(article))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
