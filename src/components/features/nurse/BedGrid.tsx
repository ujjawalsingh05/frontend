import { Bed } from "lucide-react";

interface BedGridProps {
  beds: any[];
  onSelectBed: (bedId: string) => void;
}

export function BedGrid({ beds, onSelectBed }: BedGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {beds.map((bed) => (
        <div 
          key={bed.id} 
          onClick={() => onSelectBed(bed.id)}
          className={`border rounded-xl p-4 flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-md ${
            bed.status === 'Occupied' ? 'bg-blue-50 border-blue-200' :
            bed.status === 'Available' ? 'bg-green-50 border-green-200' :
            'bg-orange-50 border-orange-200'
          }`}
        >
          <Bed className={`w-8 h-8 mb-2 ${
            bed.status === 'Occupied' ? 'text-blue-600' :
            bed.status === 'Available' ? 'text-green-600' : 'text-orange-600'
          }`} />
          <div className="font-bold text-slate-900 text-sm">{bed.id}</div>
          <div className="text-xs mt-1 font-medium text-slate-600">{bed.status}</div>
          {bed.patient && <div className="text-xs text-blue-700 mt-2 font-bold truncate w-full">{bed.patient}</div>}
        </div>
      ))}
    </div>
  );
}