import { BinocularsIcon, ShoppingBag } from "lucide-react";
import { mockProducts } from "../productSlice";


export default function Page() {
  const items = mockProducts;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="flex justify-between items-center mb-10 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Our Collections
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <BinocularsIcon size={18} /> Discover the latest trends
          </p>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* CollectionItem componenti yarat */}
            <div className="aspect-3/4 overflow-hidden bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">
                    {product.name}
                  </h3>
                </div>
                <span className="font-bold text-lg">${product.price}</span>
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-2.5 rounded-xl font-medium group-hover:bg-black group-hover:text-white transition-colors">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
