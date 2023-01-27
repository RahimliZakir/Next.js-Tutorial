// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: "Hamburger", price: 2.5 },
    { name: "Pizza", price: 5 },
  ]);
}
