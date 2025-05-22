import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="ml-2 text-xl font-bold">Vlerëso Mjekun</span>
            </div>
            <p className="text-gray-400 text-sm">
              Platforma e parë në Kosovë për vlerësimin e mjekëve në QKUK, duke u mundësuar pacientëve të ndajnë përvojat e tyre.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Linqe të Shpejta</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Ballina
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">
                  Mjekët
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                  Regjistrohu
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Departamentet</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/doctors?department=Kardiologji" className="text-gray-400 hover:text-white transition-colors">
                  Kardiologji
                </Link>
              </li>
              <li>
                <Link to="/doctors?department=Neurologji" className="text-gray-400 hover:text-white transition-colors">
                  Neurologji
                </Link>
              </li>
              <li>
                <Link to="/doctors?department=Pediatri" className="text-gray-400 hover:text-white transition-colors">
                  Pediatri
                </Link>
              </li>
              <li>
                <Link to="/doctors?department=Kirurgji" className="text-gray-400 hover:text-white transition-colors">
                  Kirurgji
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">
                  Të gjitha
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakti</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">Prishtinë, Kosovë</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:info@vleresomjekun.com" className="text-gray-400 hover:text-white transition-colors">
                  info@vleresomjekun.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <a href="tel:+38344123456" className="text-gray-400 hover:text-white transition-colors">
                  +383 44 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vlerëso Mjekun. Të gjitha të drejtat e rezervuara.</p>
          <div className="mt-2">
            <Link to="/privacy" className="hover:text-white transition-colors">Privatësia</Link>
            {' · '}
            <Link to="/terms" className="hover:text-white transition-colors">Kushtet e Përdorimit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;