import React from 'react';
import '../style.css';

class Form extends React.Component {
    state = {
        name: '',
        quantity: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const article = { name: this.state.name, quantity: this.state.quantity };
        this.props.addArticle(article);
        this.setState({ name: '', quantity: 0});
    }

    render() {
        return (
            <div>
                <h3>{this.props.formTitle}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" 
                            className="quantity"  
                            placeholder="quantité" 
                            value={this.state.quantity}
                            onChange={(event) => this.setState({ quantity: event.target.value })}                            
                    />
                    <input type="text" 
                            placeholder="article"                     
                            value={this.state.name} 
                            onChange={(event) => this.setState({ name: event.target.value })}
                            />
                    <button type="submit" className="btn btn-success">ajouter</button>
                </form>
            </div> 
        );
    }
};

export default Form;