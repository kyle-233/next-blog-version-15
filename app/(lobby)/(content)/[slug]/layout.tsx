import { SiteFooter } from '@/components/layouts/site-footer'

interface SlugLayoutProps {
  children?: React.ReactNode
}
const SlugLayout = ({ children }: SlugLayoutProps) => {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  )
}

export default SlugLayout
