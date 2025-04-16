import { Mdx } from '@/components/mdx/mdx-component'
import { getAllPosts, getPostBySlug } from '@/lib/reader'
import { formatDate } from '@/lib/utils'
import { PostTitle } from './_components/post-title'
import { MDXRemoteProps } from 'next-mdx-remote/rsc'
const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  let postComponents: MDXRemoteProps['components'] = {}

  try {
    postComponents = await import(
      '../../../../content/blogs/' + slug + '/components.ts'
    )
  } catch (e) {
    console.log('e', e)
    // if (!e || e.code !== 'MODULE_NOT_FOUND') {
    //   throw e
    // }
  }

  return (
    <article>
      <PostTitle title={post.title} />
      <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        {formatDate(post.date)}
      </p>
      <div className="markdown mt-10">
        <Mdx content={post.content} postComponents={postComponents} />
      </div>
    </article>
  )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allPosts = await getAllPosts()
  console.log('allPosts', allPosts)
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default SlugPage
