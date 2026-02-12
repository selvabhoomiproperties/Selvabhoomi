import React, { useRef, useState, useEffect } from 'react';
import { useEdit } from '../../context/EditContext';
import { Edit, Image as ImageIcon, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditableTextProps {
    id: string;
    content: string;
    className?: string;
    as?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'label';
}

export function EditableText({ id, content, className, as: Component = 'div' }: EditableTextProps) {
    const { isEditMode, addChange, pendingChanges } = useEdit();
    const [localContent, setLocalContent] = useState(pendingChanges[id] || content);

    useEffect(() => {
        if (pendingChanges[id]) {
            setLocalContent(pendingChanges[id]);
        }
    }, [pendingChanges, id]);

    const handleBlur = (e: React.FocusEvent<any>) => {
        const newText = e.currentTarget.innerText;
        if (newText !== content) {
            addChange(id, newText);
        }
    };

    if (!isEditMode) {
        return <Component className={className}>{localContent}</Component>;
    }

    return (
        <div className="relative group/edit-text">
            <Component
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                className={`${className} outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg transition-all border border-dashed border-emerald-500/30 px-2 -mx-2 hover:border-emerald-500/60 min-h-[1em] min-w-[1ch]`}
            >
                {localContent}
            </Component>
            <div className="absolute -top-3 -right-3 opacity-0 group-hover/edit-text:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-emerald-500 text-black p-1 rounded-md shadow-lg">
                    <Edit className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
}

interface EditableImageProps {
    id: string;
    src: string;
    alt: string;
    className?: string;
}

export function EditableImage({ id, src, alt, className }: EditableImageProps) {
    const { isEditMode, addChange, pendingChanges } = useEdit();
    const [isEditing, setIsEditing] = useState(false);
    const [tempUrl, setTempUrl] = useState(pendingChanges[id] || src);

    const [currentSrc, setCurrentSrc] = useState(pendingChanges[id] || src);

    useEffect(() => {
        if (pendingChanges[id]) {
            setCurrentSrc(pendingChanges[id]);
        }
    }, [pendingChanges, id]);

    const handleSave = () => {
        addChange(id, tempUrl);
        setIsEditing(false);
    };

    if (!isEditMode) {
        return <img src={currentSrc} alt={alt} className={className} />;
    }

    return (
        <div
            className="relative group/edit-img cursor-pointer"
            onClick={() => !isEditing && setIsEditing(true)}
        >
            <img src={currentSrc} alt={alt} className={className} />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover/edit-img:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px] rounded-[inherit] border-2 border-emerald-500 shadow-[inset_0_0_50px_rgba(16,185,129,0.3)] z-10">
                <div className="bg-emerald-500 text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl transform translate-y-4 group-hover/edit-img:translate-y-0 transition-transform duration-500">
                    <ImageIcon className="w-4 h-4" />
                    Change Image
                </div>
            </div>

            {/* Edit Trigger Badge */}
            <div className="absolute top-4 right-4 bg-emerald-500 text-black p-2 rounded-lg shadow-xl z-20">
                <Edit className="w-4 h-4" />
            </div>

            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="w-full max-w-lg bg-gray-950 border border-emerald-500/20 rounded-[3rem] p-12 shadow-[0_0_100px_rgba(16,185,129,0.1)]"
                        >
                            <div className="space-y-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                            <ImageIcon className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Media Protocol</h3>
                                            <p className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.5em] mt-1">Update visual asset</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsEditing(false)} className="p-3 hover:bg-white/5 rounded-full transition-colors text-gray-600 hover:text-white">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-emerald-500/20 uppercase tracking-[0.6em] ml-6">Source URL</label>
                                    <input
                                        type="text"
                                        value={tempUrl}
                                        onChange={(e) => setTempUrl(e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-3xl px-8 py-6 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all font-mono italic shadow-inner"
                                        placeholder="Enter image URL..."
                                        autoFocus
                                    />
                                </div>

                                <div className="flex gap-6">
                                    <button
                                        onClick={handleSave}
                                        className="flex-1 bg-emerald-500 text-black py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.6em] flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-[1.02] transition-all active:scale-95"
                                    >
                                        <Check className="w-5 h-5" /> Sync Node
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="px-10 bg-white/5 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.6em] hover:bg-white/10 transition-all"
                                    >
                                        Abort
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
