// event delegation is a design pattern, single parent element is used to manage and handle events for multiple child elements.
// event propagation is the phase including event capturing and event bubbling.
// Event capturing and event bubbling are two distinct phases of event propagation.


//Event capturing in JavaScript is when an event is first captured by the outermost element and propagated to the inner elements.
// event bubbling, events propagate outwards from the target to the outer elements.  

// event capturing-- outermost element to inner elements (target)
// event bubbling-- inner elements (target) to outermost

// event bubbling example
// we need to pass false as in third parameter. By default it is passed as false, so no need to pass any thing. 


export function func() {
    console.log('test');
}


