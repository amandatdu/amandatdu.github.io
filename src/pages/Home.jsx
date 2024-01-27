import logo from '../logo.svg';

export const HomePage = () => {
    return (
        <div className="homepage">
            <img src={logo} className="app__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
    )
}