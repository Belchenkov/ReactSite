
const Theme = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Jumbotron />
                    <Pages />
                </div>
            </div>
        );
    }
});


const Navbar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Bootstrap theme</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

const Jumbotron = React.createClass({
    render: function () {
        return (
            <h1>Jumbotron</h1>
        );
    }
});

const Pages = React.createClass({
    render: function () {
        return (
            <h1>Pages</h1>
        );
    }
});

ReactDOM.render(
    <Theme/>,
    document.querySelector('#root')
);
