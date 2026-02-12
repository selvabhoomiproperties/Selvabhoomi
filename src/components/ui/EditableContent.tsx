import React, { useRef, useState, useEffect } from 'react';
import { useEdit } from '../../context/EditContext';
import { Edit, Image as ImageIcon, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditableTextProps {
    id: string;
    content: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export function EditableText({ id, content, className, as: Component = 'div' }: EditableTextProps) {
    const { isEditMode, addChange, pendingChanges } = useEdit();
    const [localContent, setLocalContent] = useState(pendingChanges[id] || content);

    useEffect(() => {
        if (pendingChanges[id]) {
            setLocalContent(pendingChanges[id]);
        }
    }, [pendingChanges, id]);

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        const newText = e.currentTarget.innerText;
        if (newText !== content) {
            addChange(id, newText);
        }
    };

    if (!isEditMode) {
        return <Component className={className}>{localContent}</Component>;
    }

    return (
        <Component
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur}
            className={`${className} outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg transition-all border border-dashed border-emerald-500/30 px-2 -mx-2 hover:border-emerald-500/60`}
        >
            {localContent}
        </Component>
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
        <div className="relative group/edit-img">
            <img src={currentSrc} alt={alt} className={className} />
            <div className="absolute inset-0 bg-emerald-500/10 border-2 border-dashed border-emerald-500/30 opacity-0 group-hover/edit-img:opacity-100 transition-opacity pointer-events-none rounded-[inherit]" />

            <button
                onClick={() => setIsEditing(true)}
                className="absolute top-4 right-4 bg-emerald-500 text-black p-3 rounded-xl shadow-2xl opacity-0 group-hover/edit-img:opacity-100 transition-all hover:scale-110 z-20"
            >
                <Edit className="w-5 h-5" />
            </button>

            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md rounded-[inherit]"
                    >
                        <div className="w-full space-y-4">
                            <div className="flex items-center gap-3 text-emerald-400 mb-2">
                                <ImageIcon className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Update Image URL</span>
                            </div>
                            <input
                                type="text"
                                value={tempUrl}
                                onChange={(e) => setTempUrl(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-emerald-500"
                                placeholder="https://images.unsplash.com/..."
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={handleSave}
                                    className="flex-1 bg-emerald-500 text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                                >
                                    <Check className="w-4 h-4" /> Apply
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 bg-white/10 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                                >
                                    <X className="w-4 h-4" /> Cancel
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
