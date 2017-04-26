import React from 'react';

import Form from './Form';
import Itemlist from './ItemList';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Liste de commissions</h3>
                <div>
                    < Form />
                    < Itemlist />
                </div>
            </div>
        );
    }
}

export default App;