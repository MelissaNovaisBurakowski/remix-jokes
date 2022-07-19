export default function New () {
    return (
        <>
        <p>Add your own hilarious joke</p>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br/>

        <label htmlFor="content">Content</label>
        <textarea  name="content" id="content" />
        </>
    )
}