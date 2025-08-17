import Link from 'next/link';
import { Compass, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">OrientMada</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Accompagnons les jeunes malgaches dans leur orientation académique et professionnelle 
              pour construire un avenir prometteur.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@orientmada.mg</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+261 34 XX XX XX XX</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/explorer" className="text-gray-300 hover:text-white transition-colors">Explorer</Link></li>
              <li><Link href="/tests" className="text-gray-300 hover:text-white transition-colors">Tests d'Orientation</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/aide" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</Link></li>
              <li><Link href="/conditions" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="/confidentialite" className="text-gray-300 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link href="/accessibilite" className="text-gray-300 hover:text-white transition-colors">Accessibilité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 OrientMada. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}