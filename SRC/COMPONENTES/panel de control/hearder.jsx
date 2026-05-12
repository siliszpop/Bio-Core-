import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export default function Header({ user }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-8"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Hola, {user?.full_name?.split(' ')[0] || 'Usuario'} 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Tu salud está siendo monitoreada
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
        <Avatar className="h-10 w-10 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {user?.full_name?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
      </div>
    </motion.header>
  );
}