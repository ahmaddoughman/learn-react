import { useEffect, useState } from "react";

export default function Effects(){

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))

        return () =>{return false}
    }, [])

    useEffect(()=>{
        setFilteredUsers(users)
    },[users])

    const handleChange = (event) =>{
        const filter = users.filter(
            (user) =>
                user.name.toLowerCase().includes(event.target.value)
        )
        setFilteredUsers(filter)
    }

    return(
        <>
        <input type="text" className="search" placeholder="search for users" onInput={handleChange} />
        {filteredUsers.map((user) => 
            <h3 key={user.id}>{user.name}</h3>
        )}
        </>
    );
}