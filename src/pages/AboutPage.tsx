import React from 'react';
import { Users, MessageSquare, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Rreth Platformës Vlerëso Mjekun</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Platforma e parë në Kosovë që u mundëson pacientëve të vlerësojnë dhe të ndajnë përvojat e tyre me mjekët e QKUK-së.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Misioni Ynë</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Të përmirësojmë kujdesin shëndetësor në Kosovë duke promovuar transparencën dhe duke u dhënë zë pacientëve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transparencë</h3>
              <p className="text-gray-600">
                Ofrojmë një platformë transparente për vlerësimin e mjekëve, duke u bazuar në përvojat reale të pacientëve.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Komunikim</h3>
              <p className="text-gray-600">
                Nxisim komunikimin e hapur midis pacientëve për të ndarë përvojat dhe rekomandimet për mjekët.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Besueshmëri</h3>
              <p className="text-gray-600">
                Sigurojmë që të gjitha vlerësimet janë autentike dhe të bazuara në përvoja reale të pacientëve.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Përmirësim</h3>
              <p className="text-gray-600">
                Kontribuojmë në përmirësimin e kujdesit shëndetësor duke promovuar praktika më të mira mjekësore.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team of medical professionals" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Historia Jonë</h2>
              <p className="text-gray-600 mb-4">
                Platforma "Vlerëso Mjekun" u krijua në vitin 2023 nga një grup të rinjsh entuziastë që panë nevojën për më shumë transparencë në sistemin shëndetësor të Kosovës.
              </p>
              <p className="text-gray-600 mb-4">
                Duke vërejtur se shumë pacientë nuk kishin informacion të mjaftueshëm për të zgjedhur mjekun e duhur, vendosëm të krijojmë një platformë ku pacientët mund të ndajnë përvojat e tyre dhe të ndihmojnë njëri-tjetrin.
              </p>
              <p className="text-gray-600">
                Qëllimi ynë është të ndihmojmë në përmirësimin e kujdesit shëndetësor në Kosovë duke promovuar transparencën dhe përgjegjshmërinë në sistemin shëndetësor, duke ndihmuar pacientët të bëjnë zgjedhje më të informuara dhe duke i dhënë zë komunitetit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pyetje të Shpeshta</h2>
            <p className="text-gray-600">
              Gjeni përgjigje për pyetjet më të zakonshme në lidhje me platformën tonë.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Si funksionon platforma?</h3>
              <p className="text-gray-600">
                Platforma jonë ju lejon të kërkoni për mjekë në QKUK, të shikoni vlerësimet e tyre nga pacientë të tjerë, dhe të ndani përvojën tuaj duke lënë një vlerësim dhe koment. Gjithashtu mund të filtroni mjekët sipas departamentit ose specialitetit.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">A mund të vlerësoj çdo mjek?</h3>
              <p className="text-gray-600">
                Po, mund të vlerësoni çdo mjek të listuar në platformën tonë. Aktualisht fokusohemi në mjekët e QKUK-së, por planifikojmë të zgjerojmë mbulimin tonë në të ardhmen.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Si verifikohen vlerësimet?</h3>
              <p className="text-gray-600">
                Të gjitha vlerësimet kontrollohen nga ekipi ynë për të siguruar që janë autentike dhe respektojnë udhëzimet tona. Kërkojmë që përdoruesit të regjistrohen për të lënë vlerësime, gjë që na ndihmon të sigurojmë cilësinë e informacionit.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">A mund të raportoj një vlerësim të papërshtatshëm?</h3>
              <p className="text-gray-600">
                Po, ju mund të raportoni çdo vlerësim që mendoni se është i papërshtatshëm ose keqinformues. Ekipi ynë do të shqyrtojë raportin tuaj dhe do të ndërmarrë veprimet e duhura.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Na Kontaktoni</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Keni pyetje, sugjerime apo feedback? Na kontaktoni dhe do t'ju përgjigjemi sa më shpejt.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Na Shkruani
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;