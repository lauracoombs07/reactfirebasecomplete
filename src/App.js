import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
// import firebase from "./firebase.js";

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Kiddos" component={Kiddos} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Kiddo = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Kiddos = ({ match }) => (
  <div>
    <h2>Kiddos</h2>

    <ul>
      <li>
        <Link to={`${match.url}/cameron`}>Cameron</Link>
      </li>
      <li>
        <Link to={`${match.url}/sawyer`}>Sawyer</Link>
      </li>
      <li>
        <Link to={`${match.url}/kylie`}>Kylie</Link>
      </li>
      <li>
        <Link to={`${match.url}/grayson`}>Grayson</Link>
      </li>
      <li>
        <Link to={`${match.url}/alexia`}>Alexia</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Kiddo} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/Kiddos">Kiddos</Link>
    </li>
  </ul>
);

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentItem: "",
//       username: "",
//       items: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const itemsRef = firebase.database().ref("items");
//     const item = {
//       title: this.state.currentItem,
//       user: this.state.username
//     };
//     itemsRef.push(item);
//     this.setState({
//       currentItem: "",
//       username: ""
//     });
//   }
//   componentDidMount() {
//     const itemsRef = firebase.database().ref("items");
//     itemsRef.on("value", snapshot => {
//       let items = snapshot.val();
//       let newState = [];
//       for (let item in items) {
//         newState.push({
//           id: item,
//           title: items[item].title,
//           user: items[item].user
//         });
//       }
//       this.setState({
//         items: newState
//       });
//     });
//   }
//   removeItem(itemID) {
//     const itemRef = firebase.database().ref(`/items/${itemID}`);
//     itemRef.remove();
//   }
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <div className="wrapper">
//             <h1>Inventory</h1>
//           </div>
//         </header>
//         <div className="container">
//           <section className="add-item">
//             <form onSubmit={this.handleSubmit}>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="What's your name?"
//                 onChange={this.handleChange}
//                 value={this.state.username}
//               />
//               <input
//                 type="text"
//                 name="currentItem"
//                 placeholder="What are you bringing?"
//                 onChange={this.handleChange}
//                 value={this.state.currentItem}
//               />
//               <button>Add Item</button>
//             </form>
//           </section>
//           <section className="display-item">
//             <div className="wrapper">
//               <ul>
//                 {this.state.items.map(item => {
//                   return (
//                     <li key={item.id}>
//                       <h3>{item.title}</h3>
//                       <p>
//                         brought by: {item.user}
//                         <button onClick={() => this.removeItem(item.id)}>
//                           Remove Item
//                         </button>
//                       </p>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
