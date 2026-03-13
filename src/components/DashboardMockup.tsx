import React from 'react';
import { motion } from 'framer-motion';

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-2xl shadow-2xl p-6 overflow-hidden border border-gray-100" style={{ maxWidth: '800px' }}>
      {/* Main Chart */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-4">Our Marketing Analysis</h4>
        <div className="flex items-end gap-2 h-48 bg-gray-50 p-4 rounded-lg">
          {[40, 60, 45, 90, 50, 70, 40, 85, 55, 65].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`flex-1 rounded-t-sm ${h === 90 ? 'bg-primary' : 'bg-gray-200'}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-gray-400">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct'].map(m => <span key={m}>{m}</span>)}
        </div>
      </div>

      {/* Grid of smaller cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <span className="text-[10px] text-gray-400 block mb-1">90% Growth</span>
          <div className="h-12 w-full bg-white rounded flex items-center justify-center">
             <div className="w-full px-2">
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '90%' }}
                        className="h-full bg-primary"
                    />
                </div>
             </div>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
             {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />)}
          </div>
          <span className="text-xs font-bold">4.5 <span className="text-[10px] font-normal text-gray-400">(rating)</span></span>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <span className="text-[10px] text-gray-400 block mb-1">Total Traffic</span>
          <div className="relative h-12 flex items-center justify-center">
             <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin-slow" />
             <span className="absolute text-[10px] font-bold">45.2K+</span>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 right-10 bg-white shadow-lg p-2 rounded-lg border border-gray-100"
      >
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-primary" />
           <span className="text-[8px] font-medium">Highest growth in 9 Month</span>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
