import React  from "react";


const Blog =()=>{
    return(
        <div className="ml-20 mt-20 mb-36 mr-20 text-white">
           <div  > 
           <h1 className="text-4xl"> How will you improve the performance of a React Application?</h1>
          <ul className="mt-8"> 
            <li>.First of all i,ll go for code optimization by minimizing unnecessery re-rendersavoiding function binding in the render method, and optimizing loops.</li>
            <li>.For better management and code splitting I can split components into smaller ones</li>
            <li>.Implementing virtualization and pagination techniques for rendering large lists efficiently is also a way to To improve the performance of a React application</li>
          </ul>
           </div>
           <div className="mt-20">
            <h1 className="text-4xl"> What are the different ways to manage a state in a React application?</h1>
            <p className="mt-8">The choice of state management approach depends on the complexity of your application, the size of the state, and the specific requirements of your project. For smaller applications with simple state, local component state or the Context API may suffice. For larger applications with more complex state and advanced features, libraries like Redux, MobX, React Query, or Apollo Client provide powerful solutions.</p>
           </div>
           <div className="mt-20">
            <h1 className="text-4xl">How does prototypical inheritance work?</h1>
            <p className="mt-8">
            Prototypical inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects called prototypes. Every JavaScript object has an internal property called [[Prototype]], which refers to another object or null.

When a property or method is accessed on an object, JavaScript first checks if the object itself has that property or method. If not, it looks up the prototype chain by following the [[Prototype]] link to the next object. This process continues until the property or method is found or until the end of the prototype chain is reached (i.e., [[Prototype]] is null).
            </p>
           </div>
           <div>
            <h1 className="mt-20 text-4xl">
            Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
            </h1>
            <p className="mt-8">
            In React, it is recommended to use the setState function (or useState hook) provided by the framework to update the state instead of directly mutating it. Here are a few reasons why setting the state using setProducts is preferred over directly modifying the products variable:

Immutability: React encourages immutable data patterns, which means that the state should not be modified directly. When you modify the state directly, React may not detect the change, leading to unexpected behavior in your application. By using setProducts, you are creating a new instance of the state with the updated value, ensuring that React can properly track and manage state changes.

Re-rendering and Virtual DOM diffing: React uses a virtual DOM to efficiently update the actual DOM. When you use setProducts to update the state, React can perform a diffing algorithm to determine the minimum number of changes required to update the UI. This process is optimized for performance. If you directly modify the state, React may not be able to detect the changes and trigger the necessary re-rendering, resulting in an inconsistent UI.

Asynchronous updates: State updates in React are typically batched together for performance reasons. When you call setProducts, React can handle multiple state updates efficiently and perform the necessary reconciliations. If you directly modify the state, you may encounter issues with concurrent updates and inconsistent state values due to React's batching behavior.
            </p>
           </div>
           <div>
            <h1 className="mt-20 text-4xl">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p className="mt-8">
        Suppose I have array named Products.First i will diclare [searchQuery,setSearchQuery] states.Thenn i,ll filter products array,s name to LowerCase and it will get searchQuery included.
        in return i,ll make a input with     onChange=e => setSearchQuery [e.target.value] which will have searchQuery as value.

        then i,ll go like,
        filteredProducts.map((product) => (
       key=[product.id]>
          <h3>[product.name]</h3>
          <p>[product.price]</p>
      
     
            </p>
           </div>
           <div>
            <h1 className="mt-20 text-4xl">What is a unit test? Why should write unit tests? </h1>
            <p className="mt-8">A unit test is a type of software testing where individual units or components of a software system are tested independently to ensure they function correctly. It involves testing small, isolated parts of code, such as functions or classes, in isolation from the rest of the system.

Writing unit tests is beneficial for several reasons:

Early bug detection: Unit tests help catch bugs and issues in code early in the development process, making them easier and less costly to fix.

Code quality and maintainability: Unit tests encourage writing modular and loosely coupled code, promoting good design principles and coding practices.

Regression prevention: Unit tests act as a safety net during code changes, ensuring that existing functionality remains intact and unaffected.

Documentation and code understanding: Unit tests serve as living examples and usage scenarios, providing documentation and aiding code comprehension.

Continuous integration and deployment: Unit tests can be integrated into CI/CD pipelines, automatically verifying the software's functionality and reliability.</p>
           </div>
        </div>
    )
}

export default Blog;