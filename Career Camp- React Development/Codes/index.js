// const heading = document.createElement("h2");
// heading.textContent = "Hello EmaScript";
// heading.className = "Header";
// document.getElementById("root").append(heading);

// const reactHeading = React.createElement("h1", {className : "head", id : "reacthead", children : "Shit World!" });
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// // Add an Image to the main Frame using the React Modyule 
// ReactDOM.render(
//     React.createElement('img', {
//         class : 'Profile',
//         src : 'https://files.codingninjas.in/coding-ninjas-24647.png',
//         alt : 'coding ninjas',

//     }),
//     // Javascript runs 
//     document.getElementById('root')
// );

// Using the Power of JSX engine

        function Sum(){
            return(
                
                <p> Sum is been Rendered</p>
            )
        }

        function  App(){ // The name of component will always  be start on capital letter
            return(
                <>
                <h1 className = "head">Hellow jsx</h1>
                <p> Fragment tags</p>
                <ul>
                    <li>Code Reusablity</li>
                    <li>Single-page-aplication design</li>
                    <li>Component based Design</li>
                </ul>
            </>
            )
            
        }

ReactDOM.createRoot(document.getElementById("root")).render(<><App/> <Sum/></>);

// // Using the Arrow Function
// const App = () =>  // The name of component will always  be start on capital letter
//     (
//         <>
//         <h1 className = "head">Hellow jsx</h1>
//         <p> Fragment tags</p>
//         <ul>
//             <li>Code Reusablity</li>
//             <li>Single-page-aplication design</li>
//             <li>Component based Design</li>
//         </ul>
//     </>
//     )
    



