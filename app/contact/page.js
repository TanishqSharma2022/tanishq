"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { comment } from "../../comments";

const Contact = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const onSubmit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (response.ok) {
      console.log("Data successfully written to file");
    } else {
      console.error("Failed to write data to file");
    }
  };
  return (
    <div className="mt-12">
      <div className="flex gap-2 items-center justify-between">
        <input
          type="text"
          placeholder="write something positive"
          onChange={(e) => setText(e.target.value)}
          className="w-[80%] px-4 py-2 rounded-xl bg-zinc-200 active:border-sky-300 "
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="px-4 py-2 flex gap-2 items-center border rounded-xl shadow-lg shadow-blue-200"
        >
          Send
          <Send size={20} />
        </button>
      </div>
      {comments.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
    </div>
  );
};

export default Contact;
