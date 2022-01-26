import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counterArray: [ // Array of counter objects. As you can see, in jsx arrays can be given attributes, such as id and value, without actually being a filled in element
        { id: 1, value: 0}, // If we were to add another section ({ id: 4, value: 0}) then we would then have 5 objects to fill in each with their own unique id to be used as the key
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
        { id: 5, value: 0},
        { id: 6, value: 0}
        ]
     };
    

    render() { 
        return ( // Here we are filling in the elements with the map function. This function is quite dynamic. Remember that it takes the elements in an array, reads them in, and -
                 // - then it spits out a new array. In this process, we fill in what the element should be (if we set it up like we have here. Not always a necessary step) -
                 // - which is Counter. Now when the DOM is rendered it will display as many Counter objects as we have in the array, each with their own unique id assinged above.
        <div>
            {this.state.counterArray.map(counter => <Counter key={counter.id}/>)}
        </div>
        );
    }
}
 
export default Counters;