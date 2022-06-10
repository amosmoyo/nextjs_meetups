import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layouts/Layout";
import {MongoClient} from 'mongodb'

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://amosmoyo:qiGlmy7Q@cluster0.spg3d.mongodb.net/meetups?retryWrites=true&w=majority');

  const db = client.db();

  const meetupCollection = db.collection('table1')

  const results = await meetupCollection.find().toArray()

  client.close();


  return {
    props: {
      meetups: results.map(x => ({
        title: x.title,
        image: x.image,
        address: x.address,
        id: x._id.toString()
      }))
    }
  }
}

const Home: NextPage = (props: any) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container bg-gray-200">
          <MeetupList meetups={props.meetups} />
      </div>
    </div>
  );
};

export default Home;
