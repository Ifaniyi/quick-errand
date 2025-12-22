import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-teal-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            QuickErrand
          </h3>
          <p className="text-sm leading-relaxed">
            Your trusted estate errand service in Eti-Osa, Lagos.
            We make life easier, one errand at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Pricing</li>
            <li>Become a Rider</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-medium mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Eti-Osa, Lagos
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +234 XXX XXX XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@quickerrand.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © 2025 QuickErrand. All rights reserved.
      </div>
    </footer>
  );
}
