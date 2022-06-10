import React from "react";
import Details from "../../components/meetups/Details";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://amosmoyo:qiGlmy7Q@cluster0.spg3d.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("table1");

  const results = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: results.map((x) => ({
      params: {
        meetupid: x._id.toString(),
      },
    })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://amosmoyo:qiGlmy7Q@cluster0.spg3d.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("table1");

  const results = await meetupCollection.findOne({ _id: new ObjectId(id) });

  client.close();

  return {
    props: {
      meetup: {
        id: results?._id.toString(),
        title: results?.title,
        image: results?.image,
        description: results?.description,
      },
    },
  };
}

const index = (props: any) => {
  return (
    <>
    <Head>
      <title>{props.meetup.title}</title>
      <meta name="description" content={props.meetup.description} />
    </Head>
      <Details
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
      />
    </>
  );
};

export default index;
