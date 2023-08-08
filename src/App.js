import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodosList from "./components/todo-list.component";
import CreateTodo from "./components/create-todo.component";

export default function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TodosList />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
