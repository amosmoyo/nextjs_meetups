// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).json({ name: 'John Doe' })

  if(req.method === "POST"){
    const {title, address, image, description} = req.body;

    const client = await MongoClient.connect('mongodb+srv://amosmoyo:qiGlmy7Q@cluster0.spg3d.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupCollection = db.collection('table1')

    const result = await meetupCollection.insertOne({title, address, image, description})

    client.close();

    res.status(201).json({
      message: "Data inserted",
      result
    })

  }
}
