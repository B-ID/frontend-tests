'use client'
import {FC} from 'react'
import {useQuery} from "@tanstack/react-query";
import {axios} from "@/utils/axios-config";

const fetchPosts = async () => {
    return axios.get('posts').then(res => res.data);
}

interface IPost {
    userId: number;
    id: number
    title:string
    body: string
}


const Home:FC<any> = (props) => {
    const {} = props
    const {data, isLoading, isError, error} = useQuery<IPost[]>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })


  return (
    <main className="">
        {isLoading && 'Loading ....'}
        {!isLoading && (
      <div className={'space-y-4'}>
          {data?.map((post) => (
              <div key={post.id}>
                  <pre>{post.title}</pre>
                  <pre>{post.body}</pre>
              </div>
          ))}
      </div>
        )}
    </main>
  );
}

export default  Home
