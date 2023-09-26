import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

export const metadata = {
  title: 'AI Me',
  description: 'Ive trained an A.I. to be me, talk to A.I. Junaid:',
}

export default function AIMe() {
  return (
    <SimpleLayout
      title="I've trained an AI to be me, talk to AI Junaid:"
      intro="Coming back soon... the AI needs a nap, too many questions..."
    ></SimpleLayout>
  )
}
