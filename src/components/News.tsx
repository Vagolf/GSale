export type NewsPost = {
  id: number
  title: string
  date: string
  summary: string
  details: string
}

export const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: 'Exciting Updates Coming Soon!',
    date: '2024-06-01',
    summary: 'Stay tuned for new features and improvements to our blog platform.',
    details:
      'We are working on several new features including user profiles, comment sections, and more. Check back soon for more information!',
  },
  {
    id: 2,
    title: 'Welcome to Our News Blog',
    date: '2024-05-25',
    summary: 'We are thrilled to launch our new blog where you can find the latest news and updates.',
    details:
      'Our blog will cover company news, product updates, and tips for getting the most out of our platform.',
  },
]