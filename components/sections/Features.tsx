import { Card, CardContent } from '@/components/ui/card';
import { Brain, Search, TrendingUp, Users, FileText, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Tests d\'Orientation Scientifiques',
    description: 'Découvrez vos aptitudes et centres d\'intérêt grâce à nos tests basés sur la méthode RIASEC et nos questionnaires personnalisés.'
  },
  {
    icon: Search,
    title: 'Exploration Interactive',
    description: 'Parcourez notre base de données de métiers et formations avec des filtres avancés par secteur, région et niveau d\'études.'
  },
  {
    icon: TrendingUp,
    title: 'Tendances du Marché',
    description: 'Accédez aux données sur les perspectives d\'emploi et les salaires moyens pour chaque métier à Madagascar.'
  },
  {
    icon: Users,
    title: 'Communauté Active',
    description: 'Rejoignez une communauté de jeunes partageant les mêmes questions sur leur avenir professionnel.'
  },
  {
    icon: FileText,
    title: 'Fiches Détaillées',
    description: 'Consultez des fiches complètes sur les métiers avec missions, compétences requises et formations nécessaires.'
  },
  {
    icon: Smartphone,
    title: 'Accès Mobile',
    description: 'Utilisez la plateforme partout, même hors-ligne, grâce à notre interface adaptée mobile et nos fonctionnalités offline.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Une approche complète de l'orientation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre plateforme combine science, technologie et connaissance locale pour vous offrir 
            une orientation personnalisée et adaptée au contexte malgache.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}