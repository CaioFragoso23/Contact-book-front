import { contactData } from "@/schemas/contacts.schema"

interface ICardProps {
  contact: contactData
}

const Card = ({contact}: ICardProps) => {
  console.log(contact)
  return (
    <div className="rounded bg-green-600 w-20 flex justify-center align-middle" >
      <div className="flex flex-col justify-center align-middle">
        <h1 className="decoration-black">{contact.name}</h1>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  )
}

export default Card