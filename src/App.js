import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Counters from './Components/counters'; // Importing counter component; Counter is a default export so no need for curly braces
import './App.css';


class App extends Component {
  state = { 
    counterArray: [ // Array of counter objects. As you can see, in jsx arrays can be given attributes, such as id and value, without actually being a filled in element
    { id: 1, value: 0}, // If we were to add another section ({ id: 4, value: 0}) then we would then have 5 objects to fill in each with their own unique id to be used as the key
    ]
  };

 handleInc = counter =>{ // Method for handling what happens when increment button is clicked (log "increment clicked", increase count, display new count)
    console.log("Increment Clicked", counter); // *** EXPLANATION: Since the arrow function inherits the return keyword rather than rebinding it, instead of creating a -
                                            // - constructor you can use this syntax ( eventName = () => ) to achieve the same thing

    // *********** Commented out setState method is for updating when component does not need to be controlled component (very rare) 
    // Non-commented method is how to update dynamically (raising events)

                                            // *** HOW TO ACTUALLY UPDATE COUNT METHOD: We can not use this.state.count++ because React is not aware of how that works. -
                                            // - we must use a function we inherited from the base class we imported (the react library; imrc. this.setState() )
    // this.setState({value: this.state.value + 1}); // This is just the syntax we must use in jsx. It is essentially the same thing as saying state.count++. We are passing -
                                                  // - count in as an object so the needed properties can be passed to setState

    const counters = [...this.state.counterArray]; // ... is spread operator that will clone array (of counters) with exact same objects in state objects. We are using clone -
                                               // - and not map because clone will allow for us to modify objects
    
    const index = counters.indexOf(counter); // Index of achieves a binary search. 
    counters[index] = {...counter}; // By settings counters[index] to {...counter} this will search the entire array
    counters[index].value++; // Incrementing the set value (index is the increment button that we pick)
    this.setState({counterArray: counters}); // This overrides the counterArray property (first counters) with the counters constant (second counters)
  }

 handleDelete = counterId =>{
     console.log("Event handler called. Counter ID: ", counterId);

     const counters = this.state.counterArray.filter(c => c.id !== counterId);
     this.setState({ counterArray: counters }); // This overrides the counterArray property (first counters) with the counters constant (second counters)
  }

 handleReset = () =>{
     const counters = this.state.counterArray.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({counters});
  };

  render() { 
    return ( // Note "totalCounters" in the Navbar element. This passes down the number of counters (with a value of more than 0) so that they can be displayed in the navbar class. -
             // - We have now successfully raised the state, as even though there is no true relationship between the navbar and the counters component, we can pass info through -
             // - the single sourcer of truth, which is the app component (the ultimate parent component). The app tree is now successfully set up
      <React.Fragment>
        <main className='container'>
          <Navbar totalCounters={this.state.counterArray.filter(c => c.value > 0).length}/>
        </main>
        <main className="container">
          <Counters 
          counterArray = {this.state.counterArray}
          onReset = {this.handleReset}
          onInc = {this.handleInc}
          onDelete = {this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;