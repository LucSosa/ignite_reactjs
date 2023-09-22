import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucSosa.png',
      name: 'Lucas Sosa',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { type: 'link', content: 'lucas.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-16 11:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LucSosa.png',
      name: 'Lucas Machado',
      role: 'CTO @ Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { type: 'link', content: 'lucas.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-23 11:30:00')
  },
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}