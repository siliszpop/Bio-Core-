import { useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Activity, Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await base44.auth.resetPasswordRequest(email);
    } catch (err) {
      // Always show success message for security
    } finally {
      setIsLoading(false);
      setSubmitted(true);
    }
  };

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

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2">¿Olvidaste tu contraseña?</h2>
            <p className="text-muted-foreground mb-8">
              Ingresa tu correo y te enviaremos instrucciones para restablecerla
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Instrucciones'}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Correo Enviado!</h2>
            <p className="text-muted-foreground mb-8">
              Si existe una cuenta con el correo <span className="font-medium text-foreground">{email}</span>, recibirás las instrucciones para restablecer tu contraseña.
            </p>
          </div>
        )}

        <Link 
          to="/sign-in" 
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a iniciar sesión
        </Link>
      </motion.div>
    </div>
  );
}