import Product from "../models/product.model";

export const productExist = async (id: string) => {
    try {
        const productDB = await Product.findById(id)

        if(!productDB)
            throw new Error("El producto con id: " + id + " no existe en la base de datos.")

    } catch (error) {
        console.log(error)
        throw new Error("Error inesperado al validar el ID.")
    }
}