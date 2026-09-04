import { User, Clock, FileText } from "lucide-react";

interface PatientQueueProps {
  queue: any[];
  onSelect: (id: string) => void;
}

export function PatientQueue({ queue, onSelect }: PatientQueueProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Today's Appointments</h2>
        <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full">{queue.length} Waiting</span>
      </div>
      <div className="divide-y divide-slate-100">
        {queue.map((patient) => (
          <div key={patient.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900">{patient.name}</div>
                <div className="text-xs text-slate-500 flex items-center mt-0.5">
                  <Clock className="w-3 h-3 mr-1" /> {patient.time} • {patient.type}
                </div>
              </div>
            </div>
            <button 
              onClick={() => onSelect(patient.id)}
              className="px-4 py-2 bg-white border border-slate-200 text-brand-600 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors flex items-center"
            >
              <FileText className="w-4 h-4 mr-2" /> Start Consult
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}