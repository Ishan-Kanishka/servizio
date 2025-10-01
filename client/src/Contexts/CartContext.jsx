import {createContext, useState} from 'react';

export const CartContext = createContext ();

export const CartProvider = ({children}) => {
  const [orderItems, setOrderItems] = useState ([]);

  const addToCart = menuId => {
    console.log (menuId);
    setOrderItems (prevItems => {
      const existingItem = prevItems.find (item => item.menu_id === menuId);

      if (existingItem) {
        return prevItems.map (
          item =>
            item.menu_id === menuId
              ? {...item, quantity: item.quantity + 1}
              : item
        );
      } else {
        return [...prevItems, {menu_id: menuId, quantity: 1}];
      }
    });
    console.log (orderItems);
  };

  const updateCart = (menuId, quantity) => {
    setOrderItems (prevItems =>
      prevItems.map (
        item => (item.menu_id === menuId ? {...item, quantity} : item)
      )
    );
    console.log (orderItems);
  };

  const removeFromCart = menuId => {
    setOrderItems (prevItems =>
      prevItems.filter (item => item.menu_id !== menuId)
    );
    console.log (orderItems);
  };

  const clearCart = () => {
    setOrderItems ([]);
    console.log (orderItems);
  };

  return (
    <CartContext.Provider
      value={{
        orderItems,
        addToCart,
        updateCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
