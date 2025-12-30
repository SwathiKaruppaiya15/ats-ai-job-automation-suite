import { useState } from "react";

export default function UploadResume() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume File:", resumeFile);
    console.log("Job Description:", jobDesc);
    alert("Check console → Data received ✔");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white shadow-xl p-8 rounded-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Resume</h2>

        <label className="block mb-4">
          Resume (PDF/DOCX)
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFile(e.target.files[0])}
            className="mt-2 w-full border p-2 rounded"
            required
          />
        </label>

        <label className="block mb-4">
          Job Description
          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="mt-2 w-full border p-2 rounded h-32"
            placeholder="Paste Job Description here"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
