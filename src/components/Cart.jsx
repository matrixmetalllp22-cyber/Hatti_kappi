// import React from 'react'
// import { useCart } from './CartContext'

// export default function Cart() {
//   const { items, removeItem, updateQty, totalItems, totalPrice, clearCart } = useCart()

//   return (
//     <aside className="fixed right-6 top-20 w-80 bg-white rounded-xl shadow-lg p-4 z-40">
//       <h4 className="font-bold text-lg mb-3">Cart ({totalItems})</h4>
//       {items.length === 0 ? (
//         <p className="text-sm text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-3">
//           {items.map(item => (
//             <div key={item.id} className="flex items-center gap-3">
//               <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded" />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="font-medium">{item.name}</div>
//                     <div className="text-sm text-gray-500">₹{item.price}</div>
//                   </div>
//                   <div className="text-sm">₹{item.price * item.quantity}</div>
//                 </div>
//                 <div className="mt-2 flex items-center gap-2">
//                   <button onClick={() => updateQty(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
//                   <div className="px-3">{item.quantity}</div>
//                   <button onClick={() => updateQty(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
//                   <button onClick={() => removeItem(item.id)} className="ml-auto text-sm text-red-600">Remove</button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="border-t pt-3">
//             <div className="flex justify-between font-semibold">Total <span>₹{totalPrice}</span></div>
//             <div className="mt-3 flex gap-2">
//               <button onClick={() => alert('Proceed to checkout (placeholder)')} className="flex-1 bg-amber-800 text-white px-3 py-2 rounded">Checkout</button>
//               <button onClick={() => clearCart()} className="bg-gray-200 px-3 py-2 rounded">Clear</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </aside>
//   )
// }
