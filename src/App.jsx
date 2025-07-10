// src/App.jsx
import { useState } from 'react';
import"./App.css";
export default function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // This is a mock response for demonstration purposes
      const mockResponse = {
        answer: "No, an insurance company is not liable to pay compensation if a transport vehicle is used without a valid permit at the time of the accident. The Supreme Court held that use of a vehicle in a public place without a permit is a fundamental statutory infraction, and such a situation is not equivalent to cases involving absence of licence, fake licence, or breach of conditions such as overloading. Therefore, the insurer is entitled to recover the compensation amount from the owner and driver after paying the claim.",
        citations: [
          {
            text: "Use of a vehicle in a public place without a permit is a fundamental statutory infraction. The said situations cannot be equated with absence of licence or a fake licence or a licence for different kind of vehicle, or, for that matter, violation of a condition of carrying more number of passengers.",
            source: "Doc_Name.docx"
          },
          {
            text: "Therefore, the tribunal as well as the High Court had directed that the insurer shall be entitled to recover the same from the owner and the driver.",
            source: "Doc_Name.docx"
          }
        ]
      };
      
      setTimeout(() => {
        setResponse(mockResponse);
        setIsLoading(false);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 1500);
      
    } catch (err) {
      setError("Failed to get a response. Please check if the backend service is running.");
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploadStatus('Preparing to upload...');
    
    // Simulate file upload process
    setTimeout(() => {
      if (file.size > 10 * 1024 * 1024) { // 10MB
        setUploadStatus('Error: File size exceeds 10MB limit');
        return;
      }
      
      const validTypes = ['application/pdf', 'application/msword', 
                         'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                      
      if (!validTypes.includes(file.type)) {
        setUploadStatus('Error: Invalid file type. Please upload PDF or Word documents.');
        return;
      }
      
      setUploadStatus('Uploading...');
      
      setTimeout(() => {
        setUploadStatus('Document uploaded successfully! Processing...');
        
        setTimeout(() => {
          setUploadStatus('Document processed and added to knowledge base');
          
          setTimeout(() => {
            setUploadStatus('');
          }, 3000);
        }, 1500);
      }, 1000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 rounded-lg transform rotate-12 animate-pulse-slow">
                <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Lexi.SG Legal Assistant</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative group">
                Home
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative group">
                About
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative group">
                Documentation
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative group">
                Contact
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </a>
            </nav>
            <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Legal Research Assistant
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ask questions about Singapore legal matters and get answers with supporting case law citations.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium shadow-sm border border-indigo-100">
              Powered by RAG Technology
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>

          {/* Document Upload Section */}
          <section className="mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Upload Legal Documents</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Upload legal documents to expand the assistant's knowledge base. Supported formats include PDF and Word documents (up to 10MB).
                  </p>
                  
                  <div className="relative group">
                    <label htmlFor="document-upload" className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-dashed border-gray-300 rounded-lg appearance-none cursor-pointer hover:border-indigo-400 focus:outline-none">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-3 text-gray-400 group-hover:text-indigo-500" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                      </div>
                      <input id="document-upload" name="document-upload" type="file" className="sr-only" onChange={handleFileUpload} />
                    </label>
                    
                    {uploadStatus && (
                      <div className={`mt-3 text-sm ${
                        uploadStatus.startsWith('Error') 
                          ? 'text-red-600' 
                          : uploadStatus.includes('successfully') || uploadStatus.includes('processed')
                            ? 'text-green-600'
                            : 'text-indigo-600'
                      }`}>
                        {uploadStatus}
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Uploads</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Employment_Law_Updates.pdf</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Company_Bylaws.docx</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Tax_Regulations_2023.pdf</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Query Form */}
          <form onSubmit={handleSubmit} className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your legal question..."
                className="relative w-full p-5 pr-36 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className={`relative px-6 py-2 rounded-md text-white font-medium transition-all duration-300 transform
                  ${!query.trim() || isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : "Ask"}
              </button>
            </div>
          </form>

          {/* Response Section */}
          {response && (
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-500 hover:shadow-2xl">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Answer</h3>
                </div>
                <div className="prose prose-indigo max-w-none border-l-4 border-indigo-500 pl-4 italic text-gray-800">
                  <p>{response.answer}</p>
                </div>
                
                {response.citations.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      Supporting Citations
                    </h4>
                    <div className="space-y-4">
                      {response.citations.map((citation, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg border-l-4 border-indigo-500 relative overflow-hidden group"
                        >
                          <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity transform translate-x-1/2 -translate-y-1/2"></div>
                          <p className="italic text-gray-700 relative z-10">{citation.text}</p>
                          <p className="text-sm text-gray-500 mt-3 flex items-center relative z-10">
                            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            {citation.source}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="flex relative z-10">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Example Queries */}
          <section className="mt-20">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Example Queries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Is an insurance company liable to pay compensation if a transport vehicle involved in an accident was being used without a valid permit?",
                "Under Singapore law, what are the requirements for a valid rental agreement?",
                "What are the legal consequences of breaching a non-disclosure agreement in Singapore?",
                "Can an employer terminate an employment contract without notice during probation period?"
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(example)}
                  className="group bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">{example}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-gray-200 py-10 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="text-gray-700 font-medium">Lexi.SG Legal Assistant</span>
            </div>
            <div className="text-gray-600 text-sm flex items-center">
              <span>© {new Date().getFullYear()} Lexi.SG. All rights reserved.</span>
              <div className="mx-3 w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add custom styles for animations */}
      <style jsx>{`
      
      `}</style>
    </div>
  );
}