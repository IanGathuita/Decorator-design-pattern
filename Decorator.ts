// dynamically add new functionalities to an existing object without altering or modifying its structure.
// Acts like a wrapper to the existing class
// Decorator will have the method of the object it decorates. It will first call it and then call its decorating method on the result

interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent simple operation';
    }
}

//Decorator class follows the same interface as the other components. Wraps a component
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    //The Decorator delegates all work to the wrapped component.
    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecorator extends Decorator {
    public operation(): string {
        return `Decorating with stars ***** ${super.operation()} *****`;
    }
}

const normalObj = new ConcreteComponent();
console.log(normalObj.operation());

const decoratedObj = new ConcreteDecorator(normalObj);
console.log(decoratedObj.operation());