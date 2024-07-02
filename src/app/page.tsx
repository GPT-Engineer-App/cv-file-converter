"use client";

import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const handleFileRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anpassa kandidat CV</h1>
      <p className="mb-4">Duis at consectetur lorem donec massa sapien faucibus et molestie.</p>
      <div className="border-dashed border-2 border-gray-600 p-4 mb-4">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          Dra och släpp filer här för att ladda upp, eller <span className="text-blue-500">Välj filer</span>
        </label>
        <p className="text-sm text-gray-400">DOC, PDF eller RTF. Max fil storlek 20MB</p>
      </div>
      <div>
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-800 p-2 mb-2">
            <span>{file.name}</span>
            <div className="flex items-center">
              <select className="bg-gray-700 text-white p-1 mr-2">
                <option>Word mall A</option>
                <option>Word mall B</option>
              </select>
              <button className="bg-blue-500 p-1 mr-2">Formatera</button>
              <button className="bg-red-500 p-1" onClick={() => handleFileRemove(index)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
