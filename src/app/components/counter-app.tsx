"use client";
import { useState } from "react";

export default function CounterApp() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>Counter</div>
      <div>{counter}</div>
      <div className="flex flex-row p-2 gap-4">
        <button
          className="p-2 shadow-lg hover:bg-gray-100"
          onClick={() => setCounter(counter * 2)}
        >
          +
        </button>
        <button
          className="p-2 shadow-lg hover:bg-gray-100"
          onClick={() => setCounter(1)}
        >
          reset
        </button>
        <button
          className="p-2 shadow-lg hover:bg-gray-100"
          onClick={() => setCounter(counter / 2)}
        >
          -
        </button>
      </div>
    </div>
  );
}
