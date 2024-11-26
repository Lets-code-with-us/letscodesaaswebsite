function Price() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Pricing Plans</h1>
        <p className="text-lg text-gray-600 mt-4">
          Choose a plan that works best for your business.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Pay-to-Go Plan */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pay-to-Go</h2>
          <p className="text-gray-600 mb-6">
            Get the website source code as-is. No additional customization or
            support included.
          </p>
          <div className="text-4xl font-bold text-blue-500 mb-4">$299</div>
          <p className="text-gray-500 text-sm">One-time payment</p>
          <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
            Choose Plan
          </button>
        </div>

        {/* Buy the Website Plan */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Buy & Customize
          </h2>
          <p className="text-gray-600 mb-6">
            Purchase the website with options to add customization for an
            additional fee.
          </p>
          <div className="text-4xl font-bold text-blue-500 mb-4">$499</div>
          <p className="text-gray-500 text-sm">
            + Customization starts at $50 per feature
          </p>
          <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
            Choose Plan
          </button>
        </div>

        {/* Build Custom and Scalable Application */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Custom Scalable App
          </h2>
          <p className="text-gray-600 mb-6">
            Tailor-made, highly scalable applications for enterprise-level
            needs.
          </p>
          <div className="text-4xl font-bold text-blue-500 mb-4">$5,000+</div>
          <p className="text-gray-500 text-sm">Starting price</p>
          <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Price;
