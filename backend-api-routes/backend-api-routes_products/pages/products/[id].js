import { useRouter} from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FetchSingleProducts() {
    const router = useRouter()
    const {id} = router.query
    const {data: product, error, isLoading} = useSWR(`/api/products/${id}`, fetcher)
    console.log(product)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return <div>Product name: {product.name} <br></br>{product.description}<br></br>{product.price}{product.currency}<br></br>Product ID: {product.id}</div>; 
    
   
}




