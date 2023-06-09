import { Inter } from 'next/font/google';
import SidebarAdmin from 'components/Navigation/SidebarAdmin';
import 'styles/base/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'TechCell - Đăng nhập',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico?v=2" />
            </head>
            <body className={inter.className}>
                <SidebarAdmin>{children}</SidebarAdmin>
            </body>
        </html>
    );
}
