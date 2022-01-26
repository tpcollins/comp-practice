// Jsx allows for better code completion as opposed to js in react apps

import React, { Component } from 'react'; // imrc; contains lots of methods you can inherit

class Counter extends Component { // Counter class extends the component class that we imported up top from the React module (which is the react library)
    
    state = { // State contains all attributes needed for render
        count: 0, // count and imageUrl are now "rendered attributes"
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };
    // Setting Class and Style attributes are a litte bit different (See span and styles function below)

    // To style with Bootstrap Commands: className = "bootstrap-command"
    // To style with inline styling style = {{}}
    // To style with noninline stylinge see btnStyle

    btnStyle = { // Styling should always be kept to bootstrap class if possible, however, if direct Css needs to be used then you can either inline style (if the -
                 // - styling will be only needed for one tag) or noninline style (if the styling will be used for multiple things)
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: 'yellow',
        color: 'black'
    };

    // constructor(){
    //     super();
    //     this.handleInc = this.handleInc.bind(this); // Since functions are objects in Js, this means they have properties. Therefore, we can use the bind method to bind handleIncrement -
    //                                  // - to the counter. By putting "this" in the bind method, it will return a new instance of the handleInc function everytime it is called. -
    //                                  // - This gives us the access that we need. New function is returned everytime and now we can get the function and reset handleInc
    // }
    // *** THERE IS A BETTER WAY TO SET THIS UP TO AVOID ALL THE NOISE. SEE handleInc BELOW FOR METHOD + EXPLANATION ***

    handleInc = () =>{ // Method for handling what happens when increment button is clicked (log "increment clicked", increase count, display new count)
        console.log("Increment Clicked", this); // *** EXPLANATION: Since the arrow function inherits the return keyword rather than rebinding it, instead of creating a -
                                                // - constructor you can use this syntax ( eventName = () => ) to achieve the same thing

                                                // *** HOW TO ACTUALLY UPDATE COUNT METHOD: We can not use this.state.count++ because React is not aware of how that works. -
                                                // - we must use a function we inherited from the base class we imported (the react library; imrc. this.setState() )
        this.setState({count: this.state.count + 1}); // This is just the syntax we must use in jsx. It is essentially the same thing as saying state.count++. We are passing -
                                                      // - count in as an object so the needed properties can be passed to setState
    }

    render() { 
        return ( 
        <React.Fragment>
            <span 
                className="badge m-2" 
                style={{fontSize: 15, backgroundColor: 'green'}}>
                    {this.formatCount()}
            </span>

            <button 
                onClick={this.handleInc}
                className="btn btn-pill btn-secondary m-2" 
                style={this.btnStyle}>
                    Increment
            </button>
            <br />
            <img src={this.state.imageUrl} alt="" />
            <br />
            <ul>
                { this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
            </ul>
        </React.Fragment> // Simple component that, when rendered, will return this the element
        ); // When manipulating the DOM, you will see that having a <div> key word instead of React.Fragment will cause you to have an unused div. Sometimes multiple divs are -
           // - necessary, however, when they are not this can be fixed React.Fragment

           ////////////////////// Unordered List Section: Rendering a list of items in React. We are taking a string ("tag") and mapping it to a Javascript object; "tag goes to -
           // - list item"
            // Within the list item there is a "key" each object in the array in Js must have it's own unique value. Because each object in the array is different, we can simply -
            // - assign the keyword tag. Otherwise you would need to also add a .id property to the key name

            ///////////////////// Note that "handleIncrement" in the onClick function is being passed as a reference rather than being passed as a function. This is how you must -
            // - set up the onClick function in ES6 JavaScript
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count; // In plain English: If count = 0 return Zero, otherwise return count
    }
}
 
export default Counter;

// After creating Counter component it will need to be imported to index.js for useability
