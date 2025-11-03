// import React, { createContext, useContext, useReducer } from 'react'

// const CartContext = createContext(null)

// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD': {
//       const existing = state.items.find(i => i.id === action.item.id)
//       if (existing) {
//         return {
//           ...state,
//           items: state.items.map(i =>
//             i.id === action.item.id ? { ...i, quantity: i.quantity + action.qty } : i
//           ),
//         }
//       }
//       return { ...state, items: [...state.items, { ...action.item, quantity: action.qty }] }
//     }
//     case 'REMOVE':
//       return { ...state, items: state.items.filter(i => i.id !== action.id) }
//     case 'UPDATE_QTY':
//       return {
//         ...state,
//         items: state.items
//           .map(i => (i.id === action.id ? { ...i, quantity: Math.max(1, action.qty) } : i))
//           .filter(i => i.quantity > 0),
//       }
//     case 'CLEAR':
//       return { ...state, items: [] }
//     default:
//       return state
//   }
// }

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(cartReducer, { items: [] })

//   const addItem = (item, qty = 1) => dispatch({ type: 'ADD', item, qty })
//   const removeItem = id => dispatch({ type: 'REMOVE', id })
//   const updateQty = (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty })
//   const clearCart = () => dispatch({ type: 'CLEAR' })

//   const totalItems = state.items.reduce((s, i) => s + i.quantity, 0)
//   const totalPrice = state.items.reduce((s, i) => s + i.quantity * (i.price || 0), 0)

//   return (
//     <CartContext.Provider value={{ items: state.items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export function useCart() {
//   const ctx = useContext(CartContext)
//   if (!ctx) throw new Error('useCart must be used within a CartProvider')
//   return ctx
// }

// export default CartContext
