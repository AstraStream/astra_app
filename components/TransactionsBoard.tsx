import { columns, Transactions } from "./tables/wallet-transactions/columns"
import { TransactionTable } from "./tables/wallet-transactions/data-table"

async function getData(): Promise<Transactions[]> {
  return [
    {
      id: "728ed52f",
      name: "RUNE",
      type: "deposit",
      amount: 300,
      from: "0x232132...323213412",
      to: "0x232132...323213412",
      status: "pending",
      transaction_hash: "0xqwe232_234324ssad"
    },
    {
      id: "728ed52f",
      name: "LearnFI",
      type: "withdrawal",
      amount: 30,
      from: "0x232132...323213412",
      to: "0x232132...323213412",
      status: "failed",
      transaction_hash: "0xqwe232_234324ssad"
    },
    {
      id: "728ed52f",
      name: "Astra",
      type: "swap",
      amount: 20,
      from: "0x232132...323213412",
      to: "0x232132...323213412",
      status: "pending",
      transaction_hash: "0xqwe232_234324ssad"
    }
  ]
}

const TransactionsBoard = async () => {
  const data = await getData();

  return (
    <div className="wallet-board-container !h-max p-7 space-y-3.5">
        <header>
            <h1 className="wallet-board-title">Transactions</h1>
        </header>

        {/* Transactions */}
        <TransactionTable 
          columns={columns}
          data={data}
        />
    </div>
  )
}

export default TransactionsBoard