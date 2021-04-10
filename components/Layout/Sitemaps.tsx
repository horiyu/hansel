import Link from 'next/link'

export interface ListsProps {
  id: number
  link: string
  name: string
}

export interface SitemapsProps {
  title: string
  lists: ListsProps[]
}

export const Sitemaps: React.FC<SitemapsProps> = (props) => {

  const SitemapsLists = props.lists.map((Sitemaps: ListsProps) =>
    <li key={ Sitemaps.id }>
      <Link href={ Sitemaps.link }>
        <a>
          { Sitemaps.name }
        </a>
      </Link>
    </li>
  );

  return (
    <div>
      <h2>
        {props.title}
      </h2>
      <ul>
        { SitemapsLists }
      </ul>
    </div>
  )
}