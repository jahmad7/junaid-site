import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Products',
  description: "Digital products I've built to solve problems and have fun.",
}

const products = [
  {
    name: 'R U Playing',
    description: 'A mobile puzzle app where you connect 4 pictures by guessing the word that connects them. Test your lateral thinking and word association skills.',
    type: 'Mobile App',
    status: 'Live',
    link: 'https://ruplaying.co/',
    cta: 'Play Now',
  },
  {
    name: 'Black Lotus',
    description: 'An AI-powered web narrative experience where you interact with AI characters at a mysterious resort. Every conversation shapes your unique story.',
    type: 'Web App',
    status: 'Live',
    link: 'https://www.visitblacklotus.com/',
    cta: 'Visit Black Lotus',
  },
  {
    name: 'Unhinged',
    description: 'Share the funniest quotes from your friends. Capture those hilarious out-of-context moments that make your group chats legendary.',
    type: 'Mobile App',
    status: 'Coming Soon',
    link: '#',
    cta: 'Coming Soon',
  },
]

export default function Products() {
  return (
    <SimpleLayout
      title="Things I've built to solve problems and have fun."
      intro="I love building products that entertain, connect people, and push the boundaries of what's possible with technology. Here are some of my recent projects."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product) => (
          <Card as="li" key={product.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <span className="text-2xl">
                {product.name === 'R U Playing' && '🎮'}
                {product.name === 'Black Lotus' && '🌺'}
                {product.name === 'Unhinged' && '😂'}
              </span>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={product.link}>{product.name}</Card.Link>
            </h2>
            <Card.Description>{product.description}</Card.Description>
            <div className="relative z-10 mt-4 flex items-center gap-x-4 text-xs text-zinc-400 dark:text-zinc-500">
              <span>{product.type}</span>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <span>{product.status}</span>
            </div>
            <Card.Cta>{product.cta}</Card.Cta>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
