import { useRouter } from "next/router";

function Review() {
    const router = useRouter();
    const {productId, reviewId} = router.query
    return (
        <h4>
            Review {reviewId} for product {productId}
        </h4>
    )
}
  
export default Review