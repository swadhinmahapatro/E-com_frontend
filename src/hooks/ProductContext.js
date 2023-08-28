import { createContext, useState,useContext } from "react";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </ProductContext.Provider>
  );
}
export function useProductContext() {
  return useContext(ProductContext);
}