SOLİD PRINCIPLES IN REACT

OVERVIEW
The SOLID principles are a set of five design principles intended to make software designs more understandable, flexible, and maintainable. Although originally intended for object-oriented programming, these principles are equally applicable to React and other component-based frameworks.

1. Single Responsibility Principle (SRP)

Definition: A component should have one, and only one, reason to change. This means that a component should only have one responsibility.

It is important to understand when we have to create another file
or use the same file whlie creating new components.

İf the component we create only specialized for the main component
of the file then we create the sub-component in the same file
as main component in as.

2. Definition: Components should be open for extension but closed for modification. This means you should be able to extend a component's behavior without modifying its source code.

When you want to chanhe ui you must not change the source
code you have to build on top of it. And you have to make the
source code available for it.

3. Liskov Substitution Principle (LSP)
Definition: Subtypes must be substitutable for their base types without altering the correctness of the program. This means that components should be replaceable with their derived types without affecting the functionality.

It basically tell us that if we want to slightly different
components from each other create one parent and make it
modifable then modify it.


4. Interface Segregation Principle (ISP)

Definition: Components should not be forced to depend on interfaces they do not use. In React, this means that props should be specific to the component's needs.

It basically  tell us do not push more attribute than enough
to the components

For Example assume that we need a userProfile interface
it should only have name email etc. For the other informations
like phone number or adress you have to create another
component called UserContactInfo. Main purpose of this principle
is creating simple and expandable components


5. Dependency Inversion Principle (DIP)

Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. In React, this can be achieved using context and hooks.

Simply, Do not overstack function about some issue in one 
component for example for fetching user create a context
and provide it to component that would used. Or globally
just use redux.