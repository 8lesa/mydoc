import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { departments } from '../data/departments';
import DoctorCard from '../components/ui/DoctorCard';
import SearchBar from '../components/ui/SearchBar';
import { Doctor } from '../types';
import { Filter, SortAsc, SortDesc } from 'lucide-react';

const DoctorsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('Të gjitha');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  useEffect(() => {
    const querySearch = searchParams.get('search') || '';
    const queryDepartment = searchParams.get('department') || '';
    
    setSearchQuery(querySearch);
    if (queryDepartment && departments.includes(queryDepartment)) {
      setSelectedDepartment(queryDepartment);
    }
    
    filterAndSortDoctors(querySearch, queryDepartment, sortBy, sortOrder);
  }, [searchParams]);

  const filterAndSortDoctors = (query: string, department: string, sort: string, order: 'asc' | 'desc') => {
    let filtered = [...doctors];
    
    // Apply search filter
    if (query) {
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(query.toLowerCase()) || 
        doctor.specialty.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Apply department filter
    if (department && department !== 'Të gjitha') {
      filtered = filtered.filter(doctor => doctor.department === department);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sort === 'rating') {
        comparison = a.averageRating - b.averageRating;
      } else if (sort === 'reviews') {
        comparison = a.totalReviews - b.totalReviews;
      } else if (sort === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sort === 'experience') {
        comparison = a.experience - b.experience;
      }
      
      return order === 'desc' ? -comparison : comparison;
    });
    
    setFilteredDoctors(filtered);
  };

  const handleSearch = (query: string, department: string) => {
    setSearchQuery(query);
    if (department) {
      setSelectedDepartment(department);
    }
    
    const params: { search?: string; department?: string } = {};
    if (query) params.search = query;
    if (department) params.department = department;
    
    setSearchParams(params);
    filterAndSortDoctors(query, department, sortBy, sortOrder);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    filterAndSortDoctors(searchQuery, selectedDepartment, e.target.value, sortOrder);
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSortOrder(newOrder);
    filterAndSortDoctors(searchQuery, selectedDepartment, sortBy, newOrder);
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterVisible(!isMobileFilterVisible);
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    
    const params: { search?: string; department?: string } = {};
    if (searchQuery) params.search = searchQuery;
    if (department !== 'Të gjitha') params.department = department;
    
    setSearchParams(params);
    filterAndSortDoctors(searchQuery, department, sortBy, sortOrder);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Mjekët në QKUK</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Gjeni dhe vlerësoni mjekët në Qendrën Klinike Universitare të Kosovës. Kërkoni sipas emrit, specialitetit ose departamentit.
          </p>
        </div>
        
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-800 mr-2">
              {filteredDoctors.length} Mjekë
            </h2>
            {searchQuery && (
              <span className="text-gray-600">
                për kërkimin "{searchQuery}"
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className="sm:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              onClick={toggleMobileFilter}
            >
              <Filter size={16} className="mr-2" />
              Filtro
            </button>
            
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center">
                <label htmlFor="departmentFilter" className="mr-2 text-gray-700">Departamenti:</label>
                <select
                  id="departmentFilter"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="sortBy" className="mr-2 text-gray-700">Rendit sipas:</label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="rating">Vlerësimit</option>
                  <option value="reviews">Numrit të vlerësimeve</option>
                  <option value="name">Emrit</option>
                  <option value="experience">Përvojës</option>
                </select>
              </div>
              
              <button 
                onClick={toggleSortOrder}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                title={sortOrder === 'desc' ? 'Rendit në mënyrë rritëse' : 'Rendit në mënyrë zbritëse'}
              >
                {sortOrder === 'desc' ? <SortDesc size={18} /> : <SortAsc size={18} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile filters panel */}
        {isMobileFilterVisible && (
          <div className="sm:hidden mb-6 p-4 bg-gray-50 rounded-md">
            <div className="mb-4">
              <label htmlFor="mobileDepartmentFilter" className="block mb-2 text-gray-700">Departamenti:</label>
              <select
                id="mobileDepartmentFilter"
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="mobileSortBy" className="block mb-2 text-gray-700">Rendit sipas:</label>
              <select
                id="mobileSortBy"
                value={sortBy}
                onChange={handleSortChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Vlerësimit</option>
                <option value="reviews">Numrit të vlerësimeve</option>
                <option value="name">Emrit</option>
                <option value="experience">Përvojës</option>
              </select>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={toggleSortOrder}
                className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white"
              >
                {sortOrder === 'desc' ? (
                  <>
                    <SortDesc size={16} className="mr-1" /> Zbritëse
                  </>
                ) : (
                  <>
                    <SortAsc size={16} className="mr-1" /> Rritëse
                  </>
                )}
              </button>
              
              <button 
                onClick={toggleMobileFilter}
                className="px-3 py-2 bg-blue-600 text-white rounded-md"
              >
                Apliko
              </button>
            </div>
          </div>
        )}
        
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Nuk u gjet asnjë mjek që përputhet me kriteret e kërkimit.</p>
            <p className="text-gray-500">Ju lutemi provoni një kërkim tjetër ose ndryshoni filtrat.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;