import type { User } from '@/types';

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Jean Rakoto',
    email: 'jean@example.com',
    role: 'student',
    createdAt: new Date(),
    preferences: {
      notifications: true,
      language: 'fr'
    }
  }
];

// Simulate API delays
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class AuthService {
  private readonly STORAGE_KEY = 'orient_user';

  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    await delay(1000); // Simulate API call
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      return { success: false, error: 'Email ou mot de passe incorrect' };
    }

    // Simulate password validation (in real app, this would be handled by the API)
    if (password.length < 6) {
      return { success: false, error: 'Email ou mot de passe incorrect' };
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return { success: true, user };
  }

  async signup(name: string, email: string, password: string, role: 'student' | 'parent' | 'teacher'): Promise<{ success: boolean; user?: User; error?: string }> {
    await delay(1000); // Simulate API call
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      return { success: false, error: 'Un compte avec cet email existe déjà' };
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
      createdAt: new Date(),
      preferences: {
        notifications: true,
        language: 'fr'
      }
    };

    mockUsers.push(newUser);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newUser));
    return { success: true, user: newUser };
  }

  async getCurrentUser(): Promise<User | null> {
    await delay(500); // Simulate API call
    
    const userData = localStorage.getItem(this.STORAGE_KEY);
    if (!userData) return null;

    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }

  async updateProfile(userId: string, data: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
    await delay(800); // Simulate API call
    
    const userIndex = mockUsers.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return { success: false, error: 'Utilisateur non trouvé' };
    }

    const updatedUser = { ...mockUsers[userIndex], ...data };
    mockUsers[userIndex] = updatedUser;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedUser));
    
    return { success: true, user: updatedUser };
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  async requestPasswordReset(email: string): Promise<{ success: boolean; error?: string }> {
    await delay(1000); // Simulate API call
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      return { success: false, error: 'Aucun compte trouvé avec cet email' };
    }

    // In a real app, this would send an email with a reset link
    return { success: true };
  }

  async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    await delay(1000); // Simulate API call
    
    // In a real app, this would validate the token and update the password
    return { success: true };
  }
}

export const authService = new AuthService();