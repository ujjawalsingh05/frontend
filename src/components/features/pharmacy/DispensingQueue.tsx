"use client";

interface DispensingQueueProps {
  queue: any[];
  onProcess: (id: string) => void;
}

export function DispensingQueue({ queue, onProcess }: DispensingQueueProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-4">RX ID / Time</th>
            <th className="px-6 py-4">Patient Info</th>
            <th className="px-6 py-4">Prescribed By</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {queue.map((rx) => (
            <tr key={rx.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-bold text-slate-900">{rx.id}</div>
                <div className="text-xs text-slate-500 mt-1">{rx.time}</div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-slate-800">{rx.patient}</div>
                <div className="text-xs text-slate-500 mt-1">{rx.items} items</div>
              </td>
              <td className="px-6 py-4 text-slate-600">{rx.doctor}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${
                  rx.status === 'Ready for Pickup' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'
                }`}>
                  {rx.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button 
                  onClick={() => onProcess(rx.id)}
                  disabled={rx.status === 'Ready for Pickup'}
                  className="px-4 py-2 bg-white border border-slate-200 text-brand-600 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {rx.status === 'Ready for Pickup' ? 'Dispense' : 'Process Rx'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}