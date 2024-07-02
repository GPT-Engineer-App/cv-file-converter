"use client";

import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []);
    const validFiles = uploadedFiles.filter(file =>
      ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"].includes(file.type)
    );

    if (validFiles.length !== uploadedFiles.length) {
      setError("Some files were not in the correct format and were not uploaded.");
    } else {
      setError(null);
    }

    setFiles(prevFiles => [...prevFiles, ...validFiles]);
  };

  const handleFileRemove = (fileName: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Anpassa kandidat CV</h1>
      <p className="mb-4">Duis at consectetur lorem donec massa sapien faucibus et molestie.</p>
      <div className="border-2 border-dashed border-gray-600 p-4 mb-4">
        <input type="file" multiple onChange={handleFileUpload} className="mb-2" />
        <p>DOC, PDF eller RTF. Max fil storlek 20MB</p>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div>
        <h2 className="text-xl font-bold mb-2">Fil lista</h2>
        <ul>
          {files.map(file => (
            <li key={file.name} className="mb-2 flex justify-between items-center">
              <span>{file.name} - {Math.round(file.size / 1024)}KB</span>
              <div>
                <select className="mr-2">
                  <option>Word mall A</option>
                  <option>Word mall B</option>
                </select>
                <button className="bg-blue-500 text-white px-2 py-1 mr-2">Formatera</button>
                <button className="bg-green-500 text-white px-2 py-1 mr-2">Ladda ner CV</button>
                <button onClick={() => handleFileRemove(file.name)} className="bg-red-500 text-white px-2 py-1">X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}