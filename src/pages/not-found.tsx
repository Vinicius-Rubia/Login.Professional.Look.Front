import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="h-14 flex items-center m-4 lg:m-6">
        <Link to="/dash" className="flex items-center justify-center">
          <Home />
          <span className="sr-only">Negocie Online</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center flex-col gap-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
            404 Não encontrado
          </h1>
          <p className="max-w-[600px] text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ops! A página que você procura não existe.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Voltar para o início
          </Button>
        </div>
      </main>
    </div>
  );
};
