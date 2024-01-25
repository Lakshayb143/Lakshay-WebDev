
const Nesting = () => {
  return (
      <div>
          <Person />
          <Message/>
    </div>
  )
}

const Person = () => <h2>Lakshay Bhatia</h2>
const Message = () => {
    return <p>This is my message to everyone</p>
}


export default Nesting