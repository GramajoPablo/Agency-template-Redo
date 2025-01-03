// components/PropertyCard.js

import Image from 'next/image';

const PropertyCard = ({ property }) => {
  return (
    <div className="text-gray-900">
      <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
        <div className="bg-white border rounded-lg overflow-hidden">
          <Image 
            src={property.imageURL} 
            alt={property.imageAlt} 
            width={600} 
            height={400} 
            className="w-full h-auto"
          />
          <div className="p-6">
            <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
              {property.beds} beds &bull; {property.baths} baths
            </div>
            <div className="font-semibold text-lg leading-tight truncate">
              {property.title}
            </div>
            <div className="mt-1">
              {property.formattedPrice}
              <span className="text-gray-600 text-sm">/ wk</span>
            </div>
            <div className="mt-2 flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 fill-current ${i < property.rating ? 'text-teal-500' : 'text-gray-500'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600 text-sm">{property.reviewCount} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;