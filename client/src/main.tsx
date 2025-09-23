import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  NotFoundRoute,
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import QuizPage from "./pages/quize/Quize.tsx";
import ChallengeDashboard from "./pages/Dashbord/Dashbord.tsx";
import Available from "./components/tabs/Avalable.tsx";
import Enrolled from "./components/tabs/Enroled.tsx";
import Leaderboard from "./components/tabs/Ledarebord.tsx";
import EcoChallengeHub from "./pages/chalenges/chalenges.tsx";
import LoginPage from "./pages/auth/Login.tsx";
import RegisterPage from "./pages/auth/Registe.tsx";

const queryClient = new QueryClient();


const Rootroute = createRootRoute({});

const Heroroute = createRoute({
  getParentRoute: () => Rootroute,
  path: '/',
  component:Index,
});

const QuizPageroute = createRoute({
  getParentRoute: () => Rootroute,
  path: '/quizpage',
  component: QuizPage,
});

const dashbordroute = createRoute({
  getParentRoute: () => Rootroute,
  path: '/dashboard',
  component:ChallengeDashboard ,
});

const Avalableroute = createRoute({
  getParentRoute: () => dashbordroute,
  path: '/available',
  component:Available ,
});

const Enroledroute = createRoute({
  getParentRoute: () => dashbordroute,
  path: '/',
  component:Enrolled ,
});

const Leaderboardroute = createRoute({
  getParentRoute: () => dashbordroute,
  path: '/leaderboard',
  component:Leaderboard ,
});

const Chalengesroute = createRoute({
  getParentRoute: () => Rootroute,
  path: '/challenges',
  component:EcoChallengeHub,
});

const Loginroute = createRoute({
  getParentRoute: () => Rootroute,
  path: 'auth/login',
  component:LoginPage ,
});

const Registerroute = createRoute({
  getParentRoute: () => Rootroute,
  path: 'auth/register',
  component:RegisterPage ,
});

const NotFoundroute = new NotFoundRoute({
  getParentRoute: () => Rootroute,
  component: NotFound,
});

const routeTree = Rootroute.addChildren([Heroroute, NotFoundroute,QuizPageroute,dashbordroute.addChildren([Enroledroute,Avalableroute,Leaderboardroute])
,Chalengesroute,Loginroute,Registerroute]);

const router = createRouter({routeTree});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);
