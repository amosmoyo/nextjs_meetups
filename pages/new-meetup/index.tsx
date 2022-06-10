import React from 'react'
import CreateMeetup from '../../components/meetups/CreateMeetup'
import {useRouter} from 'next/router'

const index = () => {

  const router = useRouter();

const onAddMeetupHandler = async (data: any) => {

    const res = await fetch('/api/hello', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    });


    const body = await res.json();

    router.push('/')
}
  return (
    <CreateMeetup onAddMeetup={onAddMeetupHandler} />
  )
}

export default index