import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
       <Image
       className="object-cover rounded-full"
       height={50}
       width={50}
       src="https://i.pinimg.com/originals/74/01/80/7401800453ff548243c9cd9cd23140d9.jpg"
       alt="logo"
     />
     {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo