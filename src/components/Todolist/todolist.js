import { useRef, useState } from "react";

const Todolist = () => {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addToList = () => {
    const todoItem = {
      value: inputRef.current.value,
      id: Math.random().toString(),
    };
    console.log(todoItem);

    setItems([...items, todoItem]);
    inputRef.current.value = "";
  };

  const deleteList = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-333 text-3xl">Todo list</h1>
      <div className="mt-4">
        <input ref={inputRef} className="border-[1px] p-2" type="text" />
        <button
          className="ml-4 border-[1px] bg-white h-8 w-12 rounded"
          onClick={addToList}
        >
          Add
        </button>
      </div>
      <div className="mt-4 border-[1px] h-auto w-64 p-4 rounded">
        {items.map((item) => {
          return (
            <div className="flex flex-col" key={item.id}>
              <div className="w-full flex">
                <div className="w-4/5 h-8 items-center rounded bg-[#f0f0f0] mt-2 mb-2 ml-0 mr-0 first:mt-0 p-2">
                  {item.value}
                </div>
                <button
                  className="h-8 w-1/5 rounded bg-[#f0f0f0] ml-1"
                  onClick={() => deleteList(item.id)}
                >
                  &#45;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
