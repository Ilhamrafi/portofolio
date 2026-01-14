// lib/data/blogs.ts
import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'getting-started-with-ai',
    title: 'Getting Started with AI: A Beginner\'s Guide',
    excerpt: 'Pelajari dasar-dasar artificial intelligence, konsep fundamental, dan bagaimana AI mengubah dunia teknologi modern.',
    content: `
# Getting Started with AI: A Beginner's Guide

Artificial Intelligence (AI) telah menjadi salah satu teknologi paling transformatif di era modern ini. Dari rekomendasi produk di e-commerce hingga autonomous vehicles, AI ada di mana-mana. Tapi apa sebenarnya AI itu?

## Apa Itu Artificial Intelligence?

AI adalah cabang dari ilmu komputer yang fokus pada penciptaan mesin atau software yang dapat melakukan tugas-tugas yang biasanya memerlukan kecerdasan manusia. Ini termasuk learning, reasoning, dan self-correction.

## Konsep Fundamental AI

Ada beberapa konsep dasar yang perlu Anda pahami:

1. **Machine Learning** - Subset dari AI di mana sistem belajar dari data
2. **Deep Learning** - Penggunaan neural networks dengan banyak layer
3. **Natural Language Processing** - Kemampuan untuk memahami bahasa manusia
4. **Computer Vision** - Kemampuan untuk menganalisis dan memahami gambar

## Aplikasi AI di Dunia Nyata

- Healthcare: Diagnosis penyakit lebih akurat
- Finance: Fraud detection dan prediksi pasar
- Transportation: Autonomous vehicles dan route optimization
- Retail: Personalized recommendations

## Kesimpulan

AI bukan lagi teknologi masa depan, tapi masa kini. Dengan memahami dasar-dasarnya, Anda siap untuk memasuki era baru teknologi.
    `,
    category: 'AI',
    date: '2024-01-15',
    readTime: 8,
    author: 'Ilhamrafi',
    image: '/api/placeholder/600/300',
    tags: ['AI', 'Machine Learning', 'Technology']
  },
  {
    id: 2,
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript: Advanced Patterns',
    excerpt: 'Eksplorasi advanced patterns dalam TypeScript termasuk generics, decorators, dan type system yang powerful.',
    content: `
# Mastering TypeScript: Advanced Patterns

TypeScript telah menjadi bahasa pilihan untuk development JavaScript modern. Mari kita explore beberapa advanced patterns yang akan membuat kode Anda lebih powerful dan maintainable.

## Generics

Generics memungkinkan Anda membuat komponen yang reusable dengan type safety.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Decorators

Decorators adalah fitur powerful untuk mengubah behavior dari class atau method.

\`\`\`typescript
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}
\`\`\`

## Type System yang Powerful

TypeScript's type system adalah salah satu yang paling sophisticated di industri.

## Best Practices

1. Gunakan strict mode
2. Avoid 'any' type
3. Leverage union dan intersection types
4. Gunakan type guards

Dengan menguasai patterns ini, Anda akan menulis TypeScript code yang lebih profesional dan aman.
    `,
    category: 'Development',
    date: '2024-01-12',
    readTime: 12,
    author: 'Ilhamrafi',
    image: '/api/placeholder/600/300',
    tags: ['TypeScript', 'JavaScript', 'Web Development']
  },
  {
    id: 3,
    slug: 'productivity-tips-for-developers',
    title: 'Productivity Tips for Developers',
    excerpt: 'Strategi dan tools yang saya gunakan untuk meningkatkan produktivitas dan fokus dalam coding sehari-hari.',
    content: `
# Productivity Tips for Developers

Produktivitas bukan hanya tentang bekerja lebih keras, tapi tentang bekerja lebih smart. Berikut adalah tips yang telah terbukti meningkatkan produktivitas saya sebagai developer.

## 1. Time Blocking

Alokasikan waktu tertentu untuk task tertentu dan hindari multitasking.

## 2. Use the Right Tools

- **IDE**: VS Code dengan extensions yang tepat
- **Terminal**: Zsh dengan Oh My Zsh untuk productivity
- **Automation**: Git hooks untuk enforce standards

## 3. Minimize Distractions

- Disable notifications saat coding
- Gunakan pomodoro technique (25 min focus, 5 min break)
- Dedicated workspace untuk work

## 4. Continuous Learning

- Dedicate 30 minutes daily untuk learning
- Follow tech blogs dan podcasts
- Experiment dengan new technologies

## 5. Code Review Yourself

Sebelum submit PR, review kode Anda sendiri terlebih dahulu.

## Kesimpulan

Produktivitas adalah habit yang bisa dipelajari dan ditingkatkan dengan konsistensi.
    `,
    category: 'Lifestyle',
    date: '2024-01-10',
    readTime: 6,
    author: 'Ilhamrafi',
    image: '/api/placeholder/600/300',
    tags: ['Productivity', 'Tips', 'Career']
  },
];
