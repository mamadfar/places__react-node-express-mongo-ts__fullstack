import UsersList from "../components/UsersList";

const Users = () => {

    const USERS = [
        {
            id: "u1",
            name: "mamad",
            image: "https://picsum.photos/300/200",
            places: 3
        }
    ]

    return (
        <UsersList items={USERS}/>
    )
}

export default Users;
