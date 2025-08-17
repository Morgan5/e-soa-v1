'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '../hooks/useAuth';
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, Users, BookOpen } from 'lucide-react';

const signupSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  role: z.enum(['student', 'parent', 'teacher'] as const, {
    required_error: 'Veuillez sélectionner votre profil'
  })
});

type SignupFormData = z.infer<typeof signupSchema>;

const roleOptions = [
  {
    value: 'student' as const,
    label: 'Élève/Étudiant',
    description: 'Je cherche mon orientation',
    icon: GraduationCap,
    color: 'bg-blue-100 border-blue-200 hover:bg-blue-200'
  },
  {
    value: 'parent' as const,
    label: 'Parent',
    description: 'J\'aide mon enfant',
    icon: Users,
    color: 'bg-green-100 border-green-200 hover:bg-green-200'
  },
  {
    value: 'teacher' as const,
    label: 'Enseignant',
    description: 'J\'accompagne mes élèves',
    icon: BookOpen,
    color: 'bg-purple-100 border-purple-200 hover:bg-purple-200'
  }
];

export function SignupForm() {
  const router = useRouter();
  const { signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signup(data.name, data.email, data.password, data.role);
      if (result.success) {
        router.push('/dashboard');
      } else {
        setError(result.error || 'Une erreur s\'est produite');
      }
    } catch (err) {
      setError('Une erreur s\'est produite lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">
            {error}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nom complet</Label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Votre nom complet"
              className="pl-10"
              {...register('name')}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Adresse email</Label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="votre.email@example.com"
              className="pl-10"
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Mot de passe</Label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Créez un mot de passe"
              className="pl-10 pr-10"
              {...register('password')}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Label>Votre profil</Label>
          <div className="mt-2 space-y-2">
            {roleOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-colors border-2 ${
                    selectedRole === option.value 
                      ? 'border-blue-500 bg-blue-50' 
                      : option.color
                  }`}
                  onClick={() => setValue('role', option.value)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        value={option.value}
                        checked={selectedRole === option.value}
                        {...register('role')}
                        className="sr-only"
                      />
                      <Icon className={`h-6 w-6 ${
                        selectedRole === option.value ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {errors.role && (
            <p className="text-sm text-red-600 mt-1">{errors.role.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Création du compte...' : 'Créer mon compte'}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Ou</span>
        </div>
      </div>

      <Button type="button" variant="outline" className="w-full" disabled={isLoading}>
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        S'inscrire avec Google
      </Button>

      <div className="text-xs text-gray-500 text-center">
        En créant un compte, vous acceptez nos{' '}
        <a href="/conditions" className="text-blue-600 hover:text-blue-500">
          conditions d'utilisation
        </a>{' '}
        et notre{' '}
        <a href="/confidentialite" className="text-blue-600 hover:text-blue-500">
          politique de confidentialité
        </a>
        .
      </div>
    </form>
  );
}