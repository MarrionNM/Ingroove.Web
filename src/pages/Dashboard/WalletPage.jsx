import { useEffect, useState } from "react";
import { getHubWallet } from "../../services/walletService";
import { getHubTransactions } from "../../services/walletService";

const WalletPage = () => {
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const walletResponse = await getHubWallet();        
        const TransactionsResponse = await getHubTransactions();
        setWallet(walletResponse);
        setTransactions(TransactionsResponse);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWalletData();
  }, []);

  // return (
  //   <div className="max-w-6xl mx-auto">
  //     <h1 className="text-3xl font-bold text-primary mb-6">Wallet</h1>

  //     {loading ? (
  //       <p className="text-secondaryText">Loading wallet data...</p>
  //     ) : (
  //       <>
  //         {/* Balance Card */}
  //         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
  //           <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
  //             Current Balance
  //           </h2>
  //           <p className="text-3xl font-bold text-primary">
  //             R {wallet?.balance?.toFixed(2) || "0.00"}
  //           </p>
  //           <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:opacity-90 transition">
  //             Request Payout
  //           </button>
  //         </div>

  //         {/* Recent Transactions */}
  //         <h2 className="text-2xl font-semibold text-primary mb-4">
  //           Recent Transactions
  //         </h2>
  //         {transactions.length === 0 ? (
  //           <p className="text-secondaryText">No recent transactions.</p>
  //         ) : (
  //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //             {transactions.map((tx) => (
  //               <div
  //                 key={tx.id}
  //                 className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-xl transition"
  //               >
  //                 <p className="text-sm text-gray-500 dark:text-gray-400">
  //                   {new Date(tx.date).toLocaleDateString()}
  //                 </p>
  //                 <p className="text-md font-semibold mt-1">{tx.description}</p>
  //                 <p
  //                   className={`mt-2 font-bold ${
  //                     tx.amount >= 0 ? "text-green-500" : "text-red-500"
  //                   }`}
  //                 >
  //                   ${tx.amount.toFixed(2)}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         )}
  //       </>
  //     )}
  //   </div>
  // );

   return (
    <div className="flex justify-center py-10 px-4 bg-background min-h-screen">
      <div className="w-full max-w-4xl space-y-6">
        {/* Wallet Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h1 className="text-xl font-bold text-white mb-2">Wallet Balance</h1>
          <p className="text-3xl font-bold text-primary mb-4">
            R {wallet?.balance?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || "0.00"}
          </p>

          {/* Sub info and Payout Button */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Available</p>
              <p className="text-white font-semibold">
                R {wallet?.balance?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || "0.00"}
              </p>
            </div>

            <button className="bg-primary text-white py-2 px-4 rounded hover:opacity-90">
              Payout
            </button>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Recent Transactions</h2>

          {/* Header Row */}
          <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-700 text-white py-2 px-4 rounded-t-lg font-semibold">
            <span>Date</span>
            <span className="text-center">Amount</span>
            <span className="text-right">Balance</span>
          </div>

          {/* Transaction List */}
          <div className="max-h-96 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
            {loading ? (
              <p className="text-gray-400 text-center py-4">Loading transactions...</p>
            ) : wallet?.transactions?.length === 0 ? (
              <p className="text-gray-400 text-center py-4">No transactions</p>
            ) : (
            transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="grid grid-cols-3 py-3 px-4 items-center"
                >
                  {/* Date */}
                  <span className="text-gray-400 text-sm">{new Date(tx.createdDate).toLocaleDateString()}</span>

                  {/* Amount */}
                  <span
                    className={`text-sm font-semibold text-center ${
                      tx.type.toLocaleString() === "0" ? "text-primary" : "text-red"
                    }`}
                  >
                    {tx.type.toLocaleString() === "0" ? "+" : "-"} R {tx.type === "credit" ? "+" : "-"} R {Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}

                  </span>

                  {/* Balance */}
                  <span className="text-sm text-right text-white">
                    R {tx.balance?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || "0.00"}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
