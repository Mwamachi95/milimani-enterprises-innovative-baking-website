function TailwindTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Tailwind CSS Test</h1>
      
      {/* Standard Tailwind classes */}
      <div className="bg-red-500 text-white p-4 rounded-lg">
        Standard red background with padding
      </div>
      
      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
        Standard blue with shadow and padding
      </div>
      
      {/* Custom colors */}
      <div className="bg-luscious-lime text-white p-4 rounded-lg">
        Custom luscious-lime background
      </div>
      
      <div className="bg-bright-white border border-gray-300 p-4 rounded-lg">
        Custom bright-white background
      </div>
      
      <div className="bg-wet-sand text-white p-4 rounded-lg">
        Custom wet-sand background
      </div>
      
      <div className="bg-bokara-grey text-bright-white p-4 rounded-lg">
        Custom bokara-grey with bright-white text
      </div>
      
      <div className="bg-dark-hunter-green text-whisper-white p-4 rounded-lg">
        Custom dark-hunter-green with whisper-white text
      </div>
      
      {/* Font family test */}
      <div className="font-sora text-xl text-gray-800 p-4 bg-whisper-white rounded-lg">
        Testing Sora font family
      </div>
    </div>
  )
}

export default TailwindTest