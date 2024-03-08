import { useEffect } from 'react'
import { useGetInfiniteData } from './query/QueryAndMutation'
import { useInView } from 'react-intersection-observer'
function App() {
    const { ref, inView } = useInView()
    const {
        data,
        fetchNextPage,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        isError,
        error,
    } = useGetInfiniteData()
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage])
    if (isError) {
        return <p>{error}</p>
    }
    if (isLoading) return <p>Loading...</p>

    return (
        <>
            <p>All Data</p>
            <div>
                {data.pages.map((item, index) => {
                    return (
                        <ul key={index}>
                            <p style={{ color: 'blue', fontSize: '25px' }}>
                                page number: {index + 1}
                            </p>
                            {item.map((item) => {
                                return <li key={item.id}>{item.title}</li>
                            })}
                        </ul>
                    )
                })}
            </div>
            {isFetchingNextPage ?? <div className=' '>loading...</div>}
            <div ref={ref}></div>
        </>
    )
}
export default App
