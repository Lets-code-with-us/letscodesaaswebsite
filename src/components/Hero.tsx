import { Code2, Layout, Laptop, Package } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Code Solutions for Modern Developers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover high-quality templates, components, and complete solutions to accelerate your development workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Browse Collection
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <Layout className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">UI Templates</h3>
                <p className="text-blue-100 text-sm">Beautiful, responsive templates ready for production</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <Code2 className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Components</h3>
                <p className="text-blue-100 text-sm">Reusable components for faster development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <Laptop className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Full Solutions</h3>
                <p className="text-blue-100 text-sm">Complete applications with all features</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <Package className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">UI Kits</h3>
                <p className="text-blue-100 text-sm">Comprehensive design systems and UI libraries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}