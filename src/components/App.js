import React from 'react';

import Form from './Form';
import Itemlist from './ItemList';

class App extends React.Component {
    state = { 
        articles: []
    }

    addArticle = (article) => {
        let oldArticles = this.state.articles;
        article.id = this.state.articles.length + 1;
        let newArticles = [...oldArticles, article];
        this.setState({ articles: newArticles});        
    }

    render() {
        return (
            <div>
                <h1>Liste de commissions</h1>
                <div>
                    < Form formTitle="Ajouter des articles à acheter" addArticle={this.addArticle} />
                    <br />
                    <hr />
                    < Itemlist articles={this.state.articles} />
                </div>
            </div>
        );
    }
}

export default App;