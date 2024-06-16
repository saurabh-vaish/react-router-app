import {useLoaderData} from 'react-router-dom';

export default function Github() {


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/saurabhvaish93')
    //         .then(res => res.json())
    //         .then(res=>setData(res))
    // }, [])
    
    // After route actions are called, the data will be revalidated automatically and return the latest result from your loader.
    // Note that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React Router manages internally,
    // so you don't need to worry about it refetching when it re-renders for reasons outside of routing.
    // This also means data returned is stable between renders, so you can safely pass it to dependency arrays in React hooks like useEffect. 
    //It only changes when the loader is called again after actions or certain navigations.In these cases the identity will change(even if the values don't).

    const data = useLoaderData(); 

    return (
        <>
             <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <img src={data.avatar_url} width={300} alt="" />
                    </div>
                    <div >
                        <div>Name : {data.name}</div>
                        <div>Company : {data.company}</div>
                        <div>Location : {data.location}</div>
                        <span>Repos : {data.public_repos}</span>
                    </div>
                </div>
            </div>
        </>
    );
}


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/saurabh-vaish');
    return res ? res.json() : {};
}