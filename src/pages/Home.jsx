export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">ATS AI + Job Automation Suite</h1>

      <div className="flex gap-4 mb-10">
        <a href="/upload" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Upload Resume
        </a>
        <a href="/login" className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-black">
          Login
        </a>
        <a href="/register" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
          Register
        </a>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg max-w-lg text-center">
        <h2 className="text-xl font-semibold mb-2">Automated Resume Screening</h2>
        <p className="text-gray-600">
          Upload your resume & job description → Get AI match score + skill gap insights.
        </p>
      </div>
    </div>
  );
}
