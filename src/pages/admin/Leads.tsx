import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Loader2, ArrowLeft, Trash2, Mail, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Lead {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
    status: string;
}

export default function Leads() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        try {
            const { data, error } = await supabase
                .from('leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data) setLeads(data);
        } catch (error) {
            console.error('Error fetching leads:', error);
            alert('Failed to fetch leads');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this lead?')) return;

        try {
            const { error } = await supabase
                .from('leads')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setLeads(leads.filter(l => l.id !== id));
        } catch (error) {
            console.error('Error deleting lead:', error);
            alert('Failed to delete lead');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/admin/dashboard" className="mr-4 text-gray-500 hover:text-gray-700">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">Leads Management</h1>
                    </div>
                </div>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Inquiries
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            List of all contact form submissions
                        </p>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {leads.map((lead) => (
                            <li key={lead.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center mb-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mr-3">
                                                {lead.first_name} {lead.last_name}
                                            </h4>
                                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                                {lead.status || 'New'}
                                            </span>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-500 mb-2">
                                            <div className="flex items-center">
                                                <Mail className="w-4 h-4 mr-2" />
                                                <a href={`mailto:${lead.email}`} className="hover:text-emerald-600">
                                                    {lead.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center">
                                                <Phone className="w-4 h-4 mr-2" />
                                                <a href={`tel:${lead.phone}`} className="hover:text-emerald-600">
                                                    {lead.phone}
                                                </a>
                                            </div>
                                            <div className="flex items-center sm:col-span-2">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {new Date(lead.created_at).toLocaleString()}
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-sm">
                                            {lead.message}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(lead.id)}
                                        className="ml-4 text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                        title="Delete Lead"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </li>
                        ))}
                        {leads.length === 0 && (
                            <li className="px-4 py-8 text-center text-gray-500">
                                No leads found yet.
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
