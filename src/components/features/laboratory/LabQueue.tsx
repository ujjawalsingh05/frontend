interface LabQueueProps {
  tests: any[];
  onAction: (id: string, currentStatus: string) => void;
}

export function LabQueue({ tests, onAction }: LabQueueProps) {
  // Determine button text and logic based on the test's current state
  const getActionText = (status: string) => {
    switch(status) {
      case 'Sample Required': return 'Collect Sample';
      case 'Processing': return 'Mark Ready';
      case 'Result Entry': return 'Publish Results';
      default: return 'View';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-4">Req ID</th>
            <th className="px-6 py-4">Patient / Doctor</th>
            <th className="px-6 py-4">Test Details</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {tests.map((test) => (
            <tr key={test.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className={`font-bold ${test.urgent ? 'text-red-600' : 'text-slate-900'}`}>{test.id}</div>
                {test.urgent && <div className="text-[10px] font-bold text-red-600 uppercase tracking-wider mt-1">Urgent</div>}
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-slate-800">{test.patient}</div>
                <div className="text-xs text-slate-500 mt-1">Req: {test.doctor}</div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-slate-800">{test.type}</div>
                <div className="text-xs text-slate-500 mt-1">{test.category}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${
                  test.status === 'Sample Required' ? 'bg-orange-50 text-orange-700' :
                  test.status === 'Processing' ? 'bg-blue-50 text-blue-700' :
                  'bg-purple-50 text-purple-700'
                }`}>
                  {test.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button 
                  onClick={() => onAction(test.id, test.status)}
                  className="px-4 py-2 bg-white border border-slate-200 text-brand-600 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors"
                >
                  {getActionText(test.status)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}