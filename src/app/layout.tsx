import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "前田さん57歳記念サイト",
  description: "前田拓邦様の57歳のお誕生日を記念した特設サイトです。",
  keywords: "前田拓邦, 社会保険労務士, 誕生日記念, プロフェス",
  openGraph: {
    title: "MAEDA TAKUHO 57th Anniversary Web",
    description: "前田拓邦さんの57歳誕生日記念特設サイト",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
