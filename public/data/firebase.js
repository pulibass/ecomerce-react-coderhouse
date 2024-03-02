import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection, getDoc, doc } from "firebase/firestore";


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
    const item = { ...producto.data(), id:producto.id}
    return item
}

