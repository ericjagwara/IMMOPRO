export interface HousePlan {
  id: string
  planCode: string
  name: string
  tagline: string
  beds: number
  baths: number
  area: number
  category: string
  price: string
  priceNum: number
  image: string
  description: string
  features: string[]
  floorPlanDescription: string
  rooms: { name: string; size: string }[]
}

export const housePlans: HousePlan[] = [
  {
    id: 'office-building-39801',
    planCode: 'ID 39801',
    name: 'Office Building',
    tagline: 'Modern commercial workspace for growing businesses',
    beds: 0,
    baths: 4,
    area: 450,
    category: 'Commercial',
    price: '850M',
    priceNum: 850,
    image: '/images/plan-summit.jpg',
    description:
      'A purpose-built office building designed for modern enterprises. This plan features open-plan workspaces, private offices, meeting rooms, and reception areas — all optimized for productivity and professional presence. Ideal for businesses looking to establish a permanent headquarters in prime locations.',
    features: [
      'Open-plan workspace areas',
      'Private executive offices',
      'Conference & meeting rooms',
      'Reception & waiting area',
      'Kitchenette & break room',
      'Accessible restrooms',
      'Parking provision',
      'Security room',
    ],
    floorPlanDescription:
      'Two-level layout with reception on ground floor, open workspaces on upper floor, and service areas at the rear.',
    rooms: [
      { name: 'Reception', size: '25m²' },
      { name: 'Open Workspace', size: '120m²' },
      { name: 'Executive Office', size: '20m²' },
      { name: 'Meeting Room', size: '30m²' },
      { name: 'Conference Room', size: '45m²' },
      { name: 'Break Room', size: '20m²' },
      { name: 'Storage', size: '15m²' },
      { name: 'Restrooms', size: '20m²' },
    ],
  },
  {
    id: '17-flats-apartment-99901',
    planCode: 'ID 99901',
    name: '17 Flats Apartment Block',
    tagline: 'Multi-unit residential investment property',
    beds: 34,
    baths: 17,
    area: 1200,
    category: 'Multi-Unit',
    price: '2.5B',
    priceNum: 2500,
    image: '/images/project-aurora.jpg',
    description:
      'A high-yield apartment block featuring 17 self-contained flats, perfect for rental income or sale. Each unit includes a living area, bedroom, kitchenette, and private bath. This design maximizes space efficiency while providing comfortable living for tenants. A proven investment model for property developers.',
    features: [
      '17 self-contained studio flats',
      'Individual metering per unit',
      'Shared rooftop terrace',
      'Ground-floor parking',
      'Security office & gated access',
      'Central waste management',
      'Backup water storage',
      'Fire safety compliance',
    ],
    floorPlanDescription:
      'Four-story block with 4-5 units per floor, central staircase, and parking at ground level.',
    rooms: [
      { name: 'Studio Flat (x17)', size: '45m² each' },
      { name: 'Rooftop Terrace', size: '80m²' },
      { name: 'Parking Area', size: '200m²' },
      { name: 'Security Office', size: '10m²' },
      { name: 'Storage', size: '25m²' },
    ],
  },
  {
    id: '3-bedroom-residential-45201',
    planCode: 'ID 45201',
    name: '3 Bedroom Residential',
    tagline: 'The perfect family starter home',
    beds: 3,
    baths: 2,
    area: 180,
    category: 'Single-Storey',
    price: '150M',
    priceNum: 150,
    image: '/images/plan-haven.jpg',
    description:
      'A thoughtfully designed 3-bedroom family home that balances comfort, functionality, and affordability. The open-plan living area connects seamlessly to the dining and kitchen spaces, creating a warm gathering place for family moments. The master bedroom features an en-suite bathroom for added privacy.',
    features: [
      'Master bedroom with en-suite',
      'Two additional bedrooms',
      'Open-plan living & dining',
      'Modern fitted kitchen',
      'Covered front porch',
      'Laundry area',
      'Private parking space',
      'Garden space',
    ],
    floorPlanDescription:
      'Single-storey layout with bedrooms on one wing and living spaces on the other for privacy.',
    rooms: [
      { name: 'Master Bedroom', size: '20m²' },
      { name: 'Bedroom 2', size: '14m²' },
      { name: 'Bedroom 3', size: '12m²' },
      { name: 'Living Room', size: '30m²' },
      { name: 'Dining Area', size: '15m²' },
      { name: 'Kitchen', size: '12m²' },
      { name: 'Laundry', size: '5m²' },
      { name: 'Porch', size: '10m²' },
    ],
  },
  {
    id: '4-bedroom-villa-55201',
    planCode: 'ID 55201',
    name: '4 Bedroom Villa',
    tagline: 'Spacious family living with room to grow',
    beds: 4,
    baths: 3,
    area: 280,
    category: 'Double-Storey',
    price: '280M',
    priceNum: 280,
    image: '/images/plan-legacy.jpg',
    description:
      'An elegant two-storey villa designed for families who value space and sophistication. Four generously sized bedrooms, including a luxurious master suite with walk-in closet and private balcony. The ground floor features an expansive living area perfect for entertaining, plus a dedicated home office.',
    features: [
      'Master suite with walk-in closet',
      'Three additional bedrooms',
      'Home office / study',
      'Expansive living & dining areas',
      'Modern kitchen with pantry',
      'Guest washroom',
      'Double garage',
      'Private balcony',
    ],
    floorPlanDescription:
      'Double-storey with all bedrooms and study upstairs, living and entertainment spaces downstairs.',
    rooms: [
      { name: 'Master Suite', size: '35m²' },
      { name: 'Bedroom 2', size: '16m²' },
      { name: 'Bedroom 3', size: '16m²' },
      { name: 'Bedroom 4', size: '14m²' },
      { name: 'Home Office', size: '12m²' },
      { name: 'Living Room', size: '40m²' },
      { name: 'Dining Area', size: '18m²' },
      { name: 'Kitchen', size: '16m²' },
    ],
  },
  {
    id: '5-bedroom-mansion-65201',
    planCode: 'ID 65201',
    name: '5 Bedroom Mansion',
    tagline: 'Ultimate luxury for discerning homeowners',
    beds: 5,
    baths: 4,
    area: 400,
    category: 'Villa',
    price: '450M',
    priceNum: 450,
    image: '/images/plan-summit.jpg',
    description:
      'The crown jewel of our collection — a 5-bedroom mansion that redefines luxury living. Grand entrance hall, double-volume living room, gourmet kitchen, home cinema, and a private pool area. Each bedroom is a retreat with en-suite facilities. Designed for those who accept nothing but the finest.',
    features: [
      'Grand entrance hall',
      'Double-volume living room',
      'Gourmet kitchen with island',
      'Home cinema room',
      'Master suite with jacuzzi bath',
      'Four additional en-suite bedrooms',
      'Private pool & terrace',
      'Domestic quarters',
    ],
    floorPlanDescription:
      'Sprawling single-level mansion with entertainment wing, private bedroom wing, and pool area.',
    rooms: [
      { name: 'Master Suite', size: '50m²' },
      { name: 'Bedroom 2', size: '22m²' },
      { name: 'Bedroom 3', size: '22m²' },
      { name: 'Bedroom 4', size: '20m²' },
      { name: 'Bedroom 5', size: '18m²' },
      { name: 'Living Room', size: '55m²' },
      { name: 'Home Cinema', size: '25m²' },
      { name: 'Kitchen', size: '30m²' },
    ],
  },
  {
    id: '2-bedroom-apartment-25201',
    planCode: 'ID 25201',
    name: '2 Bedroom Apartment',
    tagline: 'Smart urban living for modern professionals',
    beds: 2,
    baths: 1,
    area: 95,
    category: 'Apartment',
    price: '95M',
    priceNum: 95,
    image: '/images/plan-nest.jpg',
    description:
      'A compact yet stylish 2-bedroom apartment designed for urban professionals and young couples. The efficient layout maximizes every square meter without compromising on comfort. Features a modern kitchen, cozy living area, and two well-proportioned bedrooms — all within an easy-to-maintain footprint.',
    features: [
      'Two comfortable bedrooms',
      'Open living & dining area',
      'Compact modern kitchen',
      'Shared bathroom',
      'Built-in closet space',
      'Balcony option',
      'Intercom-ready',
      'Elevator access design',
    ],
    floorPlanDescription:
      'Efficient layout with living area at center, bedrooms on opposite sides for privacy.',
    rooms: [
      { name: 'Master Bedroom', size: '16m²' },
      { name: 'Bedroom 2', size: '12m²' },
      { name: 'Living Room', size: '25m²' },
      { name: 'Kitchen', size: '10m²' },
      { name: 'Bathroom', size: '6m²' },
      { name: 'Balcony', size: '8m²' },
    ],
  },
  {
    id: 'townhouse-complex-75201',
    planCode: 'ID 75201',
    name: 'Townhouse Complex',
    tagline: 'Community living with private comfort',
    beds: 3,
    baths: 2,
    area: 150,
    category: 'Townhouse',
    price: '180M',
    priceNum: 180,
    image: '/images/plan-urban.jpg',
    description:
      'A modern townhouse design optimized for narrow plots without sacrificing style or comfort. Clean contemporary lines, three levels of living space, and a small private courtyard. Perfect for gated community developments or individual builds in urban areas.',
    features: [
      'Three levels of living space',
      'Three bedrooms',
      'Open-plan ground floor',
      'Private courtyard',
      'Rooftop terrace option',
      'Compact footprint',
      'Modern facade design',
      'Community-friendly layout',
    ],
    floorPlanDescription:
      'Three-storey townhouse with living on ground floor, bedrooms on upper floors, and terrace on top.',
    rooms: [
      { name: 'Master Bedroom', size: '18m²' },
      { name: 'Bedroom 2', size: '14m²' },
      { name: 'Bedroom 3', size: '12m²' },
      { name: 'Living Room', size: '28m²' },
      { name: 'Kitchen', size: '12m²' },
      { name: 'Courtyard', size: '15m²' },
      { name: 'Terrace', size: '20m²' },
    ],
  },
  {
    id: 'studio-apartment-15201',
    planCode: 'ID 15201',
    name: 'Studio Apartment',
    tagline: 'Effortless living for the modern professional',
    beds: 1,
    baths: 1,
    area: 55,
    category: 'Studio',
    price: '65M',
    priceNum: 65,
    image: '/images/plan-studio.jpg',
    description:
      'A smart studio apartment that proves great things come in small packages. The open-plan design seamlessly blends sleeping, living, and dining areas, while the clever use of built-in storage keeps everything organized. Perfect for students, young professionals, or as a rental investment unit.',
    features: [
      'Open-plan living & sleeping area',
      'Compact kitchenette',
      'Private bathroom',
      'Built-in storage solutions',
      'Work nook',
      'Large window for natural light',
      'Space-saving design',
      'Low maintenance',
    ],
    floorPlanDescription:
      'Single open space with defined zones for sleeping, living, cooking, and bathing.',
    rooms: [
      { name: 'Living/Sleeping', size: '28m²' },
      { name: 'Kitchenette', size: '8m²' },
      { name: 'Bathroom', size: '5m²' },
      { name: 'Entry/Storage', size: '6m²' },
    ],
  },
]

export function getPlanById(id: string): HousePlan | undefined {
  return housePlans.find((plan) => plan.id === id)
}
