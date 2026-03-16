import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - CPL T20 | Coastal Premier League',
  description: 'Privacy Policy for CPLT20League.com - Learn how we collect, use, and protect your personal information and data.',
  alternates: {
    canonical: 'https://CPLt20league.com/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


