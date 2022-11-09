import logo from './logo.svg';
import './App.css';
import React from 'react';


interface IProps {
  name: string;
}

interface IState {
  count: number;
  title: string;
  logos: string;
}
class App extends React.Component<IProps, IState> {
  state = {
    count: 0,
    title: 'react native',
    logos: logo,
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.logos} className="App-logo" alt="logo" />
          <p>
            Edit <code>{this.state.title}</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>第一次体验React项目，请多关照。</h1>
        </header>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1>第一次体验React项目，请多关照。</h1>
//       </header>
//     </div>
//   );
// }

// export default App;