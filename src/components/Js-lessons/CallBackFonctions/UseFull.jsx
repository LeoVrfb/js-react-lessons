import React, { useEffect, useState } from 'react'

const UseFull = () => {

    function getTodos(url, callback1) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback1(null, data))
            .catch(error => callback1(error, null))
    }
    function getUser(url, callback2) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback2(null, data))
            .catch(error => callback2(error, null))
    }
    function getUserPosts(url, callback3) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback3(null, data))
            .catch(error => callback3(error, null))
    }

    const [data, setData] = useState(null);

    function getData() {
        getTodos('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
            if (error) {
                console.log(error);
                return
            }
            const userId = data.userId;
            const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
            getUser(url, (error, data) => {
                if (error) {
                    console.log(error);
                    return;
                }
                const id = data.id;
                const newUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
                getUserPosts(newUrl, (error, data) => {
                    if (error) {
                        console.log(error);
                        return
                    }
                    console.log(data);
                    setData(data)
                })
            })
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        </div>
    )
}

export default UseFull
