import { AlertCircle, CheckCircle2 } from "lucide-react";

interface InventoryTableProps {
  inventory: any[];
}

export function InventoryTable({ inventory }: InventoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-4">Medicine Name</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Stock Level</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {inventory.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4 font-mono">{item.stock} units</td>
              <td className="px-6 py-4">
                {item.stock < 50 ? (
                  <span className="flex items-center text-red-600 text-xs font-bold"><AlertCircle className="w-4 h-4 mr-1" /> Low Stock</span>
                ) : (
                  <span className="flex items-center text-green-600 text-xs font-bold"><CheckCircle2 className="w-4 h-4 mr-1" /> Optimal</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}