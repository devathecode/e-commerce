"use client";
import { useState, useEffect, useRef } from 'react';

interface City {
    name: string;
    state: string;
}

const CityStateAutocomplete = () => {
    // Define the list of cities and states
    const [cities, setCities] = useState<City[]>([
        { name: 'New York', state: 'NY' },
        { name: 'Los Angeles', state: 'CA' },
        { name: 'Chicago', state: 'IL' },
        { name: 'Houston', state: 'TX' },
        { name: 'Phoenix', state: 'AZ' },
    ]);

    const [filteredCities, setFilteredCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle user input
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const filteredCities = cities.filter((city) =>
            city.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredCities(filteredCities);
        setSelectedCity(null);
    };

    // Handle user selection
    const handleSelection = (city: City) => {
        setSelectedCity(city);
        setFilteredCities([]);
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            const currentCityIndex = filteredCities.findIndex(
                (city) => city.name === selectedCity?.name
            );
            const nextCityIndex =
                currentCityIndex +
                (event.key === 'ArrowUp' ? -1 : 1) +
                filteredCities.length;
            const nextCity = filteredCities[nextCityIndex % filteredCities.length];
            setSelectedCity(nextCity);
        } else if (event.key === 'Enter' && selectedCity) {
            handleSelection(selectedCity);
            inputRef.current?.blur();
        }
    };

    // Focus the input field on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Render the autocomplete component
    return (
        <div className="relative">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City:
            </label>
            <input
                type="text"
                name="city"
                id="city"
                autoComplete="off"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedCity?.name ?? ''}
                onChange={handleInput}
                ref={inputRef}
            />
            <ul
                className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
                onKeyDown={handleKeyDown}
                tabIndex={-1}
            >
                {filteredCities.map((city) => (
                    <li
                        key={city.name}
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                            city.name === selectedCity?.name ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => handleSelection(city)}
                    >
                        {city.name}, {city.state}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityStateAutocomplete;
