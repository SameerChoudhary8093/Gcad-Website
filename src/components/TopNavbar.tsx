import { Phone, Mail, MapPin } from 'lucide-react';

export const TopNavbar = (): JSX.Element => {
  return (
    <div className="bg-primary-blue text-white py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-1">
            <Phone size={12} />
            <span>+83066 9444</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={12} />
            <span>admissions@gyanvihar.org</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
