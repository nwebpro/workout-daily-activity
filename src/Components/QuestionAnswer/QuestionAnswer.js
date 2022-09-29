import React from 'react';

const QuestionAnswer = () => {
    return (
        <section className='container mx-auto px-5 md:px-0 my-5'>
            <h2 className='text-2xl font-medium text-black mb-5'>Question Answer</h2>
            <div className="space-y-4">
                <details className="p-6 border-l-4 border-green-500 bg-gray-50 group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            How Does React Work?
                        </h5>
                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </span>
                    </summary>

                    <div className="mt-4 leading-relaxed text-gray-700">
                        While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. <br /> <br />
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. <br /><br />
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. 
                    </div>
                </details>
                <details className="p-6 border-l-4 border-green-500 bg-gray-50 group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            Difference between State and Props?
                        </h5>
                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </span>
                    </summary>

                    <div className="mt-4 leading-relaxed text-gray-700">
                        <div className='mb-3'>
                            <h2 className='text-lg font-medium mb-2'>Props</h2>
                            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                            <ul className='list-disc pl-5 mt-3'>
                                <li>Props are read-only.</li>
                                <li>Props are immutable.</li>
                                <li>Props allow you to pass data from one component to other components as an argument.</li>
                                <li>Props can be accessed by the child component.</li>
                                <li>Props are used to communicate between components.</li>
                            </ul>
                        </div>
                        <div className='mb-0'>
                            <h2 className='text-lg font-medium mb-2'>State</h2>
                            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                            <ul className='list-disc pl-5 mt-3'>
                                <li>State changes can be asynchronous..</li>
                                <li>State is mutable.</li>
                                <li>State holds information about the components.</li>
                                <li>State cannot be accessed by child components.</li>
                                <li>States can be used for rendering dynamic changes with the component.</li>
                            </ul>
                        </div>
                    </div>
                </details>
                <details className="p-6 border-l-4 border-green-500 bg-gray-50 group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            Why do we use useEffect in react?
                        </h5>
                        <span
                            className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </span>
                    </summary>

                    <div className="mt-4 leading-relaxed text-gray-700">
                        The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
                    </div>
                </details>
            </div>
        </section>
    );
};

export default QuestionAnswer;