// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
/* index.css - Cole no arquivo principal de estilos do Lovable */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Cores principais */
    --color-bg-primary: #FFFFFF;
    --color-bg-dark: #000602;
    --color-bg-burgundy: #350328;
    --color-bg-gold: #F59E05;
    
    /* Texto */
    --color-text-light: #F6FAFF;
    --color-text-muted: rgba(229, 229, 229, 0.57);
    --color-text-dark: #1A1A1A;
    
    /* Accent */
    --color-accent-gold: #CF8B46;
    --color-accent-gold-light: #E6B281;
    
    /* Fontes */
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'DM Sans', sans-serif;
    --font-ui: 'Inter', sans-serif;
    
    /* EspaÃ§amentos */
    --section-padding-x: 5vw;
    --section-padding-y: 4rem;
    
    /* Border radius */
    --radius-sm: 10px;
    --radius-md: 20px;
    --radius-lg: 30px;
  }
}

@layer components {
  .font-display {
    font-family: var(--font-display);
  }
  
  .font-body {
    font-family: var(--font-body);
  }
  
  .font-ui {
    font-family: var(--font-ui);
  }
  
  .section-container {
    padding-left: var(--section-padding-x);
    padding-right: var(--section-padding-x);
    padding-top: var(--section-padding-y);
    padding-bottom: var(--section-padding-y);
  }
  
  .card-dark {
    background-color: var(--color-bg-dark);
    border-radius: var(--radius-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .btn-gold {
    background-color: var(--color-accent-gold);
    color: white;
    font-family: var(--font-ui);
    font-weight: 500;
    padding: 12px 24px;
    border-radius: var(--radius-sm);
    transition: all 0.3s ease;
  }
  
  .btn-gold:hover {
    background-color: #B87A3D;
    transform: translateY(-2px);
  }
}

/* AnimaÃ§Ã£o do ticker de serviÃ§os */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-left {
  animation: scroll-left 20s linear infinite;
}

/* AnimaÃ§Ã£o fade in */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
