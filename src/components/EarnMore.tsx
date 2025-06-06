
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EarnMoreProps {
  onBack: () => void;
}

const EarnMore: React.FC<EarnMoreProps> = ({ onBack }) => {
  const handleSignUpNow = () => {
    window.open('https://bluepay2025.vercel.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Earn More</h1>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-orange-400 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8 text-center text-white">
          
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white mb-8">BluePay</h1>
            
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                Take your earnings to the next level with BluePay.
              </p>
              
              <p className="text-lg leading-relaxed">
                Access exclusive features and higher earning opportunities.
              </p>
              
              <p className="text-lg leading-relaxed">
                Join thousands of users already maximizing their income.
              </p>
            </div>

            <Button
              onClick={handleSignUpNow}
              className="w-full h-16 bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center space-x-3"
            >
              <span>Sign Up Now</span>
              <ExternalLink className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnMore;
