import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type SiteSettings = {
    contact_email?: string;
    contact_phone?: string;
    hero_title?: string;
    hero_subtitle?: string;
    [key: string]: string | undefined;
};

export function useSiteSettings() {
    const [settings, setSettings] = useState<SiteSettings>({});
    const [loading, setLoading] = useState(true);

    const fetchSettings = async () => {
        const { data, error } = await supabase.from('site_settings').select('*');
        if (error) {
            console.error('Error fetching site settings:', error);
        } else if (data) {
            const map: SiteSettings = {};
            data.forEach((row: any) => {
                map[row.key] = row.value;
            });
            setSettings(map);
        }
        setLoading(false);
    };

    const updateSetting = async (key: string, value: string) => {
        const { error } = await supabase.from('site_settings').upsert({ key, value });
        if (error) {
            console.error('Error updating setting', key, error);
        } else {
            setSettings((prev) => ({ ...prev, [key]: value }));
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    return { settings, loading, updateSetting };
}
