import RestaurantInfo from '@/components/Restaurant/RestaurantInfo'
import RestaurantReviews from '@/components/Restaurant/RestaurantReviews'
import { ReviewSortProvider } from '@/context/ReviewSortContext'
import { getRestaurantsDetail } from '@/services/restaurants'
import { Pages } from '@/styles/customStyle'

async function RestaurantsDetailPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  const restaurant = await getRestaurantsDetail(id)

  return (
    <div className={Pages()}>
      <RestaurantInfo restaurant={restaurant} />
      <ReviewSortProvider>
        <RestaurantReviews restaurant={restaurant} />
      </ReviewSortProvider>
    </div>
  )
}

export default RestaurantsDetailPage
