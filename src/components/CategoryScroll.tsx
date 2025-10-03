import React from 'react';
import allIcon from '@/assets/categories/all.jpg';
import electricsIcon from '@/assets/categories/electrics.jpg';
import menIcon from '@/assets/categories/men.jpg';
import womenIcon from '@/assets/categories/women.jpg';
import childrenIcon from '@/assets/categories/children.jpg';
import fashionIcon from '@/assets/categories/fashion.jpg';
import beautyIcon from '@/assets/categories/beauty.jpg';
import booksIcon from '@/assets/categories/books.jpg';
import toysIcon from '@/assets/categories/toys.jpg';
import sportsIcon from '@/assets/categories/sports.jpg';
import homeKitchenIcon from '@/assets/categories/home-kitchen.jpg';
import groceriesIcon from '@/assets/categories/groceries.jpg';
import healthIcon from '@/assets/categories/health.jpg';
import automotiveIcon from '@/assets/categories/automotive.jpg';
import jewelryIcon from '@/assets/categories/jewelry.jpg';
import shoesIcon from '@/assets/categories/shoes.jpg';
import bagsIcon from '@/assets/categories/bags.jpg';
import petsIcon from '@/assets/categories/pets.jpg';
import babyIcon from '@/assets/categories/baby.jpg';
import officeIcon from '@/assets/categories/office.jpg';
import medicineIcon from '@/assets/categories/medicine.jpg';
import codeIcon from '@/assets/categories/code.jpg';
import digitalIcon from '@/assets/categories/digital.jpg';
import furnitureIcon from '@/assets/categories/furniture.jpg';
import gardeningIcon from '@/assets/categories/gardening.jpg';
import musicIcon from '@/assets/categories/music.jpg';
import cameraIcon from '@/assets/categories/camera.jpg';
import toolsIcon from '@/assets/categories/tools.jpg';

interface CategoryScrollProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, string> = {
  'All': allIcon,
  'Electronics': electricsIcon,
  'Men': menIcon,
  'Women': womenIcon,
  'Kids': childrenIcon,
  'Fashion': fashionIcon,
  'Beauty': beautyIcon,
  'Books': booksIcon,
  'Toys': toysIcon,
  'Sports': sportsIcon,
  'Home': homeKitchenIcon,
  'Groceries': groceriesIcon,
  'Health': healthIcon,
  'Auto': automotiveIcon,
  'Jewelry': jewelryIcon,
  'Shoes': shoesIcon,
  'Bags': bagsIcon,
  'Pets': petsIcon,
  'Baby': babyIcon,
  'Office': officeIcon,
  'Medicine': medicineIcon,
  'Code': codeIcon,
  'Digital': digitalIcon,
  'Furniture': furnitureIcon,
  'Garden': gardeningIcon,
  'Music': musicIcon,
  'Camera': cameraIcon,
  'Tools': toolsIcon,
};

export const CategoryScroll: React.FC<CategoryScrollProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  // Split categories into two rows
  const midpoint = Math.ceil(categories.length / 2);
  const firstRow = categories.slice(0, midpoint);
  const secondRow = categories.slice(midpoint);

  const CategoryButton = ({ category }: { category: string }) => (
    <button
      onClick={() => onCategoryChange(category)}
      className={`flex flex-col items-center gap-1.5 min-w-[70px] p-2 rounded-xl transition-all ${
        selectedCategory === category
          ? 'bg-primary/10 shadow-md scale-105'
          : 'hover:bg-muted'
      }`}
    >
      <div 
        className={`w-12 h-12 rounded-full overflow-hidden shadow-sm transition-all ${
          selectedCategory === category 
            ? 'ring-2 ring-primary ring-offset-2' 
            : ''
        }`}
      >
        <img
          src={categoryIcons[category]}
          alt={category}
          className="w-full h-full object-cover"
        />
      </div>
      <span 
        className={`text-[10px] font-medium text-center leading-tight ${
          selectedCategory === category
            ? 'text-primary font-semibold'
            : 'text-foreground'
        }`}
      >
        {category}
      </span>
    </button>
  );

  return (
    <div className="py-2 bg-background">
      <div className="space-y-2">
        {/* First Row */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 md:px-6 min-w-max">
            {firstRow.map((category) => (
              <CategoryButton key={category} category={category} />
            ))}
          </div>
        </div>
        
        {/* Second Row */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 md:px-6 min-w-max">
            {secondRow.map((category) => (
              <CategoryButton key={category} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
