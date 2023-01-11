import { useLoaderData, Form } from "react-router-dom"



function Show(props) {

    const person = useLoaderData()
    console.log(person)

    return (
        <div>
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name} />

            <h2>Update {person.name}</h2>
            <Form action={`/update/${person._id}`} method='post' >
                    <input type="input" name="name" placeholder="person's name" defaultValue={person.name}/>
                    <input type="input" name="image" placeholder="person's picture" />
                    <input type="input" name="title" placeholder="person's title" defaultValue={person.title} />
                    <input type="submit" value={`update ${person.name}`} />
            </Form>


            <h2>Delete Person</h2>
            <Form action={`/delete/${person._id}`} method="post" >

                <input type="submit" value={`delete ${person.name}`} />

            </Form>

        </div>
    )
}

export default Show 