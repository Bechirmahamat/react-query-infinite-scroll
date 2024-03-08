import { useEffect } from 'react'
import { useGetInfiniteData } from './query/QueryAndMutation'
import { InView, useInView } from 'react-intersection-observer'
function App() {
    const { ref, inView } = useInView()
    const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
        useGetInfiniteData()
    useEffect(() => {
        if (InView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage])

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
                <div ref={ref}></div>
                {isFetchingNextPage ?? (
                    <div className='loading '>
                        <div></div>
                        <div></div>
                    </div>
                )}
            </div>
        </>
    )
}
export default App
