import { Plus } from 'lucide-react';


interface ButtonProps{
    children: React.ReactNode,
    click(): void,
}


export const Button = ({children,click}: ButtonProps) =>{

   return(
    <button onClick={click} className="flex items-center gap-1.5 bg-violet-700 text-white  pl-9 pr-9 pt-5 pb-5 rounded-lg">
        <Plus className='font-semibold'/> <span className='text-lg font-medium'>{children}</span>
    </button>
   )
}