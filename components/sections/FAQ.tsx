import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Comment fonctionne OrientMada ?",
    answer: "OrientMada vous accompagne dans votre orientation grâce à des tests scientifiques personnalisés. Après avoir créé votre compte, vous pouvez passer nos tests d'orientation qui analysent vos centres d'intérêt, votre personnalité et vos aptitudes. Vous recevez ensuite des recommandations personnalisées de métiers et formations adaptées à votre profil."
  },
  {
    question: "Les tests d'orientation sont-ils gratuits ?",
    answer: "Oui, tous nos tests d'orientation sont entièrement gratuits ! Cela inclut le Test d'Orientation Personnel et le Test Holland (RIASEC), ainsi que les rapports détaillés et les recommandations personnalisées."
  },
  {
    question: "Quelle est la différence entre les deux tests proposés ?",
    answer: "Le Test d'Orientation Personnel explore vos centres d'intérêt, vos valeurs et vos aspirations personnelles. Le Test Holland (RIASEC) est basé sur une méthode scientifique reconnue qui analyse votre personnalité professionnelle selon 6 types : Réaliste, Investigateur, Artistique, Social, Entreprenant, et Conventionnel. Les deux tests se complètent pour vous offrir une vision complète de votre profil."
  },
  {
    question: "Combien de temps durent les tests ?",
    answer: "Le Test d'Orientation Personnel dure environ 15-20 minutes avec 45 questions. Le Test Holland est plus rapide, environ 10-15 minutes pour 30 questions. Vous pouvez interrompre et reprendre les tests à tout moment."
  },
  {
    question: "Les informations sur les métiers et formations sont-elles à jour ?",
    answer: "Nous mettons régulièrement à jour notre base de données avec les dernières informations sur les métiers, les salaires moyens, les formations disponibles et les établissements à Madagascar. Nos équipes travaillent avec des professionnels de différents secteurs pour garantir la qualité des informations."
  },
  {
    question: "Puis-je utiliser OrientMada hors connexion ?",
    answer: "Certaines fonctionnalités sont disponibles hors connexion après votre première connexion, notamment la consultation de vos résultats de tests précédents. Cependant, les tests d'orientation et la recherche de nouvelles formations nécessitent une connexion internet."
  },
  {
    question: "Comment puis-je télécharger mes résultats en PDF ?",
    answer: "Après avoir complété un test, vous pouvez télécharger vos résultats détaillés en format PDF directement depuis votre tableau de bord. Le rapport inclut votre profil complet, les métiers recommandés et les formations suggérées."
  },
  {
    question: "Les résultats des tests sont-ils fiables ?",
    answer: "Nos tests sont basés sur des méthodes scientifiques éprouvées et ont été adaptés au contexte malgache. Le Test Holland notamment jouit d'une reconnaissance internationale. Cependant, les résultats sont des indications qui doivent être complétées par une réflexion personnelle et éventuellement des conseils de professionnels de l'orientation."
  },
  {
    question: "Puis-je refaire les tests plusieurs fois ?",
    answer: "Oui, vous pouvez repasser les tests autant de fois que vous le souhaitez. Cependant, nous recommandons d'attendre au moins quelques mois entre deux passages pour que vos réponses reflètent une évolution réelle de vos centres d'intérêt ou de votre personnalité."
  },
  {
    question: "Comment contacter l'équipe OrientMada ?",
    answer: "Vous pouvez nous contacter par email à contact@orientmada.mg ou via notre formulaire de contact. Notre équipe répond généralement sous 24-48h. Pour les questions urgentes, vous pouvez aussi nous appeler au +261 34 XX XX XX XX."
  }
];

export function FAQ() {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
              <span className="font-medium text-gray-900">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}