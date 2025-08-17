import type { Metier, Formation, Institution } from '@/types';

// Mock institutions data
export const mockInstitutions: Institution[] = [
  { id: '1', name: 'Université d\'Antananarivo', location: 'Antananarivo', type: 'university', website: 'http://www.univ-antananarivo.mg' },
  { id: '2', name: 'EMIT', location: 'Antananarivo', type: 'institute' },
  { id: '3', name: 'ISCAM', location: 'Antananarivo', type: 'school' },
  { id: '4', name: 'Institut Supérieur de Technologie', location: 'Antsiranana', type: 'institute' },
  { id: '5', name: 'ESPA', location: 'Antananarivo', type: 'school' },
];

// Mock formations data
export const mockFormations: Formation[] = [
  {
    id: '1',
    title: 'Licence en Informatique',
    description: 'Formation complète en développement logiciel, bases de données, réseaux et systèmes d\'information.',
    slug: 'licence-informatique',
    duration: '3 ans',
    level: 'Licence (Bac+3)',
    prerequisites: ['Baccalauréat série C, D ou équivalent', 'Bonnes bases en mathématiques'],
    institutions: [mockInstitutions[0], mockInstitutions[1]],
    cost: { min: 500000, max: 1200000, currency: 'MGA' },
    sectors: ['Informatique et Technologies'],
    imageUrl: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg'
  },
  {
    id: '2',
    title: 'Master en Gestion d\'Entreprise',
    description: 'Programme avancé couvrant la stratégie, le management, la finance et le marketing.',
    slug: 'master-gestion-entreprise',
    duration: '2 ans',
    level: 'Master (Bac+5)',
    prerequisites: ['Licence en gestion, économie ou équivalent', 'Expérience professionnelle recommandée'],
    institutions: [mockInstitutions[2], mockInstitutions[4]],
    cost: { min: 800000, max: 2000000, currency: 'MGA' },
    sectors: ['Commerce et Vente', 'Finance et Banking'],
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  },
  {
    id: '3',
    title: 'BTS Tourisme et Hôtellerie',
    description: 'Formation pratique pour les métiers de l\'accueil, de la restauration et du tourisme.',
    slug: 'bts-tourisme-hotellerie',
    duration: '2 ans',
    level: 'BTS (Bac+2)',
    prerequisites: ['Baccalauréat toutes séries', 'Bon niveau en langues étrangères'],
    institutions: [mockInstitutions[4]],
    cost: { min: 400000, max: 800000, currency: 'MGA' },
    sectors: ['Tourisme et Hôtellerie'],
    imageUrl: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg'
  },
  {
    id: '4',
    title: 'Licence en Médecine',
    description: 'Formation médicale complète pour devenir médecin généraliste ou se spécialiser.',
    slug: 'licence-medecine',
    duration: '6 ans',
    level: 'Doctorat (Bac+6)',
    prerequisites: ['Baccalauréat série C ou D', 'Excellent niveau scientifique'],
    institutions: [mockInstitutions[0]],
    cost: { min: 1000000, max: 2500000, currency: 'MGA' },
    sectors: ['Santé et Médical'],
    imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg'
  },
  {
    id: '5',
    title: 'DUT Génie Civil',
    description: 'Formation technique pour les métiers de la construction et des travaux publics.',
    slug: 'dut-genie-civil',
    duration: '2 ans',
    level: 'DUT (Bac+2)',
    prerequisites: ['Baccalauréat série C, D ou STI', 'Bases solides en mathématiques et physique'],
    institutions: [mockInstitutions[3]],
    cost: { min: 300000, max: 600000, currency: 'MGA' },
    sectors: ['Ingénierie'],
    imageUrl: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg'
  }
];

// Mock métiers data
export const mockMetiers: Metier[] = [
  {
    id: '1',
    title: 'Développeur Web',
    description: 'Création et maintenance de sites web et applications web. Maîtrise des langages de programmation et des frameworks modernes.',
    slug: 'developpeur-web',
    missions: [
      'Analyser les besoins clients et rédiger les spécifications techniques',
      'Développer des sites web et applications web responsive',
      'Intégrer des maquettes graphiques en code HTML/CSS/JavaScript',
      'Optimiser les performances et la sécurité des applications',
      'Effectuer les tests et la maintenance des sites développés'
    ],
    skills: [
      'HTML5, CSS3, JavaScript',
      'Frameworks (React, Vue.js, Angular)',
      'Langages serveur (PHP, Python, Node.js)',
      'Bases de données (MySQL, MongoDB)',
      'Git et outils de versioning',
      'Méthodes agiles'
    ],
    salary: { min: 800000, max: 2500000, currency: 'MGA' },
    sectors: ['Informatique et Technologies'],
    formations: [mockFormations[0]],
    imageUrl: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg',
    outlook: 'excellent'
  },
  {
    id: '2',
    title: 'Médecin Généraliste',
    description: 'Diagnostic, traitement et suivi médical des patients. Premier contact avec le système de santé.',
    slug: 'medecin-generaliste',
    missions: [
      'Examiner les patients et établir des diagnostics',
      'Prescrire des traitements médicamenteux adaptés',
      'Orienter vers des spécialistes si nécessaire',
      'Assurer le suivi médical et la prévention',
      'Tenir des dossiers médicaux détaillés'
    ],
    skills: [
      'Connaissances médicales approfondies',
      'Capacités de diagnostic',
      'Relation patient-médecin',
      'Gestion du stress',
      'Formation continue obligatoire',
      'Éthique médicale'
    ],
    salary: { min: 1500000, max: 5000000, currency: 'MGA' },
    sectors: ['Santé et Médical'],
    formations: [mockFormations[3]],
    imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
    outlook: 'excellent'
  },
  {
    id: '3',
    title: 'Guide Touristique',
    description: 'Accompagnement et information des touristes lors de leurs visites. Valorisation du patrimoine culturel et naturel malgache.',
    slug: 'guide-touristique',
    missions: [
      'Accueillir et accompagner les groupes de touristes',
      'Présenter l\'histoire et la culture malgache',
      'Organiser des circuits touristiques',
      'Assurer la sécurité des visiteurs',
      'Promouvoir l\'écotourisme responsable'
    ],
    skills: [
      'Excellent relationnel',
      'Maîtrise des langues étrangères',
      'Culture générale sur Madagascar',
      'Organisation et planification',
      'Connaissance de la faune et flore',
      'Premiers secours'
    ],
    salary: { min: 400000, max: 1200000, currency: 'MGA' },
    sectors: ['Tourisme et Hôtellerie'],
    formations: [mockFormations[2]],
    imageUrl: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    outlook: 'good'
  },
  {
    id: '4',
    title: 'Ingénieur Civil',
    description: 'Conception, construction et supervision d\'infrastructures et de bâtiments. Gestion de projets de construction.',
    slug: 'ingenieur-civil',
    missions: [
      'Concevoir des plans de construction et d\'infrastructure',
      'Superviser les chantiers et coordonner les équipes',
      'Effectuer des études de faisabilité technique et financière',
      'Contrôler la qualité des matériaux et des travaux',
      'Assurer le respect des normes de sécurité'
    ],
    skills: [
      'Maîtrise des logiciels de CAO (AutoCAD, etc.)',
      'Connaissances en résistance des matériaux',
      'Gestion de projet',
      'Lecture de plans techniques',
      'Calculs de structures',
      'Management d\'équipes'
    ],
    salary: { min: 1200000, max: 3500000, currency: 'MGA' },
    sectors: ['Ingénierie'],
    formations: [mockFormations[4]],
    imageUrl: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
    outlook: 'good'
  },
  {
    id: '5',
    title: 'Chef d\'Entreprise',
    description: 'Direction et gestion stratégique d\'une entreprise. Prise de décisions importantes et développement commercial.',
    slug: 'chef-entreprise',
    missions: [
      'Définir la stratégie et les objectifs de l\'entreprise',
      'Gérer les équipes et recruter les talents',
      'Superviser les finances et la rentabilité',
      'Développer les partenariats commerciaux',
      'Représenter l\'entreprise auprès des parties prenantes'
    ],
    skills: [
      'Leadership et management',
      'Vision stratégique',
      'Gestion financière',
      'Négociation commerciale',
      'Prise de décision',
      'Communication et networking'
    ],
    salary: { min: 2000000, max: 10000000, currency: 'MGA' },
    sectors: ['Commerce et Vente', 'Finance et Banking'],
    formations: [mockFormations[1]],
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    outlook: 'moderate'
  },
  {
    id: '6',
    title: 'Professeur',
    description: 'Enseignement et transmission des connaissances aux élèves. Préparation de cours et évaluation des apprentissages.',
    slug: 'professeur',
    missions: [
      'Préparer et dispenser des cours adaptés au niveau',
      'Évaluer les connaissances et compétences des élèves',
      'Suivre les progrès individuels des élèves',
      'Participer à la vie de l\'établissement',
      'Se former continuellement aux nouvelles méthodes'
    ],
    skills: [
      'Maîtrise de la matière enseignée',
      'Pédagogie et didactique',
      'Gestion de classe',
      'Patience et bienveillance',
      'Communication avec les parents',
      'Utilisation des TICE'
    ],
    salary: { min: 600000, max: 1800000, currency: 'MGA' },
    sectors: ['Éducation et Formation'],
    formations: [],
    imageUrl: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
    outlook: 'good'
  }
];