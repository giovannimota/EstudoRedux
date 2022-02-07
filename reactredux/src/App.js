import React, { Component } from "react";

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

class App extends Component {
  state = {
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" },
        ],
      },
      {
        id: 2,
        title: "Aprendendo Redux",
        lessons: [
          { id: 3, title: "Terceira aula" },
          { id: 4, title: "Quarta aula" },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Video />
        <Sidebar modules={this.state.modules} />
      </div>
    );
  }
}

export default App;
//https://www.youtube.com/watch?v=u99tNt3TZf8
//22:24
