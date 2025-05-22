import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mirë se vini përsëri</h1>
          <p className="text-gray-600">
            Kyçuni për të vlerësuar mjekët dhe për të ndarë përvojën tuaj
          </p>
        </div>
        
        <LoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Kthehu në faqen kryesore
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;