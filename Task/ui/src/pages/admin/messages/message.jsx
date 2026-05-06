import React, { useEffect, useState } from "react";

function Message() {
  const [messages, setMessages] = useState([]);

  
  const getMessages = async () => {
    const res = await fetch("http://localhost:3000/messages");
    const data = await res.json();
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

 
  const deleteMessage = async (id) => {
    await fetch(`http://localhost:3000/messages/${id}`, {
      method: "DELETE",
    });

    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-[32px] font-bold text-[#8b5d6a] mb-6">
        Messages
      </h1>

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white shadow-md p-4 rounded-lg border border-[#e1b4c1]"
            >
              <p className="text-[18px] font-semibold">
                📧 {msg.email}
              </p>

              <p className="mt-2 text-gray-700">
                💬 {msg.message}
              </p>

              <p className="text-[12px] text-gray-400 mt-2">
                {new Date(msg.date).toLocaleString()}
              </p>

              <button
                onClick={() => deleteMessage(msg.id)}
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Message;