// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'Chord Diagram & Transposer',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laborum obcaecati dignissimos quae'
    },
    {
      name: 'Song Lineup Manager',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laborum obcaecati dignissimos quae'
    },
    {
      name: 'Extensive Song Database',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laborum obcaecati dignissimos quae'
    }
  ])
}
