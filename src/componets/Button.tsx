import { CirclePlus } from 'lucide-react';


interface ButtonProps{
    children: React.ReactNode,
    click(): void,
}


export const Button = ({children,click}: ButtonProps) =>{

   return(
    <button onClick={click} className="flex items-center justify-center gap-2.5 bg-violet-700 text-white  pl-9 pr-9 pt-5 pb-5 rounded-xl">
         <span className='text-lg font-medium'>{children}</span> <CirclePlus className=''/>
    </button>
   )
}