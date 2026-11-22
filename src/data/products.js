const categoryInfo = [
  ['fungicides', 'Fungicides', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2015/06/2141075001product_group_1.jpg'],
  ['insecticides', 'Insecticides', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2015/06/660243579product_group_2.jpg'],
  ['herbicides', 'Herbicides', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png'],
  ['weedicides', 'Weedicides', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2015/06/106903874product_group_6.jpg'],
  ['pgr', 'Plant Growth Regulators', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/slider-1-1000x500.jpg'],
  ['fertilizers', 'Fertilizers', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg'],
  ['organic-manure', 'Organic Manure', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/SRI-hybrid-rice-field.jpg'],
  ['pesticides', 'Pesticides', 'Part of the agro products range offered by Hyderabad Crop Science.', 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/CommercialFarming-1.jpg'],
]

export const products = categoryInfo.map(([category, name, description, image], index) => ({
  id: index + 1, name, category, crop: 'Agricultural use', description, image, badge: null,
}))

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'insecticides', label: 'Insecticides' },
  { id: 'fungicides', label: 'Fungicides' },
  { id: 'herbicides', label: 'Herbicides' },
  { id: 'weedicides', label: 'Weedicides' },
  { id: 'pgr', label: 'Plant Growth Regulators' },
  { id: 'fertilizers', label: 'Fertilizers' },
  { id: 'organic-manure', label: 'Organic Manure' },
  { id: 'pesticides', label: 'Pesticides' },
];

export const stats = [
  { value: '2014', label: 'Serving Indian farmers since' },
  { value: 'ISO 9001:2015', label: 'Certified company' },
  { value: '08', label: 'Agro-product categories' },
  { value: 'Mon–Sat', label: 'Customer care availability' },
];
