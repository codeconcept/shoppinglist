import React from 'react';
import Article from './Article';

const ItemList = (props) => {
    return (
        <div>
            <div>Achats prévus</div>
            {
                props.articles.map(article => <Article key={article.id} article={article} removeArticle={props.removeArticle} />)
            } 
        </div>
    );
};

export default ItemList;