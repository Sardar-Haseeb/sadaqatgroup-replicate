import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#080b11] py-14">
      <div className="section-shell">
        {/* Mobile uses one column; desktop shifts to 3 columns for clear contact grouping */}
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Company Address</h3>
            <p className="text-sm leading-7 text-[#9ca2ac]">
              2KM, Sahianwala Road, Khurrianwala, Faisalabad Pakistan.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Contact Details</h3>
            <ul className="space-y-3 text-sm text-[#9ca2ac]">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>UAN: +92 41-111-010-111</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>sadaqat.limited@sadaqatgroup.net</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Corporate</h3>
            <ul className="space-y-3 text-sm text-[#9ca2ac]">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>Mon To Sat - 09.00-18.00 | Sunday - Close</span>
              </li>
              <li className="flex items-start gap-2">
                <Linkedin size={16} className="mt-[3px] text-[#8f0f1f]" />
                <span>@sadaqatgroup</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs tracking-wider text-[#7c828c]">
          @2022 SADAQAT LIMITED ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
