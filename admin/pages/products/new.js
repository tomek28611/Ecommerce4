import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NweProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);

    const router = useRouter();

    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title, description, price};
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts) {
         router.push('/products');
    }

    return (
        <Layout>
            <form onSubmit={ createProduct }>
                <h1 className="">New Product</h1>

                <label>Product name</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />

                <label>Description</label>
                <textarea
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)} >
                </textarea>

                <label>Price in EUR</label>
                <input
                    type="number"
                    placeholder="price in EUR"
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)} />

                <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}