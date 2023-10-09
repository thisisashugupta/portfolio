import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  }

export default function Github() {
    // const [ data, setGithubData ] = useState<GitHubUser>('');
    const data = useLoaderData();

    // useEffect(() => {
    //     // useEffect gets executed for the first time when the component is loaded
    //     fetch('https://api.github.com/users/thisisashugupta')
    //     .then(response => response.json())
    //     .then(jsondata => {
    //         console.log(jsondata);
    //         setGithubData(jsondata);
    //     })
    //     // make an api call to fetch the 
    // }, [])
    
    return ( 
        <>
        <div className="text-center m-4 bg-gray-400 text-white p-4 text=3xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
        </>
     );
}

export async function githubInfoLoader() {
    const request = await fetch('https://api.github.com/users/thisisashugupta');
    return request.json();
}