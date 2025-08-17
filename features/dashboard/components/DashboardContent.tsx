'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Clock, 
  Award,
  ArrowRight,
  Brain,
  Search
} from 'lucide-react';
import Link from 'next/link';

// Mock data for demonstration
const quickActions = [
  {
    title: 'Test d\'Orientation Personnel',
    description: 'Découvrez vos centres d\'intérêt et aptitudes',
    icon: Target,
    href: '/tests/questionnaire',
    color: 'bg-blue-100 text-blue-600',
    duration: '15 min'
  },
  {
    title: 'Test Holland (RIASEC)',
    description: 'Test scientifique de personnalité professionnelle',
    icon: Brain,
    href: '/tests/holland',
    color: 'bg-green-100 text-green-600',
    duration: '10 min'
  },
  {
    title: 'Explorer les Métiers',
    description: 'Parcourez notre base de données complète',
    icon: Search,
    href: '/explorer?category=metiers',
    color: 'bg-purple-100 text-purple-600',
    duration: 'Libre'
  },
  {
    title: 'Formations Disponibles',
    description: 'Trouvez les formations qui vous correspondent',
    icon: BookOpen,
    href: '/explorer?category=formations',
    color: 'bg-orange-100 text-orange-600',
    duration: 'Libre'
  }
];

const recentActivity = [
  {
    type: 'test',
    title: 'Test d\'Orientation Personnel',
    date: '2024-03-15',
    status: 'completed',
    score: 85
  },
  {
    type: 'exploration',
    title: 'Métiers en Informatique',
    date: '2024-03-14',
    status: 'viewed',
    count: 12
  }
];

const recommendations = [
  {
    type: 'metier',
    title: 'Développeur Web',
    match: 92,
    reason: 'Correspond à vos résultats en logique et créativité'
  },
  {
    type: 'formation',
    title: 'Licence en Informatique',
    match: 88,
    reason: 'Formation recommandée pour le développement web'
  },
  {
    type: 'metier',
    title: 'Designer UX/UI',
    match: 84,
    reason: 'Allie créativité et aspects techniques'
  }
];

export function DashboardContent() {
  const { user } = useAuth();

  if (!user) return null;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {getGreeting()}, {user.name.split(' ')[0]} ! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Continuez votre parcours d'orientation et découvrez de nouvelles opportunités.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Actions Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} href={action.href}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {action.duration}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommendations */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Recommandations Personnalisées
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recommendations.length > 0 ? (
                  <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900">{rec.title}</h4>
                            <Badge variant={rec.type === 'metier' ? 'default' : 'secondary'}>
                              {rec.type === 'metier' ? 'Métier' : 'Formation'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{rec.reason}</p>
                          <div className="mt-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">Correspondance</span>
                              <Progress value={rec.match} className="flex-1 max-w-32" />
                              <span className="text-xs font-medium text-gray-700">{rec.match}%</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Voir plus
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    ))}
                    
                    <div className="text-center pt-4">
                      <Link href="/dashboard/recommendations">
                        <Button variant="outline">
                          Voir toutes les recommandations
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">Aucune recommandation pour le moment</h3>
                    <p className="text-gray-600 mb-4">Passez un test d'orientation pour recevoir des suggestions personnalisées.</p>
                    <Link href="/tests">
                      <Button>Commencer un test</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Stats */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  Activité Récente
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recentActivity.length > 0 ? (
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {activity.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(activity.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        {activity.score && (
                          <Badge variant="secondary" className="text-xs">
                            {activity.score}%
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Aucune activité récente</p>
                )}
              </CardContent>
            </Card>

            {/* Profile Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Votre Progression
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Profil complété</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Tests effectués</span>
                      <span className="font-medium">2/4</span>
                    </div>
                    <Progress value={50} />
                  </div>
                  <div className="pt-2">
                    <Link href="/dashboard/profile">
                      <Button variant="outline" size="sm" className="w-full">
                        Compléter le profil
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}