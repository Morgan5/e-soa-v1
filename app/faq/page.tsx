import { FAQ } from '@/components/sections/FAQ';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Foire Aux Questions
          </h1>
          <p className="text-xl text-gray-600">
            Trouvez rapidement des réponses à vos questions sur OrientMada
          </p>
        </div>
        <FAQ />
      </div>
    </div>
  );
}