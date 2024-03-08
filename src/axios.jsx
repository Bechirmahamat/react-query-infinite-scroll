import axios from 'axios'

export const getData = async ({ pageParam }) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`
    )

    // console.log(response)

    return response.data
}
