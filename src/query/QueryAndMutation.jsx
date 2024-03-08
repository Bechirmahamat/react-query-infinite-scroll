import { useInfiniteQuery } from '@tanstack/react-query'
import { getData } from '../axios'

export const useGetInfiniteData = () => {
    return useInfiniteQuery({
        queryKey: ['allData'],
        queryFn: getData,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            console.log({ lastPage, allPage })
            // console.log(lastPage.length)
            const nextPage = lastPage.length ? allPage.length + 1 : undefined
            return nextPage
        },
    })
}
