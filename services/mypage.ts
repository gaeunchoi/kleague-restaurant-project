import { User } from '@/types/Auth'
import axiosInstance from '@/utils/axiosInstance'

export const setUserData = async (
  data: Partial<User>,
): Promise<User> => {
  const res = await axiosInstance.patch(`/users/me`, data)
  return res.data
}

export const updateReview = async (
  id: number,
  data: { content: string; rating: number },
) => {
  const res = await axiosInstance.patch(`/reviews/${id}`, data)
  return res.data
}

export const deleteReview = async (id: number) => {
  const res = await axiosInstance.delete(`/reviews/${id}`)
  return res.data
}
