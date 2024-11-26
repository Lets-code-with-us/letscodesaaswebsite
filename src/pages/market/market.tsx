import { useState } from "react";
import { products } from "../../data/products";
import { Search } from "lucide-react";
import ProductCard from "../../components/ProductCard";
import FilterSidebar from "../../components/FilterSidebar";


function Market() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
    const [expandedProductId, setExpandedProductId] = useState<string | null>(
      null
    );
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesTechStack =
        selectedTechStacks.length === 0 ||
        product.techStack.some((tech) => selectedTechStacks.includes(tech));
  
      return matchesSearch && matchesCategory && matchesPrice && matchesTechStack;
    });
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search templates, components, or complete solutions..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedTechStacks={selectedTechStacks}
            setSelectedTechStacks={setSelectedTechStacks}
          />

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isExpanded={expandedProductId === product.id}
                  onExpand={() =>
                    setExpandedProductId(
                      product.id === expandedProductId ? null : product.id
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Market;
