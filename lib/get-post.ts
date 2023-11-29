import { join } from "path"
import { MarkdownPost } from "@/lib/types/markdown-post"
import { readFile } from "fs/promises"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "_posts")

export const getPost = async (slug: string): Promise<MarkdownPost> => {
  const fullPath = join(postsDirectory, `${slug}.md`)

  const fileText = await readFile(fullPath, "utf-8")

  const { data, content } = matter(fileText)

  return {
    slug: slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    authorName: data.author.name,
    authorAvatarURL: data.author.picture,
    coverImageURL: data.coverImage,
    ogImageURL: data.ogImage.url,
    body: content,
  }
}