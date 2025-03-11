
interface HomeProps {
   children : React.ReactNode,
    text?: string,
    tema: "Claro" | "Escuro"
}


export  const Home = ({children,text,} : HomeProps) =>{
    return(
        <header>
            {children}

            <div className="text-red-600">{text}</div>
        </header>
    )
}