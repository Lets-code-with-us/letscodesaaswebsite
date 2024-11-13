export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  techStack: string[];
  features: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Portfolio Template',
    description: 'A stunning portfolio template with smooth animations, dark mode support, and responsive design. Perfect for developers and designers to showcase their work.',
    price: 49,
    rating: 4.8,
    category: 'portfolio',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Responsive design',
      'Dark mode support',
      'Project showcase section',
      'Blog integration',
      'Contact form with validation',
      'SEO optimized'
    ],
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    name: 'E-commerce Dashboard',
    description: 'Complete e-commerce admin dashboard with analytics, order management, and inventory tracking. Built with modern technologies for optimal performance.',
    price: 149,
    rating: 4.9,
    category: 'full-stack',
    techStack: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Real-time analytics',
      'Order management',
      'Inventory tracking',
      'Customer management',
      'Payment integration',
      'Reports generation'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    name: 'UI Component Library',
    description: 'A comprehensive collection of beautiful UI components built with React and Tailwind CSS. Includes form elements, navigation, cards, and more.',
    price: 79,
    rating: 4.7,
    category: 'components',
    techStack: ['React', 'Tailwind CSS'],
    features: [
      '50+ components',
      'Fully customizable',
      'Accessibility support',
      'Documentation',
      'TypeScript support',
      'Regular updates'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    name: 'SaaS Landing Page',
    description: 'Modern and conversion-optimized landing page template for SaaS products. Includes pricing tables, feature sections, and testimonials.',
    price: 59,
    rating: 4.6,
    category: 'landing-page',
    techStack: ['React', 'Tailwind CSS'],
    features: [
      'Conversion optimized',
      'A/B testing ready',
      'SEO friendly',
      'Fast loading',
      'Mobile responsive',
      'Easy customization'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '5',
    name: 'Creative Portfolio Theme',
    description: 'A unique portfolio theme for creative professionals. Features stunning animations, image galleries, and custom cursor effects.',
    price: 69,
    rating: 4.8,
    category: 'portfolio',
    techStack: ['React', 'Three.js', 'GSAP'],
    features: [
      '3D animations',
      'Custom cursor effects',
      'Image galleries',
      'Smooth scrolling',
      'Project case studies',
      'Performance optimized'
    ],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '6',
    name: 'Product Launch Landing',
    description: 'High-converting landing page template designed specifically for product launches. Includes countdown timer, pricing tables, and testimonials.',
    price: 89,
    rating: 4.9,
    category: 'landing-page',
    techStack: ['React', 'Tailwind CSS', 'Next.js'],
    features: [
      'Countdown timer',
      'Email capture forms',
      'Social proof sections',
      'Pricing comparison',
      'FAQ accordion',
      'Mobile optimized'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
  }
];