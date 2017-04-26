import React from 'react';

const ItemList = (props) => {
    return (
        <div>
            <div>Achats prévus</div>
            {
                props.articles.map(article => <div key={article.id}>{article.quantity} {article.name}</div>)
            } 
        </div>
    );
};

export default ItemList;