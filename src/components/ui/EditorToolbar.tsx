import { useEdit } from '../../context/EditContext';
import { Save, X, Settings, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EditorToolbar() {
    const { isEditMode, setEditMode, saveChanges, pendingChanges, isSaving } = useEdit();
    const changeCount = Object.keys(pendingChanges).length;

    if (!isEditMode) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-fit"
        >
            <div className="bg-black/80 backdrop-blur-2xl border border-emerald-500/30 rounded-[2.5rem] p-4 px-8 flex items-center gap-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Status Indicator */}
                <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Live Editor</span>
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter leading-none">{changeCount} PENDING CHANGES</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => saveChanges()}
                        disabled={changeCount === 0 || isSaving}
                        className="flex items-center gap-3 bg-emerald-500 text-black px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:grayscale"
                    >
                        {isSaving ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Save className="w-4 h-4" />
                        )}
                        {isSaving ? 'Syncing...' : 'Save Changes'}
                    </button>

                    <button
                        onClick={() => setEditMode(false)}
                        className="flex items-center gap-3 bg-white/5 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
                    >
                        <X className="w-4 h-4" />
                        Exit Editor
                    </button>
                </div>

                {/* Legend/Help */}
                <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-8 text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-md border border-dashed border-emerald-500/50" />
                        <span className="text-[9px] font-bold uppercase tracking-tighter italic">Click text to edit</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Settings className="w-3 h-3 text-emerald-500/50" />
                        <span className="text-[9px] font-bold uppercase tracking-tighter italic">Hover images for options</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
