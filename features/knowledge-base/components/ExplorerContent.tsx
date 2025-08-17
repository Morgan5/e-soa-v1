'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, MapPin, Clock, TrendingUp, Users, Star } from 'lucide-react';
import Link from 'next/link';
import { mockMetiers, mockFormations } from '../data/mockData';

const sectors = [
  'Tous les secteurs',
  'Informatique et Technologies',
  'Santé et Médical',
  'Éducation et Formation',
  'Commerce et Vente',
  'Ingénierie',
  'Arts et Créativité',
  'Tourisme et Hôtellerie',
  'Agriculture',
  'Finance et Banking'
];

const regions = [
  'Toutes les régions',
  'Analamanga',
  'Vakinankaratra',
  'Itasy',
  'Bongolava',
  'Haute Matsiatra',
  'Amoron\'i Mania',
  'Vatovavy Fitovinany',
  'Ihorombe',
  'Atsimo-Atsinanana',
  'Atsinanana',
  'Analanjirofo',
  'Alaotra-Mangoro',
  'Boeny',
  'Sofia',
  'Betsiboka',
  'Melaky',
  'Atsimo-Andrefana',
  'Androy',
  'Anosy',
  'Menabe',
  'Diana',
  'Sava'
];

export function ExplorerContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('Tous les secteurs');
  const [selectedRegion, setSelectedRegion] = useState('Toutes les régions');
  const [activeTab, setActiveTab] = useState('metiers');

  const filteredMetiers = mockMetiers.filter(metier => {
    const matchesSearch = metier.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         metier.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'Tous les secteurs' || 
                         metier.sectors.includes(selectedSector);
    return matchesSearch && matchesSector;
  });

  const filteredFormations = mockFormations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'Tous les secteurs' || 
                         formation.sectors.includes(selectedSector);
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Explorez les Possibilités
          </h1>
          <p className="text-gray-600">
            Découvrez les métiers et formations disponibles à Madagascar
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Rechercher un métier, une formation..."
                  className="pl-10 pr-4 text-lg h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Select value={selectedSector} onValueChange={setSelectedSector}>
                    <SelectTrigger>
                      <SelectValue placeholder="Secteur d'activité" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Région" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="sm:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres avancés
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="metiers">
              Métiers ({filteredMetiers.length})
            </TabsTrigger>
            <TabsTrigger value="formations">
              Formations ({filteredFormations.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="metiers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMetiers.map((metier) => (
                <Link key={metier.id} href={`/metiers/${metier.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold text-center px-4">
                          {metier.title}
                        </h3>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className={`${
                          metier.outlook === 'excellent' ? 'bg-green-100 text-green-800' :
                          metier.outlook === 'good' ? 'bg-blue-100 text-blue-800' :
                          metier.outlook === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {metier.outlook === 'excellent' ? 'Excellent' :
                           metier.outlook === 'good' ? 'Bon' :
                           metier.outlook === 'moderate' ? 'Modéré' : 'Limité'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {metier.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          {metier.salary.min.toLocaleString()} - {metier.salary.max.toLocaleString()} {metier.salary.currency}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {metier.sectors.slice(0, 2).map((sector) => (
                            <Badge key={sector} variant="outline" className="text-xs">
                              {sector}
                            </Badge>
                          ))}
                          {metier.sectors.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{metier.sectors.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="formations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFormations.map((formation) => (
                <Link key={formation.id} href={`/formations/${formation.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold text-center px-4">
                          {formation.title}
                        </h3>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white bg-opacity-90 text-gray-800">
                          {formation.level}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {formation.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          {formation.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {formation.institutions.length} établissement{formation.institutions.length > 1 ? 's' : ''}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formation.sectors.slice(0, 2).map((sector) => (
                            <Badge key={sector} variant="outline" className="text-xs">
                              {sector}
                            </Badge>
                          ))}
                          {formation.sectors.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{formation.sectors.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {((activeTab === 'metiers' && filteredMetiers.length === 0) ||
          (activeTab === 'formations' && filteredFormations.length === 0)) && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Aucun résultat trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche ou vos filtres.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedSector('Tous les secteurs');
                setSelectedRegion('Toutes les régions');
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}