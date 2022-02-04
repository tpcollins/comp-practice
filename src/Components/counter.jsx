// Jsx allows for better code completion as opposed to js in react apps

import React, { Component } from 'react'; // imrc; contains lots of methods you can inherit

class Counter extends Component { // Counter class extends the component class that we imported up top from the React module (which is the react library)
    
    // *** DIFFERENCE BETWEEN PROPS AND STATE (BIG NOTE) ***: Props include data we give to a component. For example, we sent an h4 element from the counters module to the -
    // - counter module using {this.props.children}. State includes data that is local or private to that component. Other components can not access that data. Essentially -
    // - the attributes in state are like setting private attributes in C#. 
    // Note: Some components do not have states and all of their data is read in through props
    // Note: Props are read only. We can not change the value of props

    // *** STATE COMMENTED OUT FOR THE PURPOSE OF REMOVING LOCAL STATE SO COUNTER IS CONTROLLED COMPONENT. NOTES STILL GOOD

    // state = { // State contains all attributes needed for render
    //     value: this.props.counter.value, // Value is reading in value from parent component Counters
    //     imageUrl: 'https://picsum.photos/200', // value and imageUrl are now "rendered attributes"
    //     tags: ['tag1', 'tag2', 'tag3']
    // };
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

    

    render() { 
        console.log("props: ", this.props); // Every react comp has a property called props. It will display all of the attributes that we set in the parent component (counters)

        return ( // *** PROPS.CHILDREN EXPLANATION ***: If there are children in the parent element (in this example the h1 tag in the counters component) those childern must be -
                 // - rendered with {this.props.children} or they will not show up. This would not be an absolute necessity here (since it is only one element we could have just -
                 // - said {this.props.h1} and gotten the same result), but as children elements become more complex this is the best way to do things.
        <React.Fragment>
            {this.props.children}
            <span 
                className="badge m-2" 
                style={{fontSize: 15, backgroundColor: 'green'}}>
                    {(this.formatCount())}
            </span>

            <button 
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-pill btn-secondary m-2" 
                style={this.btnStyle}>
                    Increment
            </button>
            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-pill btn-secondary m-2 btn-danger" 
                style={this.btnStyle}>
                    Delete
            </button>
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
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value; // In plain English: If count = 0 return Zero, otherwise return count
    }
}
 
export default Counter;

// After creating Counter component it will need to be imported to index.js for useability
