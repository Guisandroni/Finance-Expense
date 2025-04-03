import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/transactions_context";
import { FormatPrice } from "../../utils/formatsInputs";



export function OutputCard(){
    const {transactions} = useContext(TransactionContext)

    const sumary = transactions.reduce(
        (total,inicio)=>{
        if(inicio.type === 'entrando'){
            total.entrando += inicio.price
            total.total += inicio.price
        } else {
            total.saindo += inicio.price
            total.total -= inicio.price
        }
    
        return total
    },{
        entrando:0,
        saindo:0,
        total:0
    })
    
    return(
        <>
        <div className="grid grid-cols-3 gap-4 mt-12">
           

            <Header title="Entradas" value={FormatPrice.format(sumary.entrando)} type="Entradas"  stylebg={``}/>
            <Header title="Saidas" value={FormatPrice.format(sumary.saindo)} type="Saidas" stylebg={``}/>
            <Header title="Total" value={FormatPrice.format(sumary.total)} type="Total" stylebg={`bg-green`}/>

        </div>
        </>
    )
}

const Header = ({title,value, type, stylebg}:{title:string,value:string,type:'Entradas'|'Saidas'|'Total',stylebg:string})=>{
    const getIcon = ()=>{
        switch(type){
            case 'Entradas':
                return    <ArrowCircleUp size={32} className='text-green' />
                case 'Saidas':
                return    <ArrowCircleDown size={32} className='text-red' />
                case 'Total':
                return    <CurrencyDollar size={32} className="text-white" />



        }
    }
    return(
        <div className={`bg-base-gray4 flex flex-col justify-center px-6 py-4 rounded-lg gap-6 ${stylebg}`}>
                <div className="flex flex-row justify-between">
                <p className="text-base-gray6 font-roboto text-lg">{title}</p>
                {getIcon()}
                </div>
                <h1 className={`tfont-roboto font-bold text-3xl text-white`}>{value}</h1>
            </div>
    )
}