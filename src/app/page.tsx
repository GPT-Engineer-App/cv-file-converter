"use client";

import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    }
  };

  const handleFileRemove = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anpassa kandidat CV</h1>
      <p className="mb-4">Duis at consectetur lorem donec massa sapien faucibus et molestie.</p>
      <div className="border-dashed border-2 border-gray-400 p-4 mb-4">
        <input
          type="file"
          accept=".pdf,.txt,.doc,.docx"
          multiple
          onChange={handleFileUpload}
          className="mb-2"
        />
        <p>Drag and drop files here to upload, or <a href="#" className="text-blue-500">choose files</a></p>
        <p>DOC, PDF, or RTF. Max file size: 20MB</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">File List</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span>{file.name} - {Math.round(file.size / 1024)}KB</span>
              <div className="flex items-center">
                <select className="mr-2">
                  <option>Word Template A</option>
                  <option>Word Template B</option>
                </select>
                <button className="bg-blue-500 text-white px-2 py-1 mr-2">Format</button>
                <button className="bg-green-500 text-white px-2 py-1 mr-2">Download</button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleFileRemove(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
