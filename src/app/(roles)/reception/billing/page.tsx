"use client";

import { useState } from "react";
import { CreditCard, Printer, Plus, Trash2, Search } from "lucide-react";

export default function BillingPage() {
  // State for dynamic invoice items
  const [invoiceItems, setInvoiceItems] = useState([
    { id: 1, service: "OPD Consultation - Dr. Doe", qty: 1, price: 500 },
    { id: 2, service: "Complete Blood Count (CBC)", qty: 1, price: 350 },
  ]);

  // Derived state for calculations (Auto-updates when invoiceItems change)
  const subtotal = invoiceItems.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const tax = subtotal * 0.05; // 5% standard tax
  const totalAmount = subtotal + tax;

  // Handlers for modifying the invoice table
  const addServiceLine = () => {
    const newItem = { id: Date.now(), service: "", qty: 1, price: 0 };
    setInvoiceItems([...invoiceItems, newItem]);
  };

  const removeServiceLine = (id: number) => {
    setInvoiceItems(invoiceItems.filter(item => item.id !== id));
  };

  const updateItem = (id: number, field: string, value: string | number) => {
    setInvoiceItems(invoiceItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Billing & Invoicing</h1>
          <p className="text-sm text-slate-500">Generate invoices and process payments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Invoice Generator Form */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">New Invoice</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Select Patient</label>
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-[34px]" />
                <input type="text" className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="Search UHID or Name..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Invoice Date</label>
                <input type="date" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>

            {/* Dynamic Services Table */}
            <div className="border border-slate-200 rounded-lg overflow-hidden mt-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service Details</th>
                    <th className="px-4 py-3 font-semibold w-24">Qty</th>
                    <th className="px-4 py-3 font-semibold w-32 text-right">Price (₹)</th>
                    <th className="px-4 py-3 font-semibold w-12 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {invoiceItems.map((item) => (
                    <tr key={item.id} className="group hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-2">
                        <input 
                          type="text" 
                          value={item.service}
                          onChange={(e) => updateItem(item.id, 'service', e.target.value)}
                          placeholder="Enter service name..."
                          className="w-full bg-transparent outline-none focus:border-b-2 focus:border-brand-500 py-1" 
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input 
                          type="number" 
                          min="1"
                          value={item.qty}
                          onChange={(e) => updateItem(item.id, 'qty', parseInt(e.target.value) || 0)}
                          className="w-full bg-transparent outline-none py-1" 
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input 
                          type="number" 
                          min="0"
                          value={item.price}
                          onChange={(e) => updateItem(item.id, 'price', parseInt(e.target.value) || 0)}
                          className="w-full bg-transparent outline-none text-right py-1" 
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button 
                          onClick={() => removeServiceLine(item.id)}
                          className="text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button 
                onClick={addServiceLine}
                className="w-full py-3 bg-slate-50 text-brand-600 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center justify-center border-t border-slate-200"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Service Line
              </button>
            </div>
          </div>
        </div>

        {/* Real-time Payment Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sticky top-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Payment Summary</h2>
            
            <div className="space-y-3 text-sm text-slate-600 border-b border-slate-100 pb-4 mb-4">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Tax (5%)</span><span>₹{tax.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-slate-900 text-lg pt-3 mt-1 border-t border-slate-100">
                <span>Total Amount</span>
                <span className="text-brand-700">₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Payment Method</label>
                <select className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                  <option>UPI / Digital Wallet</option>
                  <option>Credit/Debit Card</option>
                  <option>Cash</option>
                  <option>Insurance Claim</option>
                </select>
              </div>
              
              <button className="w-full py-3 bg-brand-600 text-white font-bold rounded-lg text-sm hover:bg-brand-700 transition-colors shadow-sm flex items-center justify-center">
                <CreditCard className="w-4 h-4 mr-2" /> Process Payment
              </button>
              <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg text-sm hover:bg-slate-50 transition-colors flex items-center justify-center">
                <Printer className="w-4 h-4 mr-2" /> Print Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}