import { useInfiniteQuery } from '@tanstack/react-query'
import { getData } from '../axios'

export const useGetInfiniteData = () => {
    return useInfiniteQuery({
        queryKey: ['allData'],
        queryFn: getData,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            const nextPage = lastPage.length ? allPage.length + 1 : undefined
            return nextPage
        },
    })
}
