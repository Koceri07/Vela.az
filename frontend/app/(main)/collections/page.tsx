import React from 'react'
import { BinocularsIcon, ShoppingBag, SlidersHorizontal } from "lucide-react";
import { mockProducts } from './productSlice';

const CollectionsPage = () => {
  const items = mockProducts;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Üst Başlıq */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b pb-8">
        <div>
          <h1 className="text-4xl font-serif text-gray-900">Kolleksiyalarımız</h1>
          <p className="text-gray-500 mt-2 flex items-center gap-2 tracking-wide uppercase text-xs">
            <BinocularsIcon size={16} /> Son trendləri kəşf edin
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm font-medium text-gray-600">
          <span>{items.length} məhsul tapıldı</span>
          <div className="h-4 w-[1px] bg-gray-300"></div>
          <button className="flex items-center gap-2 hover:text-black transition">
            <SlidersHorizontal size={18} /> Sıralama
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sol tərəf: Filtr Paneli */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
          {/* Kateqoriyalar */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-black pl-3">Kateqoriyalar</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer transition flex justify-between">
                <span>Hamısı</span> <span className="text-gray-400">(12)</span>
              </li>
              <li className="hover:text-black cursor-pointer transition flex justify-between">
                <span>Geyim</span> <span className="text-gray-400">(5)</span>
              </li>
              <li className="hover:text-black cursor-pointer transition flex justify-between">
                <span>Aksesuar</span> <span className="text-gray-400">(3)</span>
              </li>
              <li className="hover:text-black cursor-pointer transition flex justify-between">
                <span>Ayaqqabı</span> <span className="text-gray-400">(4)</span>
              </li>
            </ul>
          </div>

          {/* Qiymət Filtri */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-black pl-3">Qiymət Aralığı</h3>
            <div className="space-y-3">
              <input type="range" className="w-full accent-black" min="0" max="500" />
              <div className="flex justify-between text-xs font-medium text-gray-500">
                <span>0 AZN</span>
                <span>500 AZN</span>
              </div>
            </div>
          </div>

          {/* Rəng Filtri */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-black pl-3">Rənglər</h3>
            <div className="flex gap-3 flex-wrap">
              <button className="w-6 h-6 rounded-full bg-black border border-gray-200"></button>
              <button className="w-6 h-6 rounded-full bg-white border border-gray-300"></button>
              <button className="w-6 h-6 rounded-full bg-brown-600 border border-gray-200" style={{backgroundColor: '#a37a7a'}}></button>
              <button className="w-6 h-6 rounded-full bg-gray-400 border border-gray-200"></button>
            </div>
          </div>
        </aside>

        {/* Sağ tərəf: Məhsul Grid-i */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {items.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Şəkil sahəsi */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                  />
                  {/* Hoverda çıxan sürətli baxış və ya səbət düyməsi */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-white text-black py-3 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-black hover:text-white transition">
                       Səbətə At
                    </button>
                  </div>
                </div>
                
                {/* Məlumat sahəsi */}
                <div className="mt-6 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">{product.category}</p>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider group-hover:text-[#a37a7a] transition">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex justify-center items-center gap-3">
                    <span className="text-sm font-bold text-gray-900">{product.price} AZN</span>
                    {/* Əgər endirim olsa bura köhnə qiymət də qoya bilərsən */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsPage