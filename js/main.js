
const Theme = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar brand="React Web Site" currentPage="home" />
                <Jumbotron heading="Hello, React" text="Приветствую Вас на сайте" btnText="Далее" />
                <Pages text="This is React Web Site" currentPage="home" />
            </div>
        );
    }
});


const Navbar = React.createClass({

    getDefaultProps: function () {
        return {
            brand: 'Default',
            currentPage: 'home'
        }
    },

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
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className={(this.props.currentPage == 'home') ? 'active' : ''}><a href="#">Home</a></li>
                            <li className={(this.props.currentPage == 'about') ? 'active' : ''}><a href="#about">About</a></li>
                            <li className={(this.props.currentPage == 'contact') ? 'active' : ''}><a href="#contact">Contact</a></li>
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
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.btnText}</a></p>
                </div>
            </div>
        );
    }
});

const Pages = React.createClass({
    render: function () {

        var pageContent;

        if (this.props.currentPage == 'home') {
            pageContent = 'This is home page';
        } else if (this.props.currentPage == 'about') {
            pageContent = 'This is about page';
        } else if (this.props.currentPage == 'contact') {
            pageContent = 'This is contact page';
        }

        return (
            <div className="container">
                <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
                <p>{pageContent}</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Theme/>,
    document.querySelector('#root')
);
