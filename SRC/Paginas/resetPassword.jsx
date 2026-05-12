import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Activity, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResetPassword() {
  const urlParams = new URLSearchParams(window.location.search);
  const resetToken = urlParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setIsLoading(true);

    try {
      await base44.auth.resetPassword({ resetToken, newPassword: password });
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/sign-in';
      }, 2000);
    } catch (err) {
      setError(err.message || 'Error al restablecer la contraseña');
    } finally {
      setIsLoading(false);
    }
  };

  if (!resetToken) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Enlace inválido</h2>
          <p className="text-muted-foreground">El enlace de restablecimiento no es válido o ha expirado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Bio Core</span>
        </div>

        {!success ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Nueva Contraseña</h2>
            <p className="text-muted-foreground mb-8">
              Ingresa tu nueva contraseña
            </p>

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="password">Nueva Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                {isLoading ? 'Guardando...' : 'Restablecer Contraseña'}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Contraseña Actualizada!</h2>
            <p className="text-muted-foreground">
              Redirigiendo al inicio de sesión...
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}