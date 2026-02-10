import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PropertyForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;

    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        size: '',
        type: 'Residential Plot',
        description: '',
        site_plan: '',
        map_link: '',
    });

    const [images, setImages] = useState<string[]>([]);
    const [highlights, setHighlights] = useState<string[]>([]);
    const [features, setFeatures] = useState<string[]>([]);

    useEffect(() => {
        if (isEdit) {
            fetchProperty();
        }
    }, [id]);

    const fetchProperty = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('properties')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            if (data) {
                setFormData({
                    title: data.title,
                    location: data.location,
                    price: data.price,
                    size: data.size,
                    type: data.type,
                    description: data.description,
                    site_plan: data.site_plan || '',
                    map_link: data.map_link || '',
                });
                setImages(data.images || []);
                setHighlights(data.highlights || []);
                setFeatures(data.features || []);
            }
        } catch (error) {
            console.error('Error fetching property:', error);
            alert('Failed to fetch property details');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (
        index: number,
        value: string,
        setter: React.Dispatch<React.SetStateAction<string[]>>,
        array: string[]
    ) => {
        const newArray = [...array];
        newArray[index] = value;
        setter(newArray);
    };

    const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, array: string[]) => {
        setter([...array, '']);
    };

    const removeArrayItem = (index: number, setter: React.Dispatch<React.SetStateAction<string[]>>, array: string[]) => {
        const newArray = array.filter((_, i) => i !== index);
        setter(newArray);
    };

    const handleImageChange = (index: number, value: string) => {
        let cleanValue = value;
        // Check for BBCode [img]url[/img] inside the string
        const bbCodeMatch = value.match(/\[img\](.*?)\[\/img\]/);
        if (bbCodeMatch && bbCodeMatch[1]) {
            cleanValue = bbCodeMatch[1];
        }

        const newImages = [...images];
        newImages[index] = cleanValue;
        setImages(newImages);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const propertyData = {
            ...formData,
            images,
            highlights,
            features, // Assuming these match the database columns
        };

        try {
            if (isEdit) {
                const { error } = await supabase
                    .from('properties')
                    .update(propertyData)
                    .eq('id', id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('properties')
                    .insert([propertyData]);
                if (error) throw error;
            }
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error saving property:', error);
            alert('Failed to save property');
        } finally {
            setSubmitting(false);
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
            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex items-center">
                    <Link to="/admin/dashboard" className="mr-4 text-gray-500 hover:text-gray-700">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {isEdit ? 'Edit Property' : 'Add New Property'}
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            >
                                <option value="Residential Plot">Residential Plot</option>
                                <option value="Farmland">Farmland</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    required
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="e.g. 12.5 Lakhs"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Size</label>
                                <input
                                    type="text"
                                    name="size"
                                    required
                                    value={formData.size}
                                    onChange={handleChange}
                                    placeholder="e.g. 1200 Sq.ft"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            required
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Map Link & Site Plan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Map Link (Optional)</label>
                            <input
                                type="text"
                                name="map_link"
                                value={formData.map_link}
                                onChange={handleChange}
                                placeholder="https://maps..."
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Dynamic Arrays: Images */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">Images (URLs)</label>
                            <button
                                type="button"
                                onClick={() => addArrayItem(setImages, images)}
                                className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center"
                            >
                                <Plus className="w-4 h-4 mr-1" /> Add Image
                            </button>
                        </div>
                        <div className="space-y-2">
                            {images.map((img, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={img}
                                        onChange={(e) => handleImageChange(idx, e.target.value)}
                                        placeholder="Image URL"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(idx, setImages, images)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                            {images.length === 0 && <p className="text-sm text-gray-400 italic">No images added</p>}
                        </div>
                    </div>

                    {/* Dynamic Arrays: Highlights */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">Highlights</label>
                            <button
                                type="button"
                                onClick={() => addArrayItem(setHighlights, highlights)}
                                className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center"
                            >
                                <Plus className="w-4 h-4 mr-1" /> Add Highlight
                            </button>
                        </div>
                        <div className="space-y-2">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleArrayChange(idx, e.target.value, setHighlights, highlights)}
                                        placeholder="e.g. Near New Airport"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(idx, setHighlights, highlights)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Arrays: Features */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">Features (Tags)</label>
                            <button
                                type="button"
                                onClick={() => addArrayItem(setFeatures, features)}
                                className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center"
                            >
                                <Plus className="w-4 h-4 mr-1" /> Add Feature
                            </button>
                        </div>
                        <div className="space-y-2">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleArrayChange(idx, e.target.value, setFeatures, features)}
                                        placeholder="e.g. DTCP Approved"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(idx, setFeatures, features)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
                        >
                            {submitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                isEdit ? 'Update Property' : 'Create Property'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
