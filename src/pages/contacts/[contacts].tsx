import { useRouter } from "next/router"
import Card from "@/components/card"
import { contactData } from "@/schemas/contacts.schema"
import { GetStaticProps, NextPage } from "next";
import api from "@/services/api/api";

interface ContactProps {
  contacts: contactData;
}

export const Contact: NextPage<ContactProps> = ({ contacts }: ContactProps) => {
  const router = useRouter()
  return(
    <main>
      <button onClick={() => {router.push("/")}}>Voltar</button>
      <div>
        <Card contact={contacts}></Card>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps<ContactProps> = async (ctx) => {
  const id = ctx.params!.id;
  const response = await api.get<contactData>(`/contacts/${id}`);

  return { props:  {contacts: response.data }, revalidate: 60};
};

export default Contact