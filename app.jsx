        // // Select the div element with 'app' id
        // const app = document.getElementById('app');

        // // Create a new H1 element
        // const header = document.createElement('h1');

        // // Create a new text node for the H1 element
        // const text = 'Develop. Preview. Ship.';
        // const headerContent = document.createTextNode(text);

        // // Append the text to the H1 element
        // header.appendChild(headerContent);

        // // Place the H1 element inside the div
        // app.appendChild(header);

        const app = document.getElementById('app');

        function createTitle(title) {
            if (title) {
                return title;
            } else {
                return 'Default title';
            }
        }

        function Header({ title }) {
            //console.log(props); // {title: 'React'}
            console.log(title); // "React"
            //return <h1>Develop. Preview. Ship.</h1>
            //return <h1>{title}</h1>;
            //return <h1>{`Cool ${title}`}</h1>;  // This is a grave accent ` or also known as backticks
            //return <h1>{createTitle(title)}</h1>;
            return <h1>{title ? title : 'Default Title'}</h1>; // This is a ternary operator
        }

        function HomePage() {
            const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

            return (
            <div>
                {/* Nesting the Header component */}
                <Header title="React" />
                {/* This is example of prop usage and component reusing */}
                <Header title="A new title" />
                <ul>
                    {/* You can then use the array.map() method to iterate over the array and use an arrow function to map a name to a list item: */}
                    {/* {name.map((name) => (<li>{name}</li>))} */}
                    {/*names.map((name) => (
                        <li>{name}</li>
                    ))*/}
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                <button onClick={}>Like</button>
            </div>
            );
        }

        const root = ReactDOM.createRoot(app);
        //root.render(<h1>Develop. Preview. Ship.</h1>);
        //root.render(<Header />); // or use <Header/>
        root.render(<HomePage />);