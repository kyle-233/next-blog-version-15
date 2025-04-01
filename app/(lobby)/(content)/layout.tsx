import { SiteHeader } from '@/components/layouts/site-header'

interface BlogLayoutProps {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="relative flex flex-col">
      <SiteHeader />
      <main className="flex-1 container max-w-2xl pb-12">{children}</main>
    </div>
  )
}

export default BlogLayout
