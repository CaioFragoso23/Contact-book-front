import Image from 'next/image'
import { useRouter } from 'next/router'
import api  from "@/services/api/api"
import Card from "@/components/card"
import { Inter } from 'next/font/google'
import { GetServerSideProps, NextPage } from 'next'
import { contactData } from '@/schemas/contacts.schema'
import { useEffect } from 'react'
import { parseCookies } from 'nookies'

interface HomeProps {
  contacts: contactData[]
}

const Home: NextPage<HomeProps> = ({contacts}) => {
  return (
    <main className=''>
      {contacts.map((contact) => {
        return <Card key={contact.id} contact={contact}/>})}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async(cxt) => {
  const response = await api.get<contactData>("/contacts")

  return {
    props: {contacts: response.data}
  }
}

export default Home