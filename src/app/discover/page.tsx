import { Metadata } from 'next';
import DiscoverPage from '@/components/pages/DiscoverPage';

export const metadata: Metadata = {
    title: 'Discover Dakeek | Full Service Areas & Social Hub',
    description: 'Explore Dakeek Residential Services across Dubai. Find our official channels, coverage map, and real-time service status.',
    keywords: [
        "Dakeek Instagram",
        "Dakeek Location",
        "Home Maintenance Dubai Marina",
        "AC Repair Palm Jumeirah",
        "Handyman Downtown Dubai",
        "Dakeek Contact"
    ]
};

export default function Page() {
    return <DiscoverPage />;
}
