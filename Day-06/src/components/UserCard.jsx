import { useState, useEffect} from "react";

export default function UserCard() {
    const [users,setUsers]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL= "https://jsonplaceholder.typicode.com/users";

    
    useEffect(() => {
        fetch(API_URL).then(res => res.json()).then((data)=>{
            setUsers(data);
            setIsLoading(false)
        }).catch((error =>{console.log(`Error ${error}`);
            setIsLoading(false)
        }))
    }, []);
    
    if(isLoading) return <p>Loading</p>
    
    return (
        <>
           {users.map((user) => (
                    <div key={user.id}>
                    <p>{user.id}. {user.name} ={'>'}{user.email}</p>                        
                    </div>
                ))
            }
        </>
    );
}