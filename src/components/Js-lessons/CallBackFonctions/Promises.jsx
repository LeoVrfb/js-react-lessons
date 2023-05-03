import React, { useEffect, useState } from 'react'

const Promises = () => {

    const baseURL = 'https://jsonplaceholder.typicode.com'

    function getTodos(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        });

    }
    function getUser(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    function getUserPosts(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    const [data, setData] = useState(null);


    useEffect(() => {
        getTodos(`${baseURL}/todos/1`)
            .then(data => {
                return getUser(`${baseURL}/users/${data.userId}`)
            })
            .then(data => {
                return getUserPosts(`${baseURL}/posts?userId=${data.id}`)
            })
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h3>Les promises</h3>
            {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        </div>
    )
}

export default Promises
