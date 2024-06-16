import {useSearchParams} from 'react-router-dom';

export default function User() {

    const userId = useSearchParams();

    return (
        <>
            <h1>User</h1>
            <h1>User with id : {userId}</h1>
        </>
    )
}