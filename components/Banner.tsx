

function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
     <div>
        <h1 className="text-5xl"> Vania's Weekly Blog</h1>
        <h2 className="mt-2 text-gray-600 md:mt-0">
            Welcome to{" "}
            <span className="underline decoration-4 decoration-[#d29cd6]">
                All Internet Users
            </span>{" "}
            Favorite helper in the Devosphere
        </h2>
    </div>  
    
    <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
     Features | Techology | Tutoring  | Codding 
    </p> 
</div>
  )
}

export default Banner