import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Brain, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';

const tests = [
  {
    id: 'questionnaire',
    title: 'Test d\'Orientation Personnel',
    description: 'Un questionnaire approfondi pour découvrir vos centres d\'intérêt, vos valeurs et vos aspirations professionnelles.',
    icon: Target,
    duration: '15-20 minutes',
    questions: 45,
    participants: '12,847',
    accuracy: '94%',
    features: [
      'Analyse des centres d\'intérêt',
      'Évaluation des valeurs personnelles',
      'Suggestions de métiers personnalisées',
      'Rapport détaillé PDF'
    ],
    color: 'bg-blue-600',
    href: '/tests/questionnaire'
  },
  {
    id: 'holland',
    title: 'Test Holland (RIASEC)',
    description: 'Test scientifique basé sur la théorie des 6 types de personnalité professionnelle de John Holland.',
    icon: Brain,
    duration: '10-15 minutes',
    questions: 30,
    participants: '8,952',
    accuracy: '96%',
    features: [
      'Méthode scientifique reconnue',
      'Profil RIASEC complet',
      'Graphique radar détaillé',
      'Correspondances métiers'
    ],
    color: 'bg-green-600',
    href: '/tests/holland'
  }
];

export function TestsOverview() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tests d'Orientation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez votre profil professionnel grâce à nos tests scientifiques et personnalisés. 
            Chaque test vous apportera des éclairages précieux sur vos aptitudes et vos affinités.
          </p>
        </div>

        {/* Tests Cards */}
        <div className="space-y-8">
          {tests.map((test) => {
            const Icon = test.icon;
            return (
              <Card key={test.id} className="overflow-hidden">
                <div className={`h-2 ${test.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${test.color} bg-opacity-10`}>
                        <Icon className={`h-6 w-6 text-white`} style={{ color: test.color.replace('bg-', '#') }} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{test.title}</CardTitle>
                        <p className="text-gray-600 mt-2">{test.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      Gratuit
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques du test</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Durée : {test.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{test.questions} questions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{test.participants} participants</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Précision : {test.accuracy}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ce que vous obtiendrez</h4>
                      <ul className="space-y-2">
                        {test.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Link href={test.href}>
                      <Button size="lg" className="w-full md:w-auto">
                        Commencer le test
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            Pourquoi passer plusieurs tests ?
          </h3>
          <p className="text-blue-800 text-sm">
            Chaque test apporte un éclairage différent sur votre profil. Le Test d'Orientation Personnel 
            explore vos motivations personnelles, tandis que le Test Holland analyse votre personnalité 
            professionnelle selon une méthode scientifique reconnue. Ensemble, ils offrent une vision 
            complète et nuancée de vos possibilités d'orientation.
          </p>
        </div>
      </div>
    </div>
  );
}