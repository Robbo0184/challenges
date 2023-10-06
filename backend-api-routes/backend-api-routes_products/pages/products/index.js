import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FetchProducts() {
    const {data: products, error, isLoading} = useSWR('/api/products', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(products)
    return products.map((product)=> {
       return <li key={product.id}> ProductID: {product.id}- {product.name} - {product.description} - {product.price} - {product.currency} - {product.category}</li>
    })
}