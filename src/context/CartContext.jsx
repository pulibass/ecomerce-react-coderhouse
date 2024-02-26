import { useState, createContext, useContext } from "react";

const ContextCart = createContext();

export const useCartContext = () => useContext(ContextCart)

export const CartProv = (props) => {

    const [cart, setCart] = useState([])

    const inCart = (id) => {
        return cart.some(producto => producto.id === id)
    }


    const addItemProduct = (itemProductos, cantidad) => {
        if (inCart(itemProductos.id)) {
            const itemProductExist = cart.findIndex(producto => producto.id === itemProductos.id)
            const auxiliar = [...cart];
            auxiliar[itemProductExist].quantity = cantidad;
            setCart(auxiliar)
        } else {
            const itemNew = {
                ...itemProductos,
                quantity: cantidad,
            }
            setCart([...cart, itemNew])
        }
    }

    const deleteItem = (id) => {
        setCart(cart.filter(producto => producto.id !== id))
    }

    const cartDelete = () => {
        setCart([])
    }

    const itemQuantityCart = () => {
        return cart.reduce((acumulador, producto) => acumulador += producto.quantity, 0);
    }

    const total = () => {
        return cart.reduce((acumulador, producto) => acumulador += (producto.quantity * producto.value), 0);
    }

    return (
        <ContextCart.Provider value={{ cart, addItemProduct, deleteItem, cartDelete, itemQuantityCart, total }}>
            {props.children}
        </ContextCart.Provider>
    )
}




