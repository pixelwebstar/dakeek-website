import Image from 'next/image';
import Link from 'next/link';

export default function DownloadLogoPage() {
    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-8">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-stone-100">
                <h1 className="text-3xl font-serif mb-6 text-[#111]">GBP Logo Assets</h1>
                <p className="text-stone-500 mb-10 text-sm leading-relaxed">
                    Download this optimized square logo for your Google Business Profile. 
                    It has been cropped and padded to fit the profile picture perfectly.
                </p>
                
                <div className="relative aspect-square w-64 mx-auto mb-10 rounded-xl overflow-hidden border border-stone-200 bg-black flex items-center justify-center shadow-inner">
                    <Image 
                        src="/icons/logo-square.png" 
                        alt="Dakeek Padded Logo" 
                        width={256}
                        height={256}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>

                <div className="space-y-4">
                    <a 
                        href="/icons/logo-square.png" 
                        download="dakeek-gbp-logo.png"
                        className="block w-full py-4 bg-[#111] text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#C4A67C] transition-all shadow-lg active:scale-95"
                    >
                        Download Optimized Logo
                    </a>
                    
                    <Link 
                        href="/" 
                        className="block w-full py-4 text-stone-400 hover:text-[#111] transition-colors text-xs font-mono uppercase tracking-widest"
                    >
                        Back to Home
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-100 italic text-[10px] text-stone-400">
                    File format: PNG 512x512px
                </div>
            </div>
        </div>
    );
}
