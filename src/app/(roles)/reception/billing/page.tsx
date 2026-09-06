"use client";

import { Search, Calendar, Scan, FileText, ChevronDown } from "lucide-react";

export default function BillingDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Billing & Invoicing</h1>
        <p className="text-sm text-slate-500 mt-1">Generate invoices and process payments for hospital services.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Invoice Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">New Invoice</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">Select Patient</label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                <input type="text" placeholder="Search UHID or Name..." className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">Invoice Date</label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                <input type="text" value="04/09/2026" readOnly className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none text-slate-600" />
              </div>
            </div>
          </div>

          <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-3">Service Details</label>
          <table className="w-full text-left mb-6">
            <thead className="border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase">
              <tr>
                <th className="py-3">SERVICE DETAILS</th>
                <th className="py-3 text-center">QTY</th>
                <th className="py-3 text-right">PRICE (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-4">
                  <div className="font-bold text-slate-900 text-sm">OPD Consultation – Dr. Doe</div>
                  <div className="text-xs text-slate-500 mt-0.5">Cardiology Department</div>
                </td>
                <td className="py-4 text-center font-bold text-slate-900">1</td>
                <td className="py-4 text-right font-bold text-slate-900">500.00</td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="font-bold text-slate-900 text-sm">Complete Blood Count (CBC)</div>
                  <div className="text-xs text-slate-500 mt-0.5">Pathology Lab</div>
                </td>
                <td className="py-4 text-center font-bold text-slate-900">1</td>
                <td className="py-4 text-right font-bold text-slate-900">350.00</td>
              </tr>
            </tbody>
          </table>

          <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors tracking-wider uppercase">
            Add Service Line
          </button>
        </div>

        {/* Right Column: Payment & History */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Payment Summary</h3>
            
            <div className="space-y-3 mb-6 border-b border-slate-100 pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-bold text-slate-900">₹850.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tax (5%)</span>
                <span className="font-bold text-slate-900">₹42.50</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-bold text-slate-900">Total Amount</span>
              <span className="text-3xl font-bold text-[#1a365d]">₹892.50</span>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">Payment Method</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none appearance-none font-medium text-slate-700">
                  <option>UPI / Digital Wallet</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-blue-600">
                <Scan className="w-5 h-5"/>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">UPI Payment Active</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Scan QR code at reception</div>
              </div>
            </div>

            <button className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Print Invoice
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Recent Invoices</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-xl hover:border-slate-200 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400"><FileText className="w-4 h-4"/></div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">INV-2094</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">John Doe • ₹1,200.00</div>
                  </div>
                </div>
                <span className="text-slate-400">&gt;</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-xl hover:border-slate-200 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400"><FileText className="w-4 h-4"/></div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">INV-2093</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Sarah J. • ₹850.00</div>
                  </div>
                </div>
                <span className="text-slate-400">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}