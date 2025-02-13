"use client"

import { useState } from "react";

const questions: string[] = [
  "What is your name?",
  "What is your favorite programming language?",
  "What is your dream job?",
  "Where do you see yourself in 5 years?",
  "What are your hobbies?"
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-bold">{questions[currentIndex]}</h2>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        onClick={handleNext}
        disabled={currentIndex === questions.length - 1}
      >
        Next
      </button>
    </div>
  );
}
