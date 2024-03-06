import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, getDoc, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCexg9TziKBYx_jNGtISyk9VWTASI3H5_8",
    authDomain: "ecomerce-react-coderhouse.firebaseapp.com",
    projectId: "ecomerce-react-coderhouse",
    storageBucket: "ecomerce-react-coderhouse.appspot.com",
    messagingSenderId: "661527999444",
    appId: "1:661527999444:web:a9620deda7c82dca741c41",
    measurementId: "G-S1M5679V87"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)

export const getProducts = async () => {
    const productos = await getDocs(collection(dataBase, "productos"))
    const items = productos.docs.map(
        products => {
            return { ...products.data(), id: products.id }
        }
    )
    return items
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(dataBase, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(dataBase, "productos", id))
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(dataBase, "productos", id), info)
}

export const ordenCompraCreate = async (cliente, total, cart, fecha) => {
    const ordenCompra = await addDoc(collection(dataBase, "ordenesCompra"), {
        cliente: cliente,
        item: cart,
        total: total,
        fecha: fecha,
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(dataBase, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}