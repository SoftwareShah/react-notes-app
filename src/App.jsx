import { Trash2 } from "lucide-react";

import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");

  const [details, setdetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details);

    const Copytask = [...task];

    Copytask.push({ title, details });
    setTask(Copytask);

    settitle("");
    setdetails("");
  };

  const deleteNote = (idx)=>{
    console.log("deleted");
    const Copytask=[...task];
    // console.log(Copytask[idx])

    Copytask.splice(idx, 1)
    setTask(Copytask);

  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col items-center justify-start px-4 py-10 gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          📝 Notes App
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Capture your thoughts instantly
        </p>
      </div>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-gray-800/60 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-2xl w-full max-w-lg space-y-4"
      >
        <h2 className="text-lg font-semibold text-gray-200">New Note</h2>

        {/* First input for heading */}
        <input
          type="text"
          placeholder="Note title..."
          className="bg-gray-900 text-white placeholder-gray-500 px-4 py-2.5 border border-gray-700 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/* Detailed (second) input */}
        <textarea
          placeholder="Write your note details here..."
          className="bg-gray-900 text-white placeholder-gray-500 px-4 py-2.5 border border-gray-700 rounded-xl w-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 active:bg-green-700 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-xl w-full transition-all duration-300 ease-linear shadow-md"
        >
          + Add Note
        </button>
      </form>

      {/* Recent Notes  */}
      <div className="w-full max-w-lg">
        <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3 px-1">
          Recent Notes
        </h2>

        <div className="grid grid-cols-1  gap-4 ">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="notes relative">
                <h3 className="notes-title">{elem.title}</h3>
                <hr className="notes-divider" />
                <p className="notes-details">{elem.details}</p>
                <button onClick={()=>{
                  deleteNote(idx)
                }}
                  type="button"
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 active:scale-50 text-white text-xs font-bold px-10 py-2 rounded-md transition-transform duration-150 cursor-pointer"
                >
                  <Trash2 />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
