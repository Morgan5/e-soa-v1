import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '10,247', label: 'Étudiants orientés', description: 'Jeunes ayant trouvé leur voie' },
  { value: '542', label: 'Métiers référencés', description: 'Dans tous les secteurs d\'activité' },
  { value: '89', label: 'Formations répertoriées', description: 'Universités et instituts partenaires' },
  { value: '95%', label: 'Taux de satisfaction', description: 'Utilisateurs recommandent la plateforme' }
];

export function Stats() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Des résultats qui parlent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis notre lancement, nous avons aidé des milliers de jeunes malgaches 
            à clarifier leur projet professionnel et académique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}