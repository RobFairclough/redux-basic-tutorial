import React, { Component } from "react";
import "./App.css";
import AddToDo from "./containers/AddToDo";
import VisibleTodoList from "./containers/VisibleToDoList";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>To Do:</h1>
                    <AddToDo />
                    <VisibleTodoList />
                    <Footer />
                </header>
            </div>
        );
    }
}

export default App;
