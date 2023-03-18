import Square from './Square';


function Board() {
  return (
    <div>
      <div className="board">
        <div className="board-row">
          <Square value={0} />
          <Square value={1} />
          <Square value={2} />
        </div>
        <div className="board-row">
          <Square value={3} />
          <Square value={4} />
          <Square value={5} />
        </div>
        <div className="board-row">
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
        </div>
      </div>
    </div>
  );
}

export default Board;

// to pass a number in the props , use cruly brackets
// to pass a string in the props , use inverted commas
