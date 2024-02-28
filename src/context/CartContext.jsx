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
                quantity: cantidad, // Asegúrate de incluir la propiedad quantity aquí
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

    const addItem = (id, quantityNew) => {
        const indice = cart.findIndex(producto => producto.id === id)
        const aux = cart
        aux[indice].quantity = quantityNew
        setCart([...aux])
    }

    return (
        <ContextCart.Provider value={{ cart, addItemProduct, deleteItem, cartDelete, itemQuantityCart, total, addItem }}>
            {props.children}
        </ContextCart.Provider>
    )
}




