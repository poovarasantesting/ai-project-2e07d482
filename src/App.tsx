import { LoginForm } from "./components/LoginForm";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <LoginForm />
      <Toaster />
    </div>
  );
}