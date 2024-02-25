'use client';

import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Icons } from './ui/icons';
import { Input } from './ui/input';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(new RegExp('.*[A-Z].*'), 'Must contain a uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'Must contain a lowercase character')
    .regex(new RegExp('.*\\d.*'), 'Must contain a number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'Must contain a special character'
    )
    .min(8),
});

export type LoginInput = z.infer<typeof LoginSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginInput) => {
    setIsLoading(true);
    console.log('onSubmit:');
    console.log(values);
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only">Email</Label>

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only">Password</Label>

            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
