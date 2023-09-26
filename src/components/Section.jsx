import { useId } from 'react'

export function Section({ title, description, location, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <div>
          <h2
            id={id}
            className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
          >
            {title}
          </h2>
          {description && <p className="text-sm">{description}</p>}
          {location && <p className="text-sm text-gray-800">{location}</p>}
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
