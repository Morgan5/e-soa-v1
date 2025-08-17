import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Prêt à découvrir votre futur métier ?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Rejoignez des milliers d'étudiants qui ont déjà trouvé leur voie grâce à OrientMada. 
          Commencez votre parcours d'orientation dès maintenant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Créer mon compte gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/tests">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              Découvrir les tests
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}