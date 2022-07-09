//---------------------- Notes------------------

//! ---------------- DONT'S --------------------

//* Never call Hooks from inside a loop, nested function or condition
//* Hooks should sit at the top-level of the component
//* Only call hooks from react functional components
//* Never call a hook from a regular function
//* Hooks can call other hooks

//!----------------------------------------------->*/

//!------------- How context API and useContext hook Works ---------------->

// The initial context is passed in to the createContext API
/* 
    const ThemeContext  = React.createContext(initialContext)

    The value returned by the createContext is stored in ThemeContext. and that is the value passed
    in to useContext hook.

    The same ThemeContext value is used as the provider and the value passed in to the value props
    will be used by all the children in the context provider

    eg. <ThemeContext.Provider value={themes.dark}>
            <ChildComponent/>
        </ThemeContext.Provider>

    For the childcomponent to use the value props, the useContext hook must be defined in it.
    eg. function ChildComponent(props) {
            const theme = useContext(ThemeContext);

            return (
                <button style{{background: theme.background, color: theme.foreground}}>Click me</button>
            )
    }
*/

//!------------- How useReducer works ---------------->

/**
 * The useReducer hook is used in place on useState when there are complex states to be handled
 * It takes two parameters, a reducer function and an initialValue and stores them in an array containing two
 * objects - the current state and an updater function (called dispatch by convention).
 * 
 ** eg. const [ state, dispatch ] = useReducer(reducer,initialValue);
 * 
 * The reducer function also takes two parameters, state and action. The state is the actual state to
 * be handled and the type of the action parameter determines what functionality to be triggered.
 * 
 * *eg. function reducer(state, action) {
           switch (action.type) {
                case 'increment':
                   return {count: state.count + 1}
                case 'decrement':
                    return {count: state.count - 1}
                default: 
                    throw new Error('Ooops, Something went wrong..')
          }                               
 * } 
 *
    Always remember to add default case to handle errors;

 */

//!<-------REACT LIFECYCLE METHODS ------------>

/**

*componentDidMount: is called after the component is mounted to the DOM - this is where you can perform component
initialization work such as data fetching etc.

*shouldComponentUpdate: is used to compare new states and props to current States and props


*/


