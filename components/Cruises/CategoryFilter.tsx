import { categories, CruiseCategory } from './cruisesData'

interface CategoryFilterProps {
  selectedCategory: CruiseCategory
  onCategoryChange: (category: CruiseCategory) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
            selectedCategory === cat.id
              ? 'bg-[#12103d] text-white shadow-lg'
              : 'bg-white text-[#44618b] border border-[#12103d]/10 hover:border-[#d19457] hover:text-[#d19457]'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}
