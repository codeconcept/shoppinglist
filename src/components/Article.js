import React from 'react';

class Article extends React.Component {
    state = { isInEditMode: false }

    handleRemove = (articleId) => {
        if(confirm('Voulez-vous vous supprimer ?')) {
            this.props.removeArticle(articleId);
        }
    }

    editArticle = (article) => {
        this.setState({ isInEditMode: !this.state.isInEditMode });
    }

    handleQuantityEdit = (event, article) => {
        event.preventDefault();
        article.quantity = event.target.value;
        this.props.editArticle(article);
    }

    handleNameEdit = (event, article) => {
        event.preventDefault();
        article.name = event.target.value;
        this.props.editArticle(article)
    }

    render() {
        const {article} = this.props;
        return (
            <div>
                <div key={article.id}>
                    <button className="btn btn-warning btn-xs edit" onClick={() => this.editArticle(article)}>modif</button>
                    <button className="btn btn-danger btn-xs suppr" onClick={() => this.handleRemove(article.id)}>suppr</button>
                    {
                        this.state.isInEditMode ?
                            <span>
                                <input type="number" value={article.quantity} 
                                        onChange={(event) => this.handleQuantityEdit(event, article)} />
                                <input type="text" value={article.name} 
                                        onChange={(event) => this.handleNameEdit(event, article)} />
                            </span>

                        : <span>{article.quantity} {article.name}</span>
                    }
                </div>
            </div>
        )
    }
}

export default Article;