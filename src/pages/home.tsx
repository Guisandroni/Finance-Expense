import { Navbar } from "./components/navbar";
import { OutputCard } from "./components/outputcard";
import { Search } from "./components/search";
import { Transactions } from "./components/transactions";


export function Home() {
    return (
        <div className="relative">
           <Navbar />
            <OutputCard />
            <Search />
            <Transactions />

        </div>
    )
}