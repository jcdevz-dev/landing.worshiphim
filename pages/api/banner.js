// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      counter: [
        {
          name: 'Users',
          count: '10k'
        },
        {
          name: 'Installs',
          count: '100k+'
        },
        {
          name: 'Reviews',
          count: '841'
        },
        {
          name: 'Rating',
          count: '4.8'
        },
      ],
      title: 'WorshipHIM',
      details: 'Your best Praise and Worship song chords companion with chord transposer, chord diagram, song lineups and much more!'
    }
  )
}
