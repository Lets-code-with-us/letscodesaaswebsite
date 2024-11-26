// import { useState } from 'react';
// import { Button } from '../ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '../ui/dialog';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Mail } from 'lucide-react';

// interface AuthFormsProps {
//   initialView?: 'signin' | 'signup';
//   trigger?: React.ReactNode;
// }

// export function AuthForms({ initialView = 'signin', trigger }: AuthFormsProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [view, setView] = useState<'signin' | 'signup'>(initialView);

//   const handleViewToggle = () => {
//     setView(view === 'signin' ? 'signup' : 'signin');
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         {trigger || <Button variant="outline">Sign In</Button>}
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[400px]">
//         <DialogHeader>
//           <DialogTitle>
//             {view === 'signin' ? 'Welcome back' : 'Create an account'}
//           </DialogTitle>
//           <DialogDescription>
//             {view === 'signin'
//               ? 'Sign in to your account to continue'
//               : 'Sign up for a new account to get started'}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="grid gap-4 py-4">
//           <Button variant="outline" className="w-full flex items-center justify-center">
//             <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
//               <path
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 fill="#4285F4"
//               />
//               <path
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 fill="#34A853"
//               />
//               <path
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 fill="#FBBC05"
//               />
//               <path
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 fill="#EA4335"
//               />
//             </svg>
//             {view === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-background px-2 text-muted-foreground">
//                 Or continue with
//               </span>
//             </div>
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="name@example.com"
//               className="w-full"
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               className="w-full"
//             />
//           </div>

//           {view === 'signup' && (
//             <div className="grid gap-2">
//               <Label htmlFor="confirm-password">Confirm Password</Label>
//               <Input
//                 id="confirm-password"
//                 type="password"
//                 className="w-full"
//               />
//             </div>
//           )}

//           <Button className="w-full">
//             <Mail className="mr-2 h-4 w-4" />
//             {view === 'signin' ? 'Sign in with Email' : 'Sign up with Email'}
//           </Button>

//           <div className="text-center text-sm">
//             {view === 'signin' ? (
//               <>
//                 Don't have an account?{' '}
//                 <button
//                   onClick={handleViewToggle}
//                   className="text-primary hover:underline"
//                 >
//                   Sign up
//                 </button>
//               </>
//             ) : (
//               <>
//                 Already have an account?{' '}
//                 <button
//                   onClick={handleViewToggle}
//                   className="text-primary hover:underline"
//                 >
//                   Sign in
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// import React from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function AuthForms() {
  return (
    <div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default AuthForms;
