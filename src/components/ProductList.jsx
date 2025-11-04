// import React from 'react'
// import { useCart } from './CartContext'

// const PRODUCTS = [
//   { id: 'coffee-1', name: 'Filter Coffee', price: 40, image: '/images/coffee1.jpg' },
//   { id: 'coffee-2', name: 'Cold Coffee', price: 60, image: '/images/coffee2.jpg' },
//   { id: 'snack-1', name: 'Masala Dosa', price: 90, image: '/images/snack1.jpg' },
// ]

// export default function ProductList() {
//   const { addItem } = useCart()

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h3 className="text-2xl font-bold mb-6">Menu</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {PRODUCTS.map(p => (
//           <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden">
//             <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
//             <div className="p-4">
//               <h4 className="font-semibold text-lg">{p.name}</h4>
//               <p className="text-amber-700 font-medium">₹{p.price}</p>
//               <div className="mt-4">
//                 <button
//                   onClick={() => addItem(p, 1)}
//                   className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-full text-sm"
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
