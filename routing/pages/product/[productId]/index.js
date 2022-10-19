import { useRouter } from "next/router";

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h4>Details about product {productId}</h4>
    )
}
  
export default ProductDetail