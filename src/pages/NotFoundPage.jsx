
import React from 'react';
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-20 px-4 text-center min-h-[70vh]">
      <div className="relative mb-8">
        <h1 className="text-9xl font-bold text-primary opacity-10">404</h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
          <span className="text-5xl">🔍</span>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
      
      <p className="text-xl text-muted-foreground max-w-lg mb-8">
        But while you're here, why don't you explore new talent or check out our marketplace?
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button asChild size="lg">
          <Link to="/">
            Go Home
          </Link>
        </button>
        
        <button asChild variant="outline" size="lg">
          <Link to="/marketplace">
            Discover Talents Now!
          </Link>
        </button>
      </div>
      
      <div className="mt-16 max-w-lg text-left">
        <h3 className="text-xl font-medium mb-4">Looking for something specific?</h3>
        
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Explore Our Marketplace</h4>
            <p className="text-muted-foreground mb-2">
              Find certified talents, verified software, and trusted agencies.
            </p>
            <Link to="/marketplace" className="text-primary hover:underline">
              Browse Marketplace →
            </Link>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Get Certified</h4>
            <p className="text-muted-foreground mb-2">
              Showcase your skills with blockchain-backed credentials.
            </p>
            <Link to="/certification" className="text-primary hover:underline">
              Start Certification →
            </Link>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Need Help?</h4>
            <p className="text-muted-foreground mb-2">
              Our support team is ready to assist you.
            </p>
            <Link to="/contact" className="text-primary hover:underline">
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
