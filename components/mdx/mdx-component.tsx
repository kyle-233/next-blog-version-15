import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
// import { MdxImage } from './mdx-image'
// import { cn } from '@/lib/utils'
import '@/styles/mdx.css'
// import { MdxCode } from './mdx-code'

interface MdxProps {
  content: string
  postComponents: MDXRemoteProps['components']
}

export const Mdx = async ({ content = '', postComponents = {} }: MdxProps) => {
  const components = {
    ...postComponents,
    // Counter: Counter,
    // Image: MdxImage,
    // pre: MdxCode,
    // table: ({
    //   className,
    //   ...props
    // }: React.HTMLAttributes<HTMLTableElement>) => (
    //   <div className="my-6 w-full overflow-y-auto">
    //     <table className={cn('w-full', className)} {...props} />
    //   </div>
    // ),
    // tr: ({
    //   className,
    //   ...props
    // }: React.HTMLAttributes<HTMLTableRowElement>) => (
    //   <tr
    //     className={cn('m-0 border-t p-0 even:bg-muted', className)}
    //     {...props}
    //   />
    // ),
    // th: ({
    //   className,
    //   ...props
    // }: React.HTMLAttributes<HTMLTableCellElement>) => (
    //   <th
    //     className={cn(
    //       'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
    //       className,
    //     )}
    //     {...props}
    //   />
    // ),
    // td: ({
    //   className,
    //   ...props
    // }: React.HTMLAttributes<HTMLTableCellElement>) => (
    //   <td
    //     className={cn(
    //       'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
    //       className,
    //     )}
    //     {...props}
    //   />
    // ),
    // button: ({
    //   className,
    //   ...props
    // }: React.HTMLAttributes<HTMLButtonElement>) => (
    //   <button className={cn('', className)} {...props} />
    // ),
  }

  const options: MDXRemoteProps['options'] = {
    // useDynamicImport: true,
    parseFrontmatter: true,
    mdxOptions: {
      // remarkPlugins: [
      //   remarkGfm,
      //   // [remarkToc, { maxDepth: 4 }],
      //   remarkMath,
      // ],
      rehypePlugins: [
        // rehypeKatex,
        [
          rehypePrettyCode,
          {
            keepBackground: true,
            theme: 'material-theme-palenight',
          },
        ],
      ],
    },
  }
  return (
    <MDXRemote source={content} components={components} options={options} />
  )
}
