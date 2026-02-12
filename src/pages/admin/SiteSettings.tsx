import { useState } from 'react';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { Loader2 } from 'lucide-react';

export default function SiteSettings() {
    const { settings, loading, updateSetting } = useSiteSettings();
    const [form, setForm] = useState({
        contact_email: settings.contact_email || '',
        contact_phone: settings.contact_phone || '',
        hero_title: settings.hero_title || '',
        hero_subtitle: settings.hero_subtitle || '',
        hero_tag: settings.hero_tag || '',
        hero_description: settings.hero_description || '',
        hero_image: settings.hero_image || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        for (const key of Object.keys(form) as (keyof typeof form)[]) {
            await updateSetting(key, form[key]);
        }
        alert('Site settings saved');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold mb-6">Site Settings</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium mb-1">Contact Email</label>
                    <input
                        type="email"
                        name="contact_email"
                        value={form.contact_email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Contact Phone</label>
                    <input
                        type="text"
                        name="contact_phone"
                        value={form.contact_phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Hero Title</label>
                    <input
                        type="text"
                        name="hero_title"
                        value={form.hero_title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
                    <input
                        type="text"
                        name="hero_subtitle"
                        value={form.hero_subtitle}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Hero Tag</label>
                    <input
                        type="text"
                        name="hero_tag"
                        value={form.hero_tag}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Hero Description</label>
                    <textarea
                        name="hero_description"
                        value={form.hero_description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Hero Image URL</label>
                    <input
                        type="text"
                        name="hero_image"
                        value={form.hero_image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
                >
                    Save Settings
                </button>
            </form>
        </div>
    );
}
