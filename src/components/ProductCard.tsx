import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isExpanded: boolean;
  onExpand: () => void;
}

const RAZORPAY_KEY = import.meta.env.RAZORPAY_KEY

if(!RAZORPAY_KEY){
  throw new Error("API KEY NOT FOUND")
}

export default function ProductCard({ product, isExpanded, onExpand }: ProductCardProps) {
  let options:any = {
    "key": RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_PRQro3E57qbVie", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response:any){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
const pay = (e: any) => {
  e.preventDefault(); // Prevent default form submission

  const rz = new window.Razorpay(options);

  // Attach the payment success handler
  rz.on('payment.success', function (response: any) {
    console.log("Payment successful!");
    console.log("Payment ID:", response.razorpay_payment_id);
    console.log("Order ID:", response.razorpay_order_id);
    console.log("Signature:", response.razorpay_signature);

    // You can also make a POST request to your backend to save these details
    fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response)
    })
      .then(res => res.json())
      .then(data => console.log("Payment logged to server:", data))
      .catch(err => console.error("Error logging payment:", err));
  });

  rz.on('payment.error', function (response: any) {
    console.error("Payment failed!");
    console.error("Error Code:", response.error.code);
    console.error("Error Description:", response.error.description);
    console.error("Error Source:", response.error.source);
    console.error("Error Metadata:", response.error.metadata);
  });

  rz.open();
};

  return (
    <div 
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden
        ${isExpanded ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
          ${product.price}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {isExpanded ? product.description : `${product.description.slice(0, 100)}...`}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.techStack.map(tech => (
            <span 
              key={tech}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="border-t pt-4 mt-4">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={onExpand}
            className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'View Details'}
          </button>
          <button onClick={pay} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}