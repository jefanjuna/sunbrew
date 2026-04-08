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

        function Header() {
            return <h1>Develop. Preview. Ship.</h1>
        }

        function HomePage() {
            return (
            <div>
                {/* Nesting the Header component */}
                <Header />
            </div>
            );
        }

        const root = ReactDOM.createRoot(app);
        //root.render(<h1>Develop. Preview. Ship.</h1>);
        //root.render(<Header />); // or use <Header/>
        root.render(<HomePage />);