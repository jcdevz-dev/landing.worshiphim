// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Features',
      link: '#features'
    },
    {
      name: 'Screenshots',
      link: '#screenshots'
    },
    {
      name: 'Pricing',
      link: '#pricing'
    },
    {
      name: 'Contact',
      link: '#contact'
    },
  ])
}
