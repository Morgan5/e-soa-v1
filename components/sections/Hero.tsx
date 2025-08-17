import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Trouvez votre 
                <span className="text-emerald-400"> voie professionnelle</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Découvrez les métiers qui vous correspondent grâce à nos tests d'orientation personnalisés 
                et explorez les formations disponibles à Madagascar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tests">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Commencer le test
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/explorer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Explorer les métiers
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-500/30">
              <div className="text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Précision des tests</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-blue-200">Jeunes orientés</div>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Métiers référencés</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-blue-100">Tests d'orientation personnalisés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-blue-100">Base de données complète des métiers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-blue-100">Formations disponibles à Madagascar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-blue-100">Recommandations sur mesure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}