import { TransactionsProvider } from "./contexts/transactions_context"
import { Home } from "./pages/home"


function App() {
  return (
    <>
      <div className=" bg-base-gray2  min-h-screen px-20 pb-10 relative py-10 ">
       
        <div className="bg-base-gray1 h-60  w-full absolute top-0 left-0">


        </div>
        <TransactionsProvider>
        <Home />
        </TransactionsProvider>
       

      </div>
    </>
  )
}

export default App
