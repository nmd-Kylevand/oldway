function component() {
    // create a new element
    const element = document.createElement('div');

    // add some content to our html
    element.innerHTML = 'Hello World!'

    // return the element
    return element;
}

// add the element to our body
document.body.appendChild(component());