import { useContext } from "react"
import { TransactionContext } from "../../contexts/transactions_context"
import { FormatDate, FormatPrice } from "../../utils/formatsInputs"



export function Transactions() {
 const {transactions} = useContext(TransactionContext)
    
    return (

        <>
            {transactions.map(item => (
                <div key={item.id} className="flex flex-col">
                    <Transaction title={item.description} value={FormatPrice.format(item.price)} category={item.type} data={FormatDate.format(new Date(item.createdAt))}  />
                </div>
            ))}
        </>
    )
}

const Transaction = ({ title, value, category, data}: { title: string, value: string, category: string, data: string}) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center mt-4 bg-base-gray3 rounded-lg py-4 px-6">
                <div className="w-[40%]">
                    <p className="font-roboto text-base-gray6">{title}</p>
                </div>
                <div className="w-[20%] text-right">
                  
                    <p className={`font-roboto  ${category === 'entrando'?'text-green': 'text-red'}`}>
                    {category ==='saindo' && '- '}
                        {value}</p>
                </div>
                <div className="w-[20%] text-center">
                    <p className="font-roboto text-base-gray6">{category}</p>
                </div>
                <div className="w-[40%] text-right">
                    <p className="font-roboto text-base-gray6">{data}</p>
                </div>
            </div>
        </>
    )
}