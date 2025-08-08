import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Loader2, X } from "lucide-react";

interface EarlyAccessFormProps {
  signupType: 'early_access' | 'demo_request' | 'contact_sales';
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function EarlyAccessForm({ 
  signupType, 
  isOpen, 
  onClose, 
  title, 
  description 
}: EarlyAccessFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: ''
  });
  
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          signupType
        }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Signup failed');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for signing up. Check your email for confirmation.",
      });
      setFormData({ email: '', firstName: '', lastName: '', company: '', jobTitle: '' });
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Signup Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  const defaultTitles = {
    early_access: "Get Early Access",
    demo_request: "Request a Demo", 
    contact_sales: "Contact Sales"
  };

  const defaultDescriptions = {
    early_access: "Be the first to experience AI-powered OSHA compliance automation.",
    demo_request: "See SafetySync.AI in action with a personalized demo.",
    contact_sales: "Speak with our team about custom solutions for your organization."
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16">
      {/* Multiple background layers for complete opacity */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gray-900/95"></div>
      <div className="absolute inset-0 backdrop-blur-xl"></div>
      <div className="relative bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          data-testid="button-close-form"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            {title || defaultTitles[signupType]}
          </h2>
          <p className="text-gray-400">
            {description || defaultDescriptions[signupType]}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">First Name</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                data-testid="input-first-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                data-testid="input-last-name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">Company</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              data-testid="input-company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-white">Job Title</Label>
            <Input
              id="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              data-testid="input-job-title"
            />
          </div>

          <Button
            type="submit"
            disabled={submitMutation.isPending}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-white font-bold py-3 shadow-lg hover:shadow-xl"
            data-testid="button-submit-signup"
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              signupType === 'early_access' ? 'Get Early Access' :
              signupType === 'demo_request' ? 'Request Demo' : 'Contact Sales'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}