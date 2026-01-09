import 'react-phone-number-input/style.css'
import PhoneInputFromLib from 'react-phone-number-input'
import { ChevronDown } from "lucide-react";

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    className?: string;
}

export function PhoneInput({ value, onChange, placeholder = "50 123 4567", error, className = "" }: PhoneInputProps) {
    return (
        <div className={`relative w-full max-w-full ${className}`}>
            <div className={`
                flex items-center bg-slate-50/50 border rounded-xl overflow-hidden transition-all w-full
                ${error
                    ? "border-red-200 bg-red-50/10 focus-within:ring-red-100 ring-1 ring-red-100"
                    : "border-slate-200 focus-within:ring-2 focus-within:ring-slate-100 focus-within:border-[#5A4A32]"}
            `}>
                <PhoneInputFromLib
                    international
                    defaultCountry="AE"
                    value={value}
                    onChange={(val) => onChange(val || "")}
                    placeholder={placeholder}
                    smartCaret={false} // Custom: Fix mobile cursor jumping
                    className="flex-1 PhoneInputCustom min-w-0" // min-w-0 prevents flex blowout
                    numberInputProps={{
                        className: "w-full bg-transparent px-4 py-3 md:py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none placeholder:font-normal font-medium h-[50px] md:h-[54px] min-w-0", // min-w-0
                        style: { width: '100%' },
                        "aria-label": "Phone Number"
                    }}
                    countrySelectProps={{
                        className: "bg-transparent border-r border-slate-200 px-3 hover:bg-slate-100/50 transition-colors outline-none cursor-pointer appearance-none text-xl shrink-0" // shrink-0
                    }}
                />
            </div>
            {error && (
                <p className="mt-1 text-xs font-medium text-red-500 ml-1">{error}</p>
            )}

            {/* Global Style overrides for the library to match the design */}
            <style jsx global>{`
                .PhoneInputCustom {
                    display: flex;
                    align-items: center;
                    width: 100%;
                }
                /* Hide default border of the country select */
                .PhoneInputCountry {
                    padding-left: 12px;
                    padding-right: 8px;
                    margin-right: 0;
                    border-right: 1px solid #e2e8f0;
                    align-self: stretch;
                    display: flex;
                    align-items: center;
                }
                .PhoneInputCountryIcon {
                    width: 24px;
                    height: 18px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    display: block; /* Fix layout shifts */
                }
                .PhoneInputCountrySelectArrow {
                    display: none; /* Hide default arrow */
                }
                .PhoneInputInput {
                    outline: none;
                    background: transparent;
                    width: 100%;
                    min-width: 0; /* Critical for flexbox */
                }
            `}</style>
        </div>
    );
}
