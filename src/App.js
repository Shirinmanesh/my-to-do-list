import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div>
      <h1>My To do list</h1>
      <TodoCard title="Mobocollege Course" />
      <TodoCard title="English Learning" />
      <TodoCard title="Sports Exercises" />
      <TodoCard title="Watching Movie" />
      <TodoCard title="Reading novel" />
    </div>
  );
}

export default App;
