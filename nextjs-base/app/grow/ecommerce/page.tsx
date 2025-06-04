import Link from "next/link";

export default function EcommercePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Grow Together</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Personalized online shopping for cannabis</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Everything you need to simplify your cannabis retail operations: enhanced SEO, customizable storefronts, and built in order management with flexible discounts and taxes. Effortlessly boost your sales and make your customers feel like a VIP.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Get a demo</button>
      </Link>

      <h2 className="text-2xl font-bold mt-8 mb-4">Ecommerce, fully integrated and built specifically for dispensaries.</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Social logins for faster checkouts</h3>
          <p className="text-gray-700 dark:text-gray-300">Securely streamline account creation to enable more personalized shopping and to speed up checkout by pre filling customer information. Up to 60% of customers are choosing social logins and enjoying a better shopping experience.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Personalized recommendations</h3>
          <p className="text-gray-700 dark:text-gray-300">Our machine learning personalization engine uses consumer data like browsing behavior and purchase history to provide tailored 1:1 recommendations, optimizing the cannabis shopping experience from browsing to reordering.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Streamlined discounts online and in-store</h3>
          <p className="text-gray-700 dark:text-gray-300">Save time and reduce operational overhead by creating and managing your discounts all in one place directly from Dutchie POS.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Drive customers back with back in stock notifications</h3>
          <p className="text-gray-700 dark:text-gray-300">Let customers know when their favorite items are back in stock, automatically. More than 30,000 retailers are taking advantage of this tool, with 50% open rates bringing customers back to purchase.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Quick online storefront</h2>
      <h3 className="text-xl font-semibold mb-2">Embedded menu</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">Our embedded menu is the perfect solution for stores looking to get up and running fast. Our menu seamlessly blends in with your website and can be launched with just one line of code. Plus, Dutchie's embedded menu includes SEO benefits to help get your menu in front of new, high-intent customers when they search for your products.</p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">As with all Ecommerce solutions, you'll have access to all of the powerful back-end functionality Dutchie offers.</p>

      <h3 className="text-xl font-semibold mb-2">SEO-friendly storefront</h3>
      <h4 className="text-lg font-medium mb-2">Direct Domain menu</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-6">For stores looking to use their online menu to boost their SEO, Dutchie offers sub-path menus, which live on your domain and are indexable by search engines and include all the tools you need to stand-out like sitemaps and automatic redirects.</p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">This option requires minimal technical effort to get up and running and can be a great option for stores focused on marketing.</p>

      <h3 className="text-xl font-semibold mt-8 mb-2">Order Management</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Content</li>
        <li>Analytics</li>
        <li>Discounts</li>
        <li>Menu Configurations</li>
        <li>Features</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Discounts</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">From simple sales to complex BOGO's, our highly advanced discounts engine was designed for maximum flexibility and to remain in lock-step with your in-store specials.</p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">An immersive menu experience comes packed with a dedicated "Specials" page, badges for items on sale, and customizable specials cards to help further drive sales.</p>
    </div>
  );
} 