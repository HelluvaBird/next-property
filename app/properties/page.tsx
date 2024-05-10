import PropertyCard from '@/components/PropertyCard';
import { getAllProperties } from '../action';

export default async function PropertiesPage() {
  const properties = await getAllProperties();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.length > 0 ? (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <p>No properties found</p>
      )}
    </div>
  );
}
