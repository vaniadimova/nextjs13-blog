import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";



type Props = {
    posts: Post[];
  };

function BlogList({ posts }: Props) {
  return (
    <div >
        <hr className="border-[#d29cd6] mb-10" />
    
    <div className="grid grid-cols-1 gap-10 px-10 pb-24 md:grid-cols-2 gap-y-16">
    {/* Posts */}
     {posts.map((post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
        <div className='flex flex-col cursor-pointer group'>
          <div  className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
          <Image
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                className="object-cover object-left rounded-md lg:object-center"
                fill
              />
    <div className="absolute bottom-0 flex w-full p-5 text-white bg-black rounded justify-betwen bg-opacity-20 blackdrop-blur-lg drop-shadow-lg" >
      <div >
        <p className="font-semibold line-clamp-1">{post.title}</p>
        <p className="text-sm">
            {new Date(post._createdAt).toLocaleDateString
            ("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
        </p>
    </div>
        {/* 
     <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2">
        {post.categories.map((category) => (
            <div className="bg-[#d29cd6] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                <p>{category.title}</p>
            </div>
        ))}
     </div>     
        */}
     </div>
  </div>  
  
       <div className="flex mt-5-1">
        <p className="text-lg font-bold uderline">{post.title}</p>
        <p className="text-gray-500 line-clamp-2">{post.description}</p>
    </div>
    <p className="flex items-center mt-5 font-bold group-hover:underline"> 
        Read Post
        <ArrowUpRightIcon className="w-4 h-4 ml-1 " />
    </p>
    </div>
</ClientSideRoute>
))}       
 </div>
</div>
  )
}

export default BlogList