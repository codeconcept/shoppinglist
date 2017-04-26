import React from 'react';
import Article from './Article';

const ItemList = (props) => {
    return (
        <div>
            <h3>Achats prévus</h3>
            {
                props.articles.map(article => <Article key={article.id} article={article} 
                                                removeArticle={props.removeArticle} editArticle={props.editArticle}  />)
            } 
        </div>
    );
};

export default ItemList;