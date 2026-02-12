import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface EditContextType {
    isEditMode: boolean;
    setEditMode: (mode: boolean) => void;
    pendingChanges: Record<string, string>;
    addChange: (key: string, value: string) => void;
    saveChanges: () => Promise<void>;
    isSaving: boolean;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export function EditProvider({ children }: { children: React.ReactNode }) {
    const [isEditMode, setEditModeState] = useState(false);
    const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({});
    const [isSaving, setIsSaving] = useState(false);

    // Initial check for edit mode from session storage
    useEffect(() => {
        const savedMode = sessionStorage.getItem('editMode');
        if (savedMode === 'true') {
            setEditModeState(true);
        }
    }, []);

    const setEditMode = (mode: boolean) => {
        setEditModeState(mode);
        sessionStorage.setItem('editMode', mode.toString());
        if (!mode) {
            setPendingChanges({}); // Clear changes when exiting
        }
    };

    const addChange = (key: string, value: string) => {
        setPendingChanges(prev => ({ ...prev, [key]: value }));
    };

    const saveChanges = async () => {
        if (Object.keys(pendingChanges).length === 0) return;

        setIsSaving(true);
        try {
            const updates = Object.entries(pendingChanges).map(([key, value]) => ({
                key,
                value
            }));

            const { error } = await supabase
                .from('site_settings')
                .upsert(updates);

            if (error) throw error;

            setPendingChanges({});
            // Optionally reload to fetch fresh settings or just rely on local state
            window.location.reload();
        } catch (error) {
            console.error('Error saving changes:', error);
            alert('Failed to save changes. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <EditContext.Provider value={{
            isEditMode,
            setEditMode,
            pendingChanges,
            addChange,
            saveChanges,
            isSaving
        }}>
            {children}
        </EditContext.Provider>
    );
}

export function useEdit() {
    const context = useContext(EditContext);
    if (context === undefined) {
        throw new Error('useEdit must be used within an EditProvider');
    }
    return context;
}
