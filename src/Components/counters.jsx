import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        const { onReset, counterArray, onDelete, onInc } = this.props; // This is argument destructuring. It allows for cleaner code. Any method that is in props can be passed -
        // - here with the syntax seen above, and then you do not have to include "this.props" in your properties being passed in.

        return ( // Here we are filling in the elements with the map function. This function is quite dynamic. Remember that it takes the elements in an array, reads them in, and -
                 // - then it spits out a new array. In this process, we fill in what the element should be (if we set it up like we have here. Not always a necessary step) -
                 // - which is Counter. Now when the DOM is rendered it will display as many Counter objects as we have in the array, each with their own unique id assinged above.
        <div>
            <button
            onClick={onReset}
            className="btn btn-primary btn-sm btn-sm m-2">Reset
            </button>

            {counterArray.map(counter => (

            <Counter 
            counter={counter}
            key={counter.id} 
            onDelete={onDelete}
            onIncrement={onInc}
            >
                <h1>Counter ID: {counter.id}</h1>
            </Counter>))}
        </div>
        ); // Remember, in jsx you do not have to have a type of element when reading in an array when you use the map method. Much like in C# where we set the fields by saying -
           // - "List<Person> personList = new List<Person>(Name = name)", we set the attributes here by saying <ComponentName key = {uniqueId.id} otherAttributes={a.a} />
    }
}
 
export default Counters;