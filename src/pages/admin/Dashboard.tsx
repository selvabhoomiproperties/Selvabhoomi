import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Loader2, Plus, Edit, Trash2, LogOut, FileImage, Users, Eye } from 'lucide-react';
import { useEdit } from '../../context/EditContext';
import { Link, useNavigate } from 'react-router-dom';

interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    size: string;
    type: string;
    images: string[];
}

export default function Dashboard() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { setEditMode } = useEdit();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                // Check if user is authenticated
                const { data: { session } } = await supabase.auth.getSession();
                if (!session) {
                    navigate('/admin/login');
                    return;
                }

                const { data, error } = await supabase
                    .from('properties')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data) setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [navigate]);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this property?')) return;

        try {
            const { error } = await supabase
                .from('properties')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setProperties(properties.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error deleting property:', error);
            alert('Failed to delete property');
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => {
                                setEditMode(true);
                                navigate('/');
                            }}
                            className="flex items-center text-emerald-600 hover:text-emerald-700 font-bold text-sm transition-colors"
                        >
                            <Eye className="w-5 h-5 mr-2" />
                            Edit Site Visuals
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">Property Listings</h2>
                    <div className="flex gap-4">
                        <Link
                            to="/admin/leads"
                            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            View Leads
                        </Link>
                        <Link
                            to="/admin/property/new"
                            className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            Add New Property
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {properties.map((property) => (
                            <li key={property.id}>
                                <div className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                                            {property.images && property.images.length > 0 ? (
                                                <img
                                                    src={property.images[0]}
                                                    alt=""
                                                    className="h-16 w-16 object-cover"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-gray-400">
                                                    <FileImage className="w-8 h-8" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-emerald-600 truncate">
                                                {property.title}
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {property.type}
                                                </p>
                                                <p className="ml-2 text-sm text-gray-500 truncate">
                                                    {property.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Link
                                            to={`/admin/property/edit/${property.id}`}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(property.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {properties.length === 0 && (
                            <li className="px-4 py-12 text-center text-gray-500">
                                No properties found. Click "Add New Property" to create one.
                            </li>
                        )}
                    </ul>
                </div>
            </main>
        </div>
    );
}
